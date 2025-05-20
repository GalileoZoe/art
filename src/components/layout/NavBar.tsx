import React, { useState } from 'react';
import { useFeed } from '../../context/FeedContext';
import '../../styles/NavBar.css';
import { NavButton } from '../common/NavButton';
import { NavLogo } from '../components/NavLogo';


export const NavBar: React.FC = () => {
  const { feed, changeFeed } = useFeed();
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav id='navbar'  className='navbar'>
     
    <NavButton onClick={toggleMenu}>☰</NavButton> 
    <NavButton onClick={() => changeFeed(6)}>Contacto</NavButton> 
    <NavButton onClick={() => changeFeed(2)}>Exhibiciones</NavButton>
    <NavButton onClick={() => changeFeed(3)}>Obras</NavButton>
    <NavButton onClick={() => changeFeed(1)}>Inicio</NavButton>
    <NavLogo onClick={() => changeFeed(1)}>Art Gallery</NavLogo>
    {isOpen && (
        <div style={{
          position: 'absolute',
          top: '10vh',
          right: 0,
          backgroundColor: '#222',
          color: 'white',
          padding: '1rem',
          borderRadius: '0.5rem',
          boxShadow: '0 0 10px rgba(0,0,0,0.5)',
          height: '73vh',
          
        }}>
          <ul style={{ listStyle: 'none', margin: 0, padding: 0 }}>
            <li style={{ margin: '0.5rem 0' }}><a onClick={()=>changeFeed(1)}  style={{ color: 'white', textDecoration: 'none' }}>Inicio</a></li>
            <li style={{ margin: '0.5rem 0' }}><a onClick={()=>changeFeed(3)}  style={{ color: 'white', textDecoration: 'none' }}>Obras</a></li>
            <li style={{ margin: '0.5rem 0' }}><a onClick={()=>changeFeed(6)}  style={{ color: 'white', textDecoration: 'none' }}>Contacto</a></li>
          </ul>
        </div>
      )}
  </nav>

  
  );
};
