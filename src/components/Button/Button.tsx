import { HTMLProps } from 'react';
import classNames from 'classnames';

import './Button.scss';

interface ButtonProps extends HTMLProps<HTMLButtonElement> {
  type?: 'button' | 'submit' | 'reset';
  modifier?: string;
}

const Button = (props: ButtonProps) => {
  const { type = 'button', modifier, children, ...rest } = props;

  const className = classNames('button', {
    [`button--${modifier}`]: !!modifier,
  });

  console.log('Button Render');
  return (
    <button {...rest} className={className} type={type}>
      {children}
    </button>
  );
};

export default Button;
