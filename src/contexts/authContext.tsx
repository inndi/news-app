import { createContext, ReactNode, useContext, useEffect, useState } from 'react';

import PagePreloader from '../components/PagePreloader/PagePreloader';
import { LoginValues, RegisterValues, UserData } from '../interfaces/interfaces';
import * as authApi from '../services/authApi';

interface AuthContextData {
  user: UserData | null;
  isLoggedIn: boolean;
  login: (data: LoginValues) => Promise<void>;
  register: (data: RegisterValues) => Promise<Response>;
  logout: () => void;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);
interface AuthProviderProps {
  children: ReactNode;
}

const AuthProvider = (props: AuthProviderProps) => {
  const [currentUser, setCurrentUser] = useState<UserData | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [token, setToken] = useState<string | null>(() => localStorage.getItem('token'));

  useEffect(() => {
    // non authenticated user
    if (!token) return setIsLoading(false);

    authApi
      .getUser(token)
      .then(({ data: user }) => {
        setCurrentUser(user);
      })
      .catch(console.error)
      .finally(() => setIsLoading(false));
  }, [token]);

  const login = (values: LoginValues) => {
    return authApi.login(values).then(({ data: user }) => {
      setToken(user.token);
      setCurrentUser(user);
      localStorage.setItem('token', user.token);
    });
  };
  const register = (values: RegisterValues) => {
    return authApi.register(values);
  };

  const logout = () => {
    setCurrentUser(null);
    setToken(null);
    localStorage.removeItem('token');
  };

  const authData: AuthContextData = {
    user: currentUser,
    isLoggedIn: !!currentUser,
    login,
    register,
    logout,
  };

  console.log('AuthProvider Render');
  if (isLoading) {
    return <PagePreloader />;
  } else {
    return <AuthContext.Provider value={authData} {...props} />;
  }
};

const useAuth = (): AuthContextData => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error(`useAuth must be used within a AuthProvider`);
  }
  return context;
};

export { AuthProvider, useAuth };
