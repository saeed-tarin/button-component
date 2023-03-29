// node
import React from 'react';
// interface
import { buttonProps } from './props.interface';
import './scss/_button.scss';

const Button: React.FC<buttonProps> = (props: buttonProps) => {
  return (
    <button
      type={props.type ? props.type : 'button'}
      id={props.id}
      className={`defaultButton ${props.disable && 'disabled'} ${
        props.className
      }`}
      style={props.style}
      onClick={props.onClick}
      disabled={props.disable}
    >
      {props.children}
    </button>
  );
};
// export
export default Button;
