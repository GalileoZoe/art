import React, { useState } from 'react';
import { useFeed } from '../../context/FeedContext';
import '../../styles/Pieces.css';
import "driver.js/dist/driver.css";

interface PaintingProps {
  image: string;
  title: string;
  category: string;
  price: string;
}

const Painting: React.FC<PaintingProps> = ({ image, title, category, price }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className={`painting-card ${isHovered ? 'hover' : ''}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <img src={require(`../../assets/` + image)} alt={title} className="painting-image" />
      <h3 className="painting-title">{title}</h3>
      <p className="painting-title">{price}</p>
      <p className="painting-category">{category}</p>
    </div>
  );
};

export const Store: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedCategory, setSelectedCategory] = useState('all');
  const { changeFeed } = useFeed();

  const categories = [
    { id: 'all', label: 'Tienda' },
    { id: 'pinturas', label: 'Pinturas' },
    { id: 'murales', label: 'Murales' },
    { id: 'graffiti', label: 'Graffiti' },
    { id: 'bodyart', label: 'Body Art' },
  ];

  const allPaintings = [
    { image: 'k9.png', title: 'Composición Abstracta', category: 'pinturas', price:'$10,000 MXN.' },
    { image: 'k20.png', title: 'Camaleón', category: 'pinturas', price:'$10,000 MXN.' },
    { image: 'k23.png', title: 'Arte Abstracto', category: 'pinturas', price:'$10,000 MXN.' },
    { image: 'mural2.png', title: 'Mural Histórico', category: 'murales', price:'$10,000 MXN.' },
    { image: 'body2.png', title: 'Expresión Corporal', category: 'bodyart', price:'$10,000 MXN.' },
    { image: 'k9.png', title: 'Vista al Mar', category: 'pinturas', price:'$10,000 MXN.' },
    { image: 'mural1.png', title: 'Raíces', category: 'murales', price:'$10,000 MXN.' },
    { image: 'body1.png', title: 'Body Paint Festival', category: 'bodyart', price:'$10,000 MXN.' },
    { image: 'graff1.png', title: 'Graffiti', category: 'graffiti', price:'$10,000 MXN.' },
    { image: 'graff3.png', title: 'Ilegal 3D', category: 'graffiti', price:'$10,000 MXN.' },
    { image: 'graff4.png', title: 'Street Art', category: 'graffiti', price:'$10,000 MXN.' },
    { image: 'graff2.png', title: 'Arte Urbano', category: 'graffiti', price:'$10,000 MXN.' },
    { image: 'mural3.png', title: 'Aves', category: 'murales', price:'$10,000 MXN.' },
    { image: 'body3.png', title: 'Body Paint', category: 'bodyart', price:'$10,000 MXN.' },
  ];

  const categoryOrder = ['pinturas', 'murales', 'graffiti', 'bodyart'];

  const filteredPaintings = selectedCategory === 'all'
    ? [...allPaintings].sort((a, b) =>
        categoryOrder.indexOf(a.category) - categoryOrder.indexOf(b.category)
      )
    : allPaintings.filter(painting => painting.category === selectedCategory);

  return (
    <div className="home-container">
      <header className="pieces-header">
        <div id="obras">
          <h2 className="featured-title">
            {categories.find(cat => cat.id === selectedCategory)?.label || 'Obras Destacadas'}
          </h2>
          <div className="filter-bar">
            {categories.map(category => (
              <button
                key={category.id}
                className={`filter-button ${selectedCategory === category.id ? 'active' : ''}`}
                onClick={() => {
                  setSelectedCategory(category.id);
                  setCurrentIndex(0); // reset del índice al cambiar categoría
                }}
              >
                {category.label==='Tienda'? 'Todo':category.label}
              </button>
            ))}
          </div>
          <div className="carousel-container">
            <button
              className="carousel-button prev"
              onClick={() => {
                setCurrentIndex(prev => (prev > 0 ? prev - 1 : filteredPaintings.length - 3));
              }}
            >
              ←
            </button>
            <div className="carousel-track" style={{ transform: `translateX(-${currentIndex * 330}px)` }}>
              {filteredPaintings.map((painting, index) => (
                <Painting key={index} {...painting} />
              ))}
            </div>
            <button
              className="carousel-button next"
              onClick={() => {
                setCurrentIndex(prev => (prev < filteredPaintings.length - 3 ? prev + 1 : 0));
              }}
            >
              →
            </button>
          </div>
        </div>
      </header>
    </div>
  );
};
