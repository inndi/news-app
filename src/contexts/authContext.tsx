import { createContext, ReactNode, useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import PagePreloader from '../components/PagePreloader/PagePreloader';
import { ROUTES } from '../config/constants';
import { useDidMount } from '../hooks/hooks';
import { LoginValues, RegisterValues, UserData } from '../interfaces/interfaces';
import * as authApi from '../services/authApi';

interface AuthContextData {
  user: UserData | null;
  isLoggedIn: boolean;
  login: (data: LoginValues) => Promise<void>;
  register: (data: RegisterValues) => Promise<UserData>;
  logout: () => void;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);
interface AuthProviderProps {
  children: ReactNode;
}

const AuthProvider = (props: AuthProviderProps) => {
  const [currentUser, setCurrentUser] = useState<UserData | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const token: string | null = localStorage.getItem('token');

  const navigate = useNavigate();

  useDidMount(() => {
    if (!token) return setIsLoading(false);

    authApi
      .getUser(token)
      .then((res) => {
        setCurrentUser(res);
        navigate(ROUTES.main);
      })
      .catch(() => {})
      .finally(() => setIsLoading(false));
  });

  const login = (data: LoginValues) => {
    return authApi.login(data).then((res) => {
      setCurrentUser(res);
      localStorage.setItem('token', res.token);
    });
  };

  const logout = () => {
    return authApi.logout(token).finally(() => {
      setCurrentUser(null);
      localStorage.removeItem('token');
    });
  };

  const authData: AuthContextData = {
    user: currentUser,
    isLoggedIn: !!currentUser,
    login,
    register: authApi.register,
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
