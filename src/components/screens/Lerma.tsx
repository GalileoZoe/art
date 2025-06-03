import React, { useState } from 'react';
import { useFeed } from '../../context/FeedContext';
import { Detail } from '../components/Detail';
import '../../styles/Exhibitions.css';

interface ExhibitionProps {
  title: string;
  date: string;
  description: string;
  image: string;
  category: string;
}

const Exhibition: React.FC<ExhibitionProps> = ({ title, date, description, image }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className={`exhibition-card ${isHovered ? 'hover' : ''}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <img src={require(`../../assets/${image}`)} alt={title} className="exhibition-image" />
      <h3 className="exhibition-title">{title}</h3>
      <p className="exhibition-date">{date}</p>
      <p className="exhibition-description">{description}</p>
    </div>
  );
};

export const Lerma: React.FC = () => {
  const { changeFeed } = useFeed();
  const [selectedExhibition, setSelectedExhibition] = useState<ExhibitionProps | null>(null);

  const exhibitions = [
    {
      title: 'Talleres de Artes Plásticas',
      date: 'Enero 15 - Marzo 30, 2024',
      description: 'Una exploración vibrante del arte moderno a través del uso del color y la forma.',
      image: 'expo2.png',
      category: 'Upcoming'
    },
    {
      title: 'Servicio y Labor Social',
      date: 'Abril 5 - Mayo 25, 2024',
      description: 'Colección única de retratos clásicos que capturan la esencia de una época.',
      image: 'k3.png',
      category: 'Current'
    },
    {
      title: 'Deporte y Cultura',
      date: 'Junio 1 - Julio 30, 2024',
      description: 'Interpretaciones modernas de paisajes naturales y urbanos.',
      image: 'k5.png',
      category: 'Past'
    }
  ];

  const handleExhibitionClick = (exhibition: ExhibitionProps) => {
    setSelectedExhibition(exhibition);
  };

  const handleCloseDetail = () => {
    setSelectedExhibition(null);
  };

  return (
    <div className="exhibitions-container">
      <div className='exhibitions-header'>
        <h1>Exhibitions</h1>
        <div className="exhibitions-grid">
          {exhibitions.map((exhibition, index) => (
            <div key={index} onClick={() => handleExhibitionClick(exhibition)}>
              <Exhibition {...exhibition} />
            </div>
          ))}
        </div>
      </div>
      {selectedExhibition && (
        <div className="exhibition-detail-overlay" onClick={handleCloseDetail}>
          <div className="painting-detail" onClick={(e) => e.stopPropagation()}>
            <button className="close-button" onClick={handleCloseDetail}>&times;</button>
            <div className="detail-image-container">
              <img src={require(`../../assets/${selectedExhibition.image}`)} alt={selectedExhibition.title} />
            </div>
            <div className="detail-content">
              {/* <span className="exhibition-status">{selectedExhibition.category}</span>} */}
              <h2>{selectedExhibition.title}</h2>
              <p className="detail-date">{selectedExhibition.date}</p>
              <p className="detail-description">{selectedExhibition.description}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};