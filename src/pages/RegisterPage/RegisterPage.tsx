import Button from '../../components/Button/Button';
import { ROUTES } from '../../config/constants';
import RegisterForm from '../../features/RegisterForm/RegisterForm';

import './RegisterPage.scss';

interface AuthProps {
  switchAuth: (route: string) => void;
}

const RegisterPage = (props: AuthProps) => {
  console.log('RegisterPage Render');
  return (
    <section className="register-page">
      <Button
        type="button"
        modifier="secondary"
        onClick={() => props.switchAuth(ROUTES.login)}
      >
        Login
      </Button>
      <RegisterForm />
    </section>
  );
};

export default RegisterPage;
