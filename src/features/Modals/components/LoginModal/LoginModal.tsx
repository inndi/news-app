import AuthFormWrapper from '../../../../components/AuthFormWrapper/AuthFormWrapper';
import { AuthProps } from '../../../../interfaces/interfaces';
import LoginForm from '../../../LoginForm/LoginForm';

const LoginModal = (props: AuthProps) => {
  const { title, redirectText, id, onClose } = props;

  console.log('LoginModal Render');
  return (
    <section className="login-modal">
      <AuthFormWrapper title={title} redirectText={redirectText} id={`${id}`}>
        <LoginForm id={`${id}`} onClose={onClose} />
      </AuthFormWrapper>
    </section>
  );
};

export default LoginModal;
