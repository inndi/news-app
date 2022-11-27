import { RegisterOptions } from 'react-hook-form';

import ErrorMessage from '../ErrorMessage/ErrorMessage';

import './InputText.scss';

interface InputProps {
  type: string;
  name: string;
  register: any;
  errText?: string;
  placeholder?: string;
  validation?: RegisterOptions;
  title?: string;
}

const InputText = ({
  title,
  type = 'text',
  name,
  register,
  placeholder,
  validation,
  errText,
}: InputProps) => {
  return (
    <div className="input-text__field-container">
      {title && <label className="input-text__field-name">{title}</label>}

      <input
        className="input-text__field"
        type={type}
        {...register(name, validation)}
        placeholder={placeholder}
      />

      <ErrorMessage message={errText} />
    </div>
  );
};

export default InputText;
