import { 
  signInWithEmailAndPassword, 
  createUserWithEmailAndPassword, 
  signInWithPopup,
  signInWithRedirect,
  getRedirectResult,
  signOut,
  updateProfile,
  User as FirebaseUser,
  browserSessionPersistence,
  setPersistence
} from 'firebase/auth';
import { auth, googleProvider, facebookProvider } from './firebaseConfig';

// Convert Firebase user to our User type
const formatUser = (user: FirebaseUser) => {
  return {
    id: user.uid,
    name: user.displayName || user.email?.split('@')[0] || 'Usuario',
    email: user.email || '',
    provider: user.providerData[0]?.providerId || 'email',
    avatar: user.photoURL || undefined
  };
};

// Login with email and password
export const loginWithEmailPassword = async (email: string, password: string) => {
  try {
    // Use session persistence to avoid issues with cookies
    await setPersistence(auth, browserSessionPersistence);
    const result = await signInWithEmailAndPassword(auth, email, password);
    return {
      success: true,
      user: formatUser(result.user)
    };
  } catch (error: any) {
    console.error('Login error:', error);
    return {
      success: false,
      error: error,
      errorCode: error.code,
      errorMessage: getErrorMessage(error.code)
    };
  }
};

// Register with email and password
export const registerWithEmailPassword = async (name: string, email: string, password: string) => {
  try {
    // Use session persistence to avoid issues with cookies
    await setPersistence(auth, browserSessionPersistence);
    const result = await createUserWithEmailAndPassword(auth, email, password);
    
    // Update profile with name
    if (result.user) {
      await updateProfile(result.user, {
        displayName: name
      });
    }
    
    return {
      success: true,
      user: formatUser(result.user)
    };
  } catch (error: any) {
    console.error('Registration error:', error);
    return {
      success: false,
      error: error,
      errorCode: error.code,
      errorMessage: getErrorMessage(error.code)
    };
  }
};

// Login with Google
export const loginWithGoogle = async () => {
  try {
    // Use session persistence to avoid issues with cookies
    await setPersistence(auth, browserSessionPersistence);
    
    // Try popup first
    try {
      const result = await signInWithPopup(auth, googleProvider);
      return {
        success: true,
        user: formatUser(result.user)
      };
    } catch (popupError: any) {
      console.log('Popup error:', popupError.code);
      
      // If popup is blocked or other error, fall back to redirect
      if (popupError.code === 'auth/popup-blocked' || 
          popupError.code === 'auth/popup-closed-by-user' ||
          popupError.code === 'auth/cancelled-popup-request') {
        
        // Try redirect method instead
        await signInWithRedirect(auth, googleProvider);
        
        return {
          success: true,
          user: null,
          redirecting: true
        };
      } else {
        throw popupError;
      }
    }
  } catch (error: any) {
    console.error('Google login error:', error);
    return {
      success: false,
      error: error,
      errorCode: error.code,
      errorMessage: getErrorMessage(error.code)
    };
  }
};

// Login with Facebook
export const loginWithFacebook = async () => {
  try {
    // Use session persistence to avoid issues with cookies
    await setPersistence(auth, browserSessionPersistence);
    
    // Try popup first
    try {
      const result = await signInWithPopup(auth, facebookProvider);
      return {
        success: true,
        user: formatUser(result.user)
      };
    } catch (popupError: any) {
      console.log('Popup error:', popupError.code);
      
      // If popup is blocked or other error, fall back to redirect
      if (popupError.code === 'auth/popup-blocked' || 
          popupError.code === 'auth/popup-closed-by-user' ||
          popupError.code === 'auth/cancelled-popup-request') {
        
        // Try redirect method instead
        await signInWithRedirect(auth, facebookProvider);
        
        return {
          success: true,
          user: null,
          redirecting: true
        };
      } else {
        throw popupError;
      }
    }
  } catch (error: any) {
    console.error('Facebook login error:', error);
    return {
      success: false,
      error: error,
      errorCode: error.code,
      errorMessage: getErrorMessage(error.code)
    };
  }
};

// Check for redirect result
export const checkRedirectResult = async () => {
  try {
    const result = await getRedirectResult(auth);
    if (result && result.user) {
      return {
        success: true,
        user: formatUser(result.user)
      };
    }
    return {
      success: false,
      user: null
    };
  } catch (error: any) {
    console.error('Redirect result error:', error);
    return {
      success: false,
      error: error,
      errorCode: error.code,
      errorMessage: getErrorMessage(error.code)
    };
  }
};

// Logout
export const logout = async () => {
  try {
    await signOut(auth);
    return {
      success: true,
      message: "Logout successful"
    };
  } catch (error: any) {
    console.error('Logout error:', error);
    return {
      success: false,
      error: error,
      errorCode: error.code,
      errorMessage: getErrorMessage(error.code)
    };
  }
};

// Get current user
export const getCurrentUser = () => {
  return new Promise((resolve, reject) => {
    const unsubscribe = auth.onAuthStateChanged(user => {
      unsubscribe();
      if (user) {
        resolve({
          success: true,
          user: formatUser(user)
        });
      } else {
        resolve({
          success: false,
          user: null
        });
      }
    }, reject);
  });
};

// Helper function to get user-friendly error messages
const getErrorMessage = (errorCode: string): string => {
  switch (errorCode) {
    case 'auth/email-already-in-use':
      return 'Este correo electrónico ya está en uso. Por favor, utiliza otro o inicia sesión.';
    case 'auth/invalid-email':
      return 'El correo electrónico no es válido. Por favor, verifica e intenta de nuevo.';
    case 'auth/user-disabled':
      return 'Esta cuenta ha sido deshabilitada. Contacta al soporte para más información.';
    case 'auth/user-not-found':
      return 'No existe una cuenta con este correo electrónico. Por favor, regístrate.';
    case 'auth/wrong-password':
      return 'Contraseña incorrecta. Por favor, intenta de nuevo.';
    case 'auth/weak-password':
      return 'La contraseña es demasiado débil. Debe tener al menos 6 caracteres.';
    case 'auth/popup-blocked':
      return 'El navegador ha bloqueado la ventana emergente. Por favor, permite ventanas emergentes e intenta de nuevo.';
    case 'auth/popup-closed-by-user':
      return 'Has cerrado la ventana de autenticación antes de completar el proceso. Intenta de nuevo.';
    case 'auth/cancelled-popup-request':
      return 'La solicitud de autenticación fue cancelada. Intenta de nuevo.';
    case 'auth/account-exists-with-different-credential':
      return 'Ya existe una cuenta con este correo electrónico pero con otro método de inicio de sesión. Intenta con otro método.';
    case 'auth/network-request-failed':
      return 'Error de conexión. Verifica tu conexión a internet e intenta de nuevo.';
    case 'auth/timeout':
      return 'Tiempo de espera agotado. Verifica tu conexión e intenta de nuevo.';
    case 'auth/too-many-requests':
      return 'Demasiados intentos fallidos. Por favor, intenta más tarde.';
    default:
      return 'Ha ocurrido un error durante la autenticación. Por favor, intenta de nuevo.';
  }
};