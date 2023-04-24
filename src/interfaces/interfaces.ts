export interface UserData {
  email: string;
  name: string;
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

export interface AuthProps {
  onClose: (id?: string) => void;
  title?: string;
  redirectText?: string;
  id: string;
}

export interface AuthFormProps {
  onSubmitSuccess: () => void;
  id?: string;
}

export interface NewsArticle {
  _id?: string;
  keyword: string;
  title: string;
  text: string;
  date: string;
  source: string;
  link: string;
  image: string;
}

export type NewsArticles = NewsArticle[];
export interface BasicContent {
  title?: string;
  text?: string;
}
