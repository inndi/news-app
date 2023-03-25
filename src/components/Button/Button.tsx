import { HTMLProps } from 'react';
import classNames from 'classnames';

import './Button.scss';

interface ButtonProps extends HTMLProps<HTMLButtonElement> {
  type?: 'button' | 'submit' | 'reset';
  className?: string;
  isPrimary?: boolean;
  isSecondary?: boolean;
  isBlack?: boolean;
}

const Button = (props: ButtonProps) => {
  const {
    type = 'button',
    children,
    className,
    isPrimary,
    isSecondary,
    isBlack,
    ...rest
  } = props;

  //TODO: + change name to secondary and classname

  console.log('Button Render');
  return (
    <button
      {...rest}
      className={classNames('button', className, {
        button__secondary: isSecondary,
        'button__secondary--black': isBlack,
        button__primary: isPrimary,
      })}
      type={type}
    >
      {children}
    </button>
  );
};

export default Button;
