import axios from 'axios';

import { LoginValues, RegisterValues, UserData } from '../interfaces/interfaces';

const authApi = axios.create({
  baseURL: 'http://localhost:3003',
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
