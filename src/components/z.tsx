import React from 'react';
import '../App.css';
import Button from './components/Button';
import Window from './components/Window';

const Z: React.FC = () => {
  return (
    <div className="z-container">
      <h1 className="z-title">Galería de Arte Contemporáneo</h1>
      <p className="z-subtitle">Explorando las fronteras de la expresión artística</p>
      
      <Window title="Exhibición Destacada">
        <div className="featured-content">
          <div className="artwork-preview">
            <div className="artwork-image"></div>
            <h3>"Metamorfosis del Tiempo"</h3>
            <p>Una exploración visual de la transformación y el paso del tiempo</p>
          </div>
          <Button>Ver Colección Completa</Button>
        </div>
      </Window>
      
      <div className="z-gallery">
        <Window title="Obras Recientes">
          <div className="gallery-grid">
            {[1, 2, 3, 4].map((item) => (
              <div key={item} className={`gallery-item item-${item}`}>
                <div className="gallery-image"></div>
              </div>
            ))}
          </div>
          <Button>Explorar Más</Button>
        </Window>
      </div>
    </div>
  );
};

export default Z;