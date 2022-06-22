import React from 'react'
import { Link } from 'react-router-dom';
import './Button.css';

export interface ButtonProps {
  href?: string | undefined;
  size?: string | undefined;
  inverse?: boolean | undefined;
  danger?: boolean | undefined;
  disabled?: boolean | undefined;
  type?: 'submit' | 'reset' | 'button' | undefined; 
  to?: string | undefined;
  onClick?: React.MouseEventHandler | undefined;
  children: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({href, size, inverse, danger, disabled, type, to, onClick, children}) => {
  if(href) {
    <a
      className={`button button--${size || 'default'} ${inverse && 'button--inverse'} ${danger && 'button--danger'}`}
      href={href}
    >
      {children}
    </a>
  }
  if(to) {
    <Link
      to={to}
      className={`button button--${size || 'default'} ${inverse && 'button--inverse'} ${danger && 'button--danger'}`}
    >
     {children}
    </Link>
  }
  return (
    <button
      className={`button button--${size || 'default'} ${inverse && 'button--inverse'} ${danger && 'button--danger'}`}
      type={type}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  )
}

export default Button