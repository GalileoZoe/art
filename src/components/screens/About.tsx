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
            <p className="home-description">Licenciado en Arte y Diseño.</p>
            <br />
            <p className="home-description">
            Apasionado por el arte. Encargado de impartir talleres de artes plásticas en toda la región de Lerma.<br/>
               Junto con el ayuntamiento de la ciudad de Lerma realizamos exposiciones e inauguramos espacios recreativos para fomentar el deporte, la cultura y el arte.
            </p>
            <p className="home-description">
              Trabajamos activamente en exposiciones y proyectos de
              pintura, escultura, música, teatro y arquitectura.
            </p>
            <p className="home-description">
              Mi objetivo es crear un ambiente donde los artistas puedan expresarse y compartir sus
              creaciones. <a id='buttonabout' className='buttonmore' onClick={()=>changeFeed(3)}>Más Información. </a>
            </p>
            <a id='buttonabout' className='buttonabout' onClick={()=>changeFeed(3)}>
              Descargar CV 
            </a>
            <a id='buttonabout' className='buttonabout' onClick={()=>changeFeed(3)}>
              Contacto 
            </a>
          
            <br />
          </div>
        </div>
      </header>
    </div>
  );
};