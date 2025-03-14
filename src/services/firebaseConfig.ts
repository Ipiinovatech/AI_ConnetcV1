import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider, FacebookAuthProvider } from 'firebase/auth';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBZrJp4hLj1J_cW_0fPM3dB-jZWZCpwQT0",
  authDomain: "ai-connect-auth.firebaseapp.com",
  projectId: "ai-connect-auth",
  storageBucket: "ai-connect-auth.appspot.com",
  messagingSenderId: "850612790408",
  appId: "1:850612790408:web:2f4b9b8b8b8b8b8b8b8b8b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// Configure providers
const googleProvider = new GoogleAuthProvider();
googleProvider.setCustomParameters({
  prompt: 'select_account'
});

const facebookProvider = new FacebookAuthProvider();
facebookProvider.setCustomParameters({
  display: 'popup'
});

export { auth, googleProvider, facebookProvider };