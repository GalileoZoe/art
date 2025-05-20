import React, { useState, useEffect } from 'react';
import './ArtistGallery.css';
import { NavButton } from '../common/NavButton';
import { useFeed } from '../../context/FeedContext';

const ArtistGallery: React.FC = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [isLoaded, setIsLoaded] = useState(false);
  const { changeFeed } = useFeed();


  useEffect(() => {
    // Efecto de carga para animaciones
    setTimeout(() => {
      setIsLoaded(true);
    }, 300);
  }, []);

  return (
    <div className={`gallery-container ${isLoaded ? 'loaded' : ''}`}>
      <header>
        <div className="logo">Art Gallery</div>
    
      </header>

      <main>
        <section className="featured-section">
          <div className="section-header">
            <h2>Featured paintings</h2>
            <button className="view-all-btn">View all</button>
          </div>
          
          <div className="paintings-grid">
            <div className="painting-item">
              <div className="painting-frame">
                <img src="https://images.unsplash.com/photo-1520209759809-a9bcb6cb3241" alt="Landscape with tree" />
                <div className="painting-overlay">
                  <span className="painting-title">Fotografías</span>
                </div>
              </div>
            </div>
            <div className="painting-item">
              <div className="painting-frame">
                <img src="https://images.unsplash.com/photo-1541961017774-22349e4a1262" alt="Abstract geometric art" />
                <div className="painting-overlay">
                  <span className="painting-title">Exposiciones</span>
                </div>
              </div>
            </div>
            <div className="painting-item">
              <div className="painting-frame">
                <img src="https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5" alt="Flowers in blue vase" />
                <div className="painting-overlay">
                  <span className="painting-title">Graffiti</span>
                </div>
              </div>
            </div>
            <div className="painting-item">
              <div className="painting-frame">
                <img src="https://images.unsplash.com/photo-1548516173-3cabfa4607e9" alt="Mountain landscape" />
                <div className="painting-overlay">
                  <span className="painting-title">Diseño Gráfico</span>
                </div>
              </div>
            </div>
            <div className="painting-item">
              <div className="painting-frame">
                <img src="https://images.unsplash.com/photo-1518998053901-5348d3961a04" alt="Seascape" />
                <div className="painting-overlay">
                  <span className="painting-title">Murales</span>
                </div>
              </div>
            </div>
            <div className="painting-item">
              <div className="painting-frame">
                <img src="https://images.unsplash.com/photo-1578301978693-85fa9c0320b9" alt="Portrait" />
                <div className="painting-overlay">
                  <span className="painting-title">Tattoos</span>
                </div>
              </div>
            </div>
            <div className="painting-item">
              <div className="painting-frame">
                <img src="https://images.unsplash.com/photo-1583223667854-e0e05b1ad4a3" alt="Still life with fruits" />
                <div className="painting-overlay">
                  <span className="painting-title">24 KILATES</span>
                </div>
              </div>
            </div>
            <div className="painting-item">
              <div className="painting-frame">
                <img src="https://images.unsplash.com/photo-1577083552431-6e5fd01aa342" alt="Mediterranean street" />
                <div className="painting-overlay">
                  <span className="painting-title">Clases de Arte</span>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default ArtistGallery;