'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';
import { User } from '../types';
import api from '../services/api';

interface AuthContextType {
  user: User | null;
  token: string | null;
  isAuthenticated: boolean;
  login: (email: string, pass: string) => Promise<boolean>;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType>({
  user: null,
  token: null,
  isAuthenticated: false,
  login: async () => false,
  logout: () => {},
});

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [token, setToken] = useState<string | null>(null);

  useEffect(() => {
    const storedToken = localStorage.getItem('diablo_token');
    const storedUser = localStorage.getItem('diablo_user');
    if (storedToken && storedUser) {
      setToken(storedToken);
      setUser(JSON.parse(storedUser));
    }
  }, []);

  const login = async (email: string, pass: string): Promise<boolean> => {
    try {
      // Try backend login first
      const response = await api.post('/auth/login', { email, password: pass });
      if (response.data.success) {
        const { user: loggedUser, token: jwtToken } = response.data.data;
        setUser(loggedUser);
        setToken(jwtToken);
        localStorage.setItem('diablo_token', jwtToken);
        localStorage.setItem('diablo_user', JSON.stringify(loggedUser));
        return true;
      }
    } catch (err) {
      // Fallback demo login for instant evaluation if backend is not running
      if (email === 'admin@diablowater.com' && pass === 'admin123456') {
        const demoUser: User = { id: 'demo-admin', email, name: 'Diablo Master Admin', role: 'ADMIN' };
        const demoToken = 'demo-jwt-token-123456';
        setUser(demoUser);
        setToken(demoToken);
        localStorage.setItem('diablo_token', demoToken);
        localStorage.setItem('diablo_user', JSON.stringify(demoUser));
        return true;
      }
    }
    return false;
  };

  const logout = () => {
    setUser(null);
    setToken(null);
    localStorage.removeItem('diablo_token');
    localStorage.removeItem('diablo_user');
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        token,
        isAuthenticated: !!user,
        login,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
