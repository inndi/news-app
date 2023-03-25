import { useAppDispatch } from '../../redux/hooks';
import { closeModal, MODAL_IDS, openModal } from '../../redux/slices/modalsSlice';

import './AuthFormWrapper.scss';

interface AuthFormProps {
  children?: JSX.Element;
  title?: string;
  redirectText?: string;
  id: string;
}

const AuthFormWrapper = (props: AuthFormProps) => {
  const dispatch = useAppDispatch();
  const { id } = props;

  const handleRedirect = () => {
    dispatch(closeModal(id));

    if (id === 'login') {
      dispatch(
        openModal(MODAL_IDS.register, {
          title: 'Sign up',
          redirectText: 'Sign in',
        }),
      );
    } else if (id === 'register') {
      dispatch(
        openModal(MODAL_IDS.login, {
          title: 'Sign in',
          redirectText: 'Sign up',
        }),
      );
    }
  };

  console.log('AuthFormWrapper Render');
  return (
    <div className="auth-form-wrapper ">
      <h2 className="auth-form-wrapper__title">{props.title}</h2>
      {props.children}
      <p className="auth-form-wrapper__redirect-text">
        {' '}
        or
        <span className="auth-form-wrapper__redirect-link" onClick={handleRedirect}>
          {` ${props.redirectText}`}
        </span>
      </p>
    </div>
  );
};

export default AuthFormWrapper;
