import { RegisterOptions } from 'react-hook-form';

import { scrollToTop } from '../../utils/generalUtils';
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
    <div className="input-text">
      {title && <label className="input-text__title">{title}</label>}

      <input
        className={`input-text__input`}
        type={type}
        {...register(name, validation)}
        placeholder={placeholder}
        autoComplete="off"
      />

      <ErrorMessage message={errText} />
    </div>
  );
};

export default InputText;
