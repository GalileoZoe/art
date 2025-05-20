import React, { useState } from 'react';
import './NavButton.css';

interface NavButtonProps {
  onClick: () => void;
  children: React.ReactNode;
}

export const NavButton: React.FC<NavButtonProps> = ({ onClick, children }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <button
      className={`nav-button ${isHovered ? 'hover' : ''}`}
      onClick={onClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {children}
    </button>
  );
};
