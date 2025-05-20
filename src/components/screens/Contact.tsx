import React, { useState } from 'react';
import { useFeed } from '../../context/FeedContext';

export const Contact: React.FC = () => {
  const { changeFeed } = useFeed();

  return (
    <div style={{
      padding: '20px',
      maxWidth: '1200px',
      margin: '0 auto'

    }}>
     

      <div style={{
        position:'fixed',
        backgroundColor: '#fff',
        borderRadius: '8px',
        boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
        width:'85%',
        left: '50%',
        translate: ' 0 -50%',
        transform: 'translateX(-50%)',
      }}>
        <h2 style={{ marginBottom: '20px', color: '#333' }}>Contáctame</h2>
        <form style={{
          display: 'grid',
          gap: '20px'
        }}>
          <input
            type="text"
            placeholder="Name"
            className="form-input"
          />
          <input
            type="email"
            placeholder="Email"
            className="form-input"
          />
          <textarea
            placeholder="Message"
            rows={5}
            className="form-input form-textarea"
          />
          <button style={styles.submitButton}>Send Message</button>
        </form>
        <p>o</p>

      </div>
    </div>
  );
};

const NavButton: React.FC<{ onClick: () => void; children: React.ReactNode }> = ({ onClick, children }) => {
  const [isHovered, setIsHovered] = useState(false);

  const buttonStyle = {
    padding: '10px 20px',
    margin: '0 10px',
    border: 'none',
    borderRadius: '4px',
    backgroundColor: 'transparent',
    color: isHovered ? '#d4af37' : '#333',
    cursor: 'pointer',
    fontSize: '1.1em',
    transition: 'color 0.3s ease'
  };

  return (
    <button
      style={buttonStyle}
      onClick={onClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {children}
    </button>
  );
};

const styles = {
  input: {
    padding: '12px',
    border: '1px solid #ddd',
    borderRadius: '4px',
    fontSize: '1em'
  },
  submitButton: {
    padding: '12px 24px',
    backgroundColor: '#d4af37',
    color: 'white',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
    fontSize: '1.1em',
    transition: 'background-color 0.3s ease',
    ':hover': {
      backgroundColor: '#b89b2d'
    }
  }
};






