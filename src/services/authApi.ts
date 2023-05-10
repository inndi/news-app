import axios from 'axios';

import { API_URL } from '../config/constants';
import { LoginValues, RegisterValues, UserData } from '../interfaces/interfaces';

const authApi = axios.create({
  baseURL: API_URL,
});

interface AuthResponseData {
  data: UserData;
}

const getUser = (token: string): Promise<AuthResponseData> => {
  return authApi.get('/users/me', { headers: { Authorization: `Bearer ${token}` } });
};

const login = ({ email, password }: LoginValues): Promise<AuthResponseData> => {
  console.log(email, password);

  return authApi.post('/signin', {
    email,
    password,
  });
};

const register = ({ email, password, username }: RegisterValues): Promise<Response> => {
  console.log(email, password, username);

  return authApi.post('/signup', {
    email: email,
    password: password,
    name: username,
  });
};

export { getUser, login, register };
