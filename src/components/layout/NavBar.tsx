import React, { useState } from 'react';
import { useFeed } from '../../context/FeedContext';
import '../../styles/NavBar.css';
import { NavButton } from '../components/NavButton';
import { NavLogo } from '../components/NavLogo';


export const NavBar: React.FC = () => {
  const { feed, changeFeed } = useFeed();
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  
const label =
feed===1?'Kaspas':
feed===2?'Mis Exhibiciones':
feed===3?'Mis Obras':
feed===4?'Acerca de Mi':
feed===6?'Contacto':'';


  return (
    <nav id='navbar'  className='navbar'>
     
    <NavButton onClick={toggleMenu} feedId={isOpen ? -1 : undefined}>☰</NavButton> 
    <NavButton onClick={() => changeFeed(6)} feedId={6}>Contacto</NavButton> 
    {/* <NavButton onClick={() => changeFeed(5)} feedId={5}>Ubicación</NavButton>  */}
    <NavButton onClick={() => changeFeed(2)} feedId={2}>Exhibiciones</NavButton>
    <NavButton onClick={() => changeFeed(3)} feedId={3}>Obras</NavButton>
    <NavButton onClick={() => changeFeed(1)} feedId={1}>Inicio</NavButton>
    <NavLogo onClick={() => changeFeed(1)}>{label}</NavLogo>
    {isOpen && (
        <div style={{
          position: 'absolute',
          top: '10vh',
          right: 0,
          backgroundColor: '#fff' ,
          color: 'white',
          padding: '1rem',
          borderRadius: '0.5rem',
          height: '73vh',
          zIndex:1000,
        }}>
          <ul style={{ listStyle: 'none', margin: 0, padding: 0 }}>
            <li style={{ margin: '0.5rem 0' }}><a onClick={()=>changeFeed(1)}  style={{ color: 'black', textDecoration: 'none' }}>Inicio</a></li>
            <li style={{ margin: '0.5rem 0' }}><a onClick={()=>changeFeed(3)}  style={{ color: 'black', textDecoration: 'none' }}>Obras</a></li>
            <li style={{ margin: '0.5rem 0' }}><a onClick={()=>changeFeed(4)}  style={{ color: 'black', textDecoration: 'none' }}>Acerca de Mi</a></li>
            <li style={{ margin: '0.5rem 0' }}><a onClick={()=>changeFeed(5)}  style={{ color: 'black', textDecoration: 'none' }}>Ubicación</a></li>
            <li style={{ margin: '0.5rem 0' }}><a onClick={()=>changeFeed(6)}  style={{ color: 'black', textDecoration: 'none' }}>Contacto</a></li>
          </ul>
        </div>
      )}
  </nav>

  
  );
};
