import { createContext, ReactNode, useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { AxiosHeaders, AxiosRequestConfig } from 'axios';

import PagePreloader from '../components/PagePreloader/PagePreloader';
import { ROUTES } from '../config/constants';
import { LoginValues, RegisterValues, UserData } from '../interfaces/interfaces';
import * as authApi from '../services/authApi';
import { mainApi } from '../services/mainApi';

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

interface AxiosCustomHeaders extends AxiosHeaders {
  Authorization?: string;
}

const AuthProvider = (props: AuthProviderProps) => {
  const [currentUser, setCurrentUser] = useState<UserData | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [token, setToken] = useState<string | null>(localStorage.getItem('token'));

  const navigate = useNavigate();

  const setTokenToRequest = (token: string) => {
    mainApi.interceptors.request.use((config: AxiosRequestConfig) => {
      config.headers = {
        ...config.headers,
        Authorization: `Bearer ${token}`,
      } as AxiosCustomHeaders;
      return config;
    });
  };

  useEffect(() => {
    if (!token) return setIsLoading(false);

    authApi
      .getUser(token)
      .then(({ data: res }) => {
        setCurrentUser(res);
        setTokenToRequest(token);
      })
      .catch(() => {})
      .finally(() => setIsLoading(false));
  }, [token]);

  const login = (data: LoginValues) => {
    return authApi.login(data).then(({ data: res }) => {
      setToken(res.token);
      setCurrentUser(res);
      localStorage.setItem('token', res.token);
      setTokenToRequest(res.token);
    });
  };
  const register = (data: RegisterValues) => {
    console.log(data);

    return authApi.register(data);
  };

  const logout = () => {
    setCurrentUser(null);
    localStorage.removeItem('token');
    navigate(ROUTES.main);
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
