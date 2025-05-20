import React, { useState } from 'react';
import './NavLogo.css';

interface NavButtonProps {
  onClick: () => void;
  children: React.ReactNode;
}

export const NavLogo: React.FC<NavButtonProps> = ({ onClick, children }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <button
      className={`nav-logo ${isHovered ? 'hover' : ''}`}
      onClick={onClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      id='navbarlogo'
    >
      {children}
    </button>
  );
};
