import { LoginValues, RegisterValues, UserData } from '../interfaces/interfaces';

const user: UserData = {
  email: 'inna@inna.com',
  userName: 'Inna',
  token: '3k2rn3jkq2b5tjk3bjk3nrkn4jktbjn2klrl2r9',
};

const getUser = (token: string): Promise<UserData> => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(user);
    }, 2000);
  });
};

const login = (data: LoginValues): Promise<UserData> => {
  console.log(data);
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(user);
    }, 2000);
  });
};

const register = (data: RegisterValues): Promise<UserData> => {
  console.log(data);
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(user);
    }, 2000);
  });
};

const logout = (token: string | null): Promise<string> => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('ok');
    }, 2000);
  });
};

export { getUser, login, logout, register };
