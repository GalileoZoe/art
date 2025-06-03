import React, { useState } from 'react';
import { useFeed } from '../../context/FeedContext';
import '../../styles/Home.css';
import { driver } from "driver.js";
import "driver.js/dist/driver.css";



const driverObj = driver({
  showProgress: true,
  steps: [
    { element: '#navbar', popover: { title: 'Navega Fácilmente', description: 'Navega e Interactúa. (da click en el logo para volver al inicio).', side: "bottom", align: 'center' }},
    { element: '#button', popover: { title: 'Bienvenido a mi Galería de Arte', description: '¡Diviértete!', side: "top", align: 'start' }},
    // { element: 'code .line:nth-child(2)', popover: { title: 'Importing CSS', description: 'Import the CSS which gives you the default styling for popover and overlay.', side: "bottom", align: 'start' }},
    // { element: 'code .line:nth-child(4) span:nth-child(7)', popover: { title: 'Create Driver', description: 'Simply call the driver function to create a driver.js instance', side: "left", align: 'start' }},
    // { element: 'code .line:nth-child(18)', popover: { title: 'Start Tour', description: 'Call the drive method to start the tour and your tour will be started.', side: "top", align: 'start' }},
    // { element: 'a[href="/docs/configuration"]', popover: { title: 'More Configuration', description: 'Look at this page for all the configuration options you can pass.', side: "right", align: 'start' }},
    // { popover: { title: 'Happy Coding', description: 'And that is all, go ahead and start adding tours to your applications.' } }
  ]
});

driverObj.drive();



interface PaintingProps {
  image: string;
  title: string;
}

const Painting: React.FC<PaintingProps> = ({ image, title }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div id='divhome'
    className={`painting-card ${isHovered ? 'hover' : ''}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <img src={require(`../../assets/k1.png`)} alt={title} className="painting-image" />
      <h3 className="painting-title">{title}</h3>
    </div>
  );
};


export const Home: React.FC = () => {
const { changeFeed } = useFeed();

  return (
    <div>
   
      <header className="home-header">
      <div className="featured-artwork">
        
       <img className='art-base' src={require('../../assets/k9.png')} alt="Obra Destacada" />

      </div>
        <a className="home-title">Bienvenido a mi Galería de Arte</a>
        <br />
        <p className="home-description">
          Descubre una colección única de obras maestras que capturan la esencia de la creatividad y la pasión artística.
        </p>
        <a id='button' className='button' onClick={()=>changeFeed(3)}>
          Explorar Galería
        </a>
       
      </header>
    </div>
  );

};