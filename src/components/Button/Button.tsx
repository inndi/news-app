import { HTMLProps } from 'react';
import classNames from 'classnames';

import './Button.scss';

interface ButtonProps extends HTMLProps<HTMLButtonElement> {
  type?: 'button' | 'submit' | 'reset';
  className?: string;
  isPrimary?: boolean;
  isSecondary?: boolean;
}

const Button = (props: ButtonProps) => {
  const { type = 'button', children, className, isPrimary, isSecondary, ...rest } = props;

  console.log('Button Render');
  return (
    <button
      {...rest}
      className={classNames('button', className, {
        'button--secondary': isSecondary,
        'button--primary': isPrimary,
      })}
      type={type}
    >
      {children}
    </button>
  );
};

export default Button;
