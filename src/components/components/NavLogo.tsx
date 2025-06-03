import React, { useState } from 'react';
import './NavLogo.css';

interface NavButtonProps {
  title?: string;
  onClick?: () => void;
  children?: React.ReactNode;
}

export const NavLogo: React.FC<NavButtonProps> = ({ onClick, children, title }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <button
      className={`nav-logo ${isHovered ? 'hover' : ''}`}
      onClick={onClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      id='navbarlogo'
      title={title}
    >
      {children}
    </button>
  );
};
