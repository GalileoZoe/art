import React from 'react';
import { useFeed } from '../../context/FeedContext';
import '../../styles/About.css';
import { driver } from "driver.js";
import "driver.js/dist/driver.css";

// const driverObj = driver({
//   showProgress: true,
//   steps: [
//     { element: '#navbar', popover: { title: 'Navega Fácilmente', description: 'Conóceme, interactúa y descubre mis obras de arte.', side: "bottom", align: 'start' }},
//     { element: '#buttonhome', popover: { title: 'Bienvenido a mi Galería de Arte', description: '¡Diviértete!', side: "top", align: 'start' }},
//   ]
// });

// driverObj.drive();

export const About: React.FC = () => {
const { changeFeed } = useFeed();

  return (
    <div>
      <header className="home-header">
        <div className='about-detail'>
          <div className="about-image-section">
            <img src={require('../../assets/kaspas.png')} alt="Álvaro Rodríguez Calixto" />
          </div>
          <div className='about-text-section'>
            <h1 className="home-title">Lic. Álvaro Rodríguez Calixto</h1>
            <p className="home-description">Lic. Arte y Diseño</p>
            <p className="home-description">
              Soy un apasionado del arte. Encargado de impartir los talleres de artes plásticas en toda la región de Lerma, junto con el ayuntamiento de la
              ciudad de Lerma realizamos exposiciones e inauguramos espacios para fomentar la cultura y el arte.
            </p>
            <p className="home-description">
              Con una formación en artes visuales, he trabajado en diversas exposiciones y proyectos de
              pintura, escultura y arquitectura.
            </p>
            <p className="home-description">
              Mi objetivo es crear un espacio donde los artistas puedan expresarse y compartir sus
              creaciones.
            </p>
            <p className="home-description">
              En mi galería, encontrarás una muestra de mis obras más destacadas, cada una con un
              significado especial.
            </p>
            <a id='buttonhome' className='button' onClick={()=>changeFeed(3)}>
              Contacto
            </a>
            <br />
          </div>
        </div>
      </header>
    </div>
  );
};