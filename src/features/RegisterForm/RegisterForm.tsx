import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

import Button from '../../components/Button/Button';
import ErrorMessage from '../../components/ErrorMessage/ErrorMessage';
import InputText from '../../components/InputText/InputText';
import { ROUTES } from '../../config/constants';
import { useAuth } from '../../contexts/authContext';
import { RegisterValues } from '../../interfaces/interfaces';
import { checkSpace } from '../../utils/validationUtils';

import './RegisterForm.scss';

interface RegisterFormValues extends RegisterValues {
  server?: string;
}

const RegisterForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    getValues,
    setError,
  } = useForm<RegisterFormValues>({ mode: 'onBlur' });

  const { register: authRegister } = useAuth();
  const navigate = useNavigate();

  const onSubmit = (data: RegisterFormValues): void => {
    authRegister(data)
      .then(() => navigate(ROUTES.login))
      .catch(() => {
        setError('server', {
          type: 'server',
          message: 'Something went wrong on server side',
        });
      });
  };

  console.log('RegisterForm Render');
  return (
    <form className="register-form" onSubmit={handleSubmit(onSubmit)} noValidate>
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
        title="Username"
        type="text"
        register={register}
        name="username"
        validation={{
          required: 'fill this field',
          minLength: { value: 2, message: 'Username must contain 2-20 characters' },
          maxLength: { value: 20, message: 'Username must contain 2-20 characters' },
          validate: (value) => checkSpace(value) || "Field can't include a white space",
        }}
        placeholder="Username"
        errText={errors.username?.message?.toString()}
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

      <InputText
        title="Confirm password"
        type="password"
        register={register}
        name="confirmPassword"
        validation={{
          required: 'fill this field',
          minLength: { value: 8, message: 'Password must contain 8-30 characters' },
          maxLength: { value: 30, message: 'Password must contain 8-30 characters' },
          validate: {
            matchChecking: (value) =>
              value === getValues().password || "Password don't match",
            spaceChecking: (value) =>
              checkSpace(value) || "Field can't include a white space",
          },
        }}
        placeholder="Confirm password"
        errText={errors.confirmPassword?.message?.toString()}
      />

      <Button type="submit" modifier="primary">
        Submit
      </Button>
      <ErrorMessage message={errors.server?.message?.toString()} />
    </form>
  );
};

export default RegisterForm;
