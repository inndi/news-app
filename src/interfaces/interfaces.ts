export interface UserData {
  email: string;
  userName: string;
  token: string;
}

export interface LoginValues {
  email: string;
  password: string;
}

export interface RegisterValues extends LoginValues {
  username: string;
  confirmPassword: string;
}
