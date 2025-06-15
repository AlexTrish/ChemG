import React, { createContext, useContext, useState, useEffect } from 'react';

interface User {
  id: string;
  email: string;
  username: string;
  organization?: string;
  group?: string;
}

interface AuthContextType {
  user: User | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  login: (email: string, password: string) => Promise<void>;
  register: (userData: RegisterData) => Promise<void>;
  logout: () => void;
  loginWithGoogle: () => Promise<void>;
}

interface RegisterData {
  username: string;
  email: string;
  password: string;
  organization?: string;
  group?: string;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Проверяем сохраненную сессию
    const savedUser = localStorage.getItem('chemg_user');
    if (savedUser) {
      setUser(JSON.parse(savedUser));
    }
    setIsLoading(false);
  }, []);

  const login = async (email: string, password: string) => {
    setIsLoading(true);
    try {
      // Здесь будет API вызов
      const mockUser: User = {
        id: '1',
        email,
        username: 'Пользователь',
      };
      setUser(mockUser);
      localStorage.setItem('chemg_user', JSON.stringify(mockUser));
    } catch (error) {
      throw error;
    } finally {
      setIsLoading(false);
    }
  };

  const register = async (userData: RegisterData) => {
    setIsLoading(true);
    try {
      // Здесь будет API вызов
      const newUser: User = {
        id: Date.now().toString(),
        email: userData.email,
        username: userData.username,
        organization: userData.organization,
        group: userData.group,
      };
      setUser(newUser);
      localStorage.setItem('chemg_user', JSON.stringify(newUser));
    } catch (error) {
      throw error;
    } finally {
      setIsLoading(false);
    }
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('chemg_user');
  };

  const loginWithGoogle = async () => {
    setIsLoading(true);
    try {
      // Здесь будет Google OAuth
      const mockUser: User = {
        id: '2',
        email: 'user@gmail.com',
        username: 'Google Пользователь',
      };
      setUser(mockUser);
      localStorage.setItem('chemg_user', JSON.stringify(mockUser));
    } catch (error) {
      throw error;
    } finally {
      setIsLoading(false);
    }
  };

  const value = {
    user,
    isAuthenticated: !!user,
    isLoading,
    login,
    register,
    logout,
    loginWithGoogle,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};