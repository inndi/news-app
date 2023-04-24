import { useAppDispatch } from '../../../../redux/hooks';
import { MODAL_IDS, openModal } from '../../../../redux/slices/modalsSlice';

import './RegisterSuccessCard.scss';

interface RegisterSuccessCardProps {
  onClose: (id?: string) => void;
  id?: string;
  title?: string;
  redirectText?: string;
}

const RegisterSuccessCard = (props: RegisterSuccessCardProps) => {
  const { title, redirectText, onClose, id } = props;
  const dispatch = useAppDispatch();

  const handleRedirect = () => {
    onClose(id);

    if (id === 'register') {
      dispatch(
        openModal(MODAL_IDS.login, {
          title: 'Sign in',
          redirectText: 'Sign up',
        }),
      );
    }
  };

  console.log('RegisterSuccessCard Render');
  return (
    <div className="register-success-card">
      <h2 className="register-success-card__title">{title}</h2>
      <p className="register-success-card__link" onClick={handleRedirect}>
        {redirectText}
      </p>
    </div>
  );
};

export default RegisterSuccessCard;
