import React, { createContext, useContext, useState, useEffect } from 'react';
import * as authService from '../services/authService';
import { useNavigate } from 'react-router-dom';

interface User {
  id: string;
  name: string;
  email: string;
  provider: string;
  avatar?: string;
}

interface AuthContextType {
  user: User | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  login: (email: string, password: string) => Promise<{success: boolean, errorMessage?: string}>;
  register: (name: string, email: string, password: string) => Promise<{success: boolean, errorMessage?: string}>;
  loginWithGoogle: () => Promise<{success: boolean, errorMessage?: string}>;
  loginWithFacebook: () => Promise<{success: boolean, errorMessage?: string}>;
  logout: () => Promise<void>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    // Check for redirect result first
    const checkRedirect = async () => {
      try {
        const redirectResult = await authService.checkRedirectResult();
        if (redirectResult.success && redirectResult.user) {
          setUser(redirectResult.user);
          return true;
        }
        return false;
      } catch (error) {
        console.error('Error checking redirect result:', error);
        return false;
      }
    };

    // Check if user is already logged in
    const checkAuthStatus = async () => {
      try {
        const redirectSuccess = await checkRedirect();
        
        if (!redirectSuccess) {
          const result = await authService.getCurrentUser();
          if (result.success && result.user) {
            setUser(result.user);
          } else {
            setUser(null);
          }
        }
      } catch (error) {
        console.error('Error checking auth status:', error);
        setUser(null);
      } finally {
        setIsLoading(false);
      }
    };
    
    checkAuthStatus();
  }, []);

  const login = async (email: string, password: string) => {
    setIsLoading(true);
    
    try {
      const result = await authService.loginWithEmailPassword(email, password);
      
      if (result.success && result.user) {
        setUser(result.user);
        return { success: true };
      } else {
        return { 
          success: false, 
          errorMessage: result.errorMessage || 'Error al iniciar sesión. Por favor, intenta de nuevo.' 
        };
      }
    } catch (error) {
      console.error('Login error:', error);
      return { 
        success: false, 
        errorMessage: 'Error inesperado al iniciar sesión. Por favor, intenta de nuevo.' 
      };
    } finally {
      setIsLoading(false);
    }
  };

  const register = async (name: string, email: string, password: string) => {
    setIsLoading(true);
    
    try {
      const result = await authService.registerWithEmailPassword(name, email, password);
      
      if (result.success && result.user) {
        setUser(result.user);
        return { success: true };
      } else {
        return { 
          success: false, 
          errorMessage: result.errorMessage || 'Error al registrarse. Por favor, intenta de nuevo.' 
        };
      }
    } catch (error) {
      console.error('Registration error:', error);
      return { 
        success: false, 
        errorMessage: 'Error inesperado al registrarse. Por favor, intenta de nuevo.' 
      };
    } finally {
      setIsLoading(false);
    }
  };

  const loginWithGoogle = async () => {
    setIsLoading(true);
    
    try {
      const result = await authService.loginWithGoogle();
      
      if (result.success) {
        if (result.user) {
          setUser(result.user);
          return { success: true };
        } else if (result.redirecting) {
          // We're being redirected, so we'll handle the result in the useEffect
          console.log('Redirecting to Google login...');
          return { success: true, redirecting: true };
        } else {
          return { 
            success: false, 
            errorMessage: 'Error al iniciar sesión con Google. Por favor, intenta de nuevo.' 
          };
        }
      } else {
        return { 
          success: false, 
          errorMessage: result.errorMessage || 'Error al iniciar sesión con Google. Por favor, intenta de nuevo.' 
        };
      }
    } catch (error) {
      console.error('Google login error:', error);
      return { 
        success: false, 
        errorMessage: 'Error inesperado al iniciar sesión con Google. Por favor, intenta de nuevo.' 
      };
    } finally {
      setIsLoading(false);
    }
  };

  const loginWithFacebook = async () => {
    setIsLoading(true);
    
    try {
      const result = await authService.loginWithFacebook();
      
      if (result.success) {
        if (result.user) {
          setUser(result.user);
          return { success: true };
        } else if (result.redirecting) {
          // We're being redirected, so we'll handle the result in the useEffect
          console.log('Redirecting to Facebook login...');
          return { success: true, redirecting: true };
        } else {
          return { 
            success: false, 
            errorMessage: 'Error al iniciar sesión con Facebook. Por favor, intenta de nuevo.' 
          };
        }
      } else {
        return { 
          success: false, 
          errorMessage: result.errorMessage || 'Error al iniciar sesión con Facebook. Por favor, intenta de nuevo.' 
        };
      }
    } catch (error) {
      console.error('Facebook login error:', error);
      return { 
        success: false, 
        errorMessage: 'Error inesperado al iniciar sesión con Facebook. Por favor, intenta de nuevo.' 
      };
    } finally {
      setIsLoading(false);
    }
  };

  const logout = async () => {
    setIsLoading(true);
    
    try {
      await authService.logout();
      setUser(null);
      navigate('/');
    } catch (error) {
      console.error('Logout error:', error);
      throw error;
    } finally {
      setIsLoading(false);
    }
  };

  // Redirect to demo welcome page when user logs in
  useEffect(() => {
    if (user && !isLoading) {
      navigate('/demo-bienvenido');
    }
  }, [user, isLoading, navigate]);

  const value = {
    user,
    isAuthenticated: !!user,
    isLoading,
    login,
    register,
    loginWithGoogle,
    loginWithFacebook,
    logout
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  
  return context;
};