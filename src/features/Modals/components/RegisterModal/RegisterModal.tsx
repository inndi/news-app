import { useState } from 'react';

import AuthFormWrapper from '../../../../components/AuthFormWrapper/AuthFormWrapper';
import { AuthProps } from '../../../../interfaces/interfaces';
import RegisterForm from '../../../RegisterForm/RegisterForm';
import RegisterSuccessCard from '../RegisterSuccessCard/RegisterSuccessCard';

const RegisterModal = (props: AuthProps) => {
  const { title, redirectText, id, onClose } = props;
  const [isRegisterSuccessCard, setIsRegisterSuccessCard] = useState<boolean>(false);

  const onSubmitSuccess = () => {
    setIsRegisterSuccessCard(true);
  };

  console.log('RegisterModal Render');
  return (
    <section className="register-modal">
      {isRegisterSuccessCard ? (
        <RegisterSuccessCard
          id={id}
          title="Registration successfully completed!"
          redirectText="Sign in"
          onClose={onClose}
        />
      ) : (
        <AuthFormWrapper title={title} redirectText={redirectText} id={id}>
          <RegisterForm onSubmitSuccess={onSubmitSuccess} />
        </AuthFormWrapper>
      )}
    </section>
  );
};

export default RegisterModal;
