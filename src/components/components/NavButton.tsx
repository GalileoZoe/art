import React, { useState } from 'react';
import { useFeed } from '../../context/FeedContext';
import './NavButton.css';

interface NavButtonProps {
  title?: string;
  onClick?: () => void;
  children?: React.ReactNode;
  feedId?: number;
}

export const NavButton: React.FC<NavButtonProps> = ({ title, onClick, children, feedId }) => {
  const [isHovered, setIsHovered] = useState(false);
  const { feed } = useFeed();

  return (
    <button
      className={`nav-button ${isHovered || (feedId && feed === feedId) ? 'hover' : ''}`}
      onClick={onClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      title={title}
    >
      {children}
    </button>
  );
};
