import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

import Button from '../../components/Button/Button';
import ErrorMessage from '../../components/ErrorMessage/ErrorMessage';
import InputText from '../../components/InputText/InputText';
import { ROUTES } from '../../config/constants';
import { useAuth } from '../../contexts/authContext';
import { LoginValues } from '../../interfaces/interfaces';
import { checkSpace } from '../../utils/validationUtils';

import './LoginForm.scss';

interface LoginFormValues extends LoginValues {
  server?: string;
}

const LoginForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
  } = useForm<LoginFormValues>({ mode: 'onBlur' });
  const navigate = useNavigate();

  const { login } = useAuth();

  const onSubmit = (data: LoginFormValues) => {
    login(data)
      .then(() => navigate(ROUTES.main))
      .catch(() => {
        setError('server', {
          type: 'server',
          message: 'Something went wrong on server side',
        });
      });
  };

  console.log('LoginForm Render');
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
      <Button type="submit" modifier="primary">
        Submit
      </Button>
      <ErrorMessage message={errors.server?.message?.toString()} />
    </form>
  );
};

export default LoginForm;
