import * as React from 'react';
import cache from '../utils/cache';

type AuthParams = {
  token: string;
  persist?: boolean;
};

type AuthContextData = {
  isAuthenticated: boolean;
  authenticate: ({ token, persist }: AuthParams) => void;
  logout: () => void;
};

type ProviderProps = {
  children: React.ReactNode;
};

export const AuthContext = React.createContext<AuthContextData>(
  {} as AuthContextData
);

export function AuthProvider({ children }: ProviderProps) {
  const { setCache } = cache;
  const [isAuthenticated, setIsAuthenticated] = React.useState(false);

  function authenticate({ token, persist }: AuthParams) {
    setCache(token);
    setIsAuthenticated(true);
    if (persist) {
      localStorage.setItem('token', token);
    }
  }

  function logout() {
    setCache(undefined);
    setIsAuthenticated(false);
    localStorage.removeItem('token');
  }

  return (
    <AuthContext.Provider value={{ authenticate, isAuthenticated, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth(): AuthContextData {
  const context = React.useContext(AuthContext);

  if (!context) {
    throw new Error('useAuth must be within its context');
  }
  return context;
}
