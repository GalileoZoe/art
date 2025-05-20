import React from 'react';
import './Button.css';

interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'small' | 'medium' | 'large';
}

const Button: React.FC<ButtonProps> = ({
  children,
  onClick,
  variant = 'primary',
  size = 'medium',
}) => {
  return (
    <button
      className={`artistic-button ${variant} ${size}`}
      onClick={onClick}
    >
      <span className="button-text">{children}</span>
      <span className="button-effect"></span>
    </button>
  );
};

export default Button;