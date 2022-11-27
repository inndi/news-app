import Button from '../../components/Button/Button';
import { ROUTES } from '../../config/constants';
import LoginForm from '../../features/LoginForm/LoginForm';

import './LoginPage.scss';

interface AuthProps {
  switchAuth: (route: string) => void;
}

const LoginPage = (props: AuthProps) => {
  console.log('LoginPage Render');
  return (
    <section className="login-page">
      <Button
        type="button"
        modifier="secondary"
        onClick={() => props.switchAuth(ROUTES.register)}
      >
        Sign up
      </Button>
      <LoginForm />
    </section>
  );
};

export default LoginPage;
