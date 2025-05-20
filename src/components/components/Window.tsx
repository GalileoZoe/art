import React, { ReactNode } from 'react';
import './Window.css';

interface WindowProps {
  children: ReactNode;
  title?: string;
  variant?: 'light' | 'dark' | 'transparent';
}

const Window: React.FC<WindowProps> = ({
  children,
  title,
  variant = 'light',
}) => {
  return (
    <div className={`artistic-window ${variant}`}>
      {title && (
        <div className="window-header">
          <h2 className="window-title">{title}</h2>
          <div className="window-controls">
            <span className="window-control"></span>
            <span className="window-control"></span>
            <span className="window-control"></span>
          </div>
        </div>
      )}
      <div className="window-content">{children}</div>
    </div>
  );
};

export default Window;