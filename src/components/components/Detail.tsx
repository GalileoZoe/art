import React from 'react';
import '../../styles/Exhibitions.css';


// ✅ Usamos "type" para definir las props del componente (también puedes usar "interface" si prefieres)
// type PaintingProps = {
//   image: string;
//   title: string;
//   description: string;
//   category: string;
// };

interface ExhibitionProps {
    image: string;        // Ruta o URL de la imagen
    title: string;        // Título de la pintura
    description: string;  // Breve descripción
    category: string;     // Categoría (e.g. "moderno", "abstracto")
  }

// ✅ Cambiamos el nombre del componente para seguir la convención PascalCase: DetailReactFc o PaintingDetail
export const Detail: React.FC<ExhibitionProps> = ({ image, title, description, category }) => {
  return (
    <div className="painting-detail">
      {/* ✅ Agregamos la imagen */}
      <img src={image} alt={title} className="painting-image" />

      {/* ✅ Título y descripción */}
      <h2>{title}</h2>
      <p>{description}</p>

      {/* ✅ Categoría opcional (puede ser útil para filtros) */}
      <span className="painting-category">{category}</span>
    </div>
  );
};
