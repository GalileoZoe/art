import React, { useState } from 'react';
import { useFeed } from '../../context/FeedContext';
import '../../styles/Exhibitions.css';

interface ExhibitionProps {
  title: string;
  date: string;
  description: string;
  image: string;
}

const Exhibition: React.FC<ExhibitionProps> = ({ title, date, description, image }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className={`exhibition-card ${isHovered ? 'hover' : ''}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <img src={require(`../../assets/`+image )} alt={title} className="exhibition-image" />
      <h3 className="exhibition-title">{title}</h3>
      <p className="exhibition-date">{date}</p>
      <p className="exhibition-description">{description}</p>
    </div>
  );
};

export const Exhibitions: React.FC = () => {
  const { changeFeed } = useFeed();

  const exhibitions = [
    {
      title: 'Modernismo en Color',
      date: 'Enero 15 - Marzo 30, 2024',
      description: 'Una exploración vibrante del arte moderno a través del uso del color y la forma.',
      image: 'expo2.png'
    },
    {
      title: 'Retratos del Siglo XIX',
      date: 'Abril 5 - Mayo 25, 2024',
      description: 'Colección única de retratos clásicos que capturan la esencia de una época.',
      image: 'k2.png'
    },
    {
      title: 'Paisajes Contemporáneos',
      date: 'Junio 1 - Julio 30, 2024',
      description: 'Interpretaciones modernas de paisajes naturales y urbanos.',
      image: 'k3.png'
    },
   
  ];

  return (
    <div className="exhibitions-container">
       <div className='exhibitions-header'> 

      <div className="exhibitions-grid">
        {exhibitions.map((exhibition, index) => (
          <Exhibition key={index} {...exhibition} />
        ))}
      </div>
      </div>
    </div>
  );
};