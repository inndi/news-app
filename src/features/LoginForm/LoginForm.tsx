import { useForm } from 'react-hook-form';

import Button from '../../components/Button/Button';
import ErrorMessage from '../../components/ErrorMessage/ErrorMessage';
import InputText from '../../components/InputText/InputText';
import { useAuth } from '../../contexts/authContext';
import { AuthProps, LoginValues } from '../../interfaces/interfaces';
import { checkSpace } from '../../utils/validationUtils';

import './LoginForm.scss';

interface LoginFormValues extends LoginValues {
  server?: string;
}

const LoginForm = ({ id, onClose }: AuthProps) => {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
    setError,
    clearErrors,
  } = useForm<LoginFormValues>({ mode: 'onChange' });

  const { login } = useAuth();

  const onSubmit = (data: LoginFormValues): void => {
    login(data)
      .then(() => {
        onClose(id);
      })
      .catch(() => {
        setError('server', {
          type: 'server',
          message: 'Something went wrong on server side',
        });
      });
  };

  console.log('LoginForm Render', isValid);
  return (
    <form className="login-form" onSubmit={handleSubmit(onSubmit)} noValidate>
      <InputText
        title="Email"
        type="email"
        register={register}
        name="email"
        validation={{
          required: 'fill this field',
          pattern: {
            value:
              /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
            message: 'Incorrect Email',
          },
          validate: (value) => checkSpace(value) || "Field can't include a white space",
        }}
        placeholder="Email"
        errText={errors.email?.message?.toString()}
      />

      <InputText
        title="Password"
        type="password"
        register={register}
        name="password"
        validation={{
          required: 'fill this field',
          minLength: { value: 8, message: 'Password must contain 8-30 characters' },
          maxLength: { value: 30, message: 'Password must contain 8-30 characters' },
          validate: (value) => checkSpace(value) || "Field can't include a white space",
        }}
        placeholder="Password"
        errText={errors.password?.message?.toString()}
      />
      <ErrorMessage message={errors.server?.message?.toString()} />
      <Button
        isPrimary
        type="submit"
        onClick={() => errors.server && clearErrors('server')}
        disabled={!isValid}
      >
        <p className="login-form__button-text">Submit</p>
      </Button>
    </form>
  );
};

export default LoginForm;
