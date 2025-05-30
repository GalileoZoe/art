import React from 'react';
import '../../styles/Home.css';

export const Location: React.FC = () => {
  return (
    <div className="home-container">
      <header className="location-header">
        <div className="location-section">
          <h1 className="featured-title">Nuestra Ubicación</h1>
          <div style={{
            width: '800px',
            height: '90%',
            position: 'relative',
            overflow: 'hidden',
            borderRadius: '8px',
            boxShadow: '0 12px 40px rgba(0, 0, 0, 0.5)',
            backgroundColor: 'transparent',
          }}>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d30153.788252261566!2d-99.51276580280761!3d19.28661220323033!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85cd8b100600c98d%3A0x50062df6247fce80!2sLerma%20de%20Villada%2C%20M%C3%A9x.!5e0!3m2!1ses!2smx!4v1689783391159!5m2!1ses!2smx"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Ubicación Casa de Cultura Col. Álvaro Obregón"
            />
          </div>
        </div>
      </header>
    </div>
  );
};