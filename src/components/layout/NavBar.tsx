import React, { useState } from 'react';
import { useFeed } from '../../context/FeedContext';
import '../../styles/NavBar.css';
import { NavButton } from '../components/NavButton';
import { NavLogo } from '../components/NavLogo';
import {  MapPinIcon,  ShoppingCart, User2Icon, UserCircle2} from 'lucide-react';


export const NavBar: React.FC = () => {
  const { feed, changeFeed } = useFeed();
  // const [isOpen, setIsOpen] = useState(false);

  // const toggleMenu = () => setIsOpen(!isOpen);

  
// const label =
// feed===1?'Kaspas':
// feed===2?'Mis Exhibiciones':
// feed===3?'Mis Obras':
// feed===4?'Acerca de Mi':
// feed===6?'Contacto':
// feed===7?'Tienda':'';


  return (
    <nav id='navbar'  className='navbar' >
      
    {/* {isOpen?
      <XCircleIcon color='#000' size={20} />
      :
      <PaintRoller color='#000' size={20} />
    } */}
  
    {/* <>
    <NavButton onClick={() => changeFeed(5)} feedId={5}>Ubicación</NavButton> 
    <NavButton onClick={() => changeFeed(4)} feedId={4}>Sobre Mí</NavButton> 
    </> */}
    <>
    <NavButton title='Sobre Mí' onClick={()=>changeFeed(4)} feedId={4}><User2Icon color={feed===4?'#d4af37':'#000'} size={20} /></NavButton> 
    <NavButton title='Tienda' onClick={() => changeFeed(7)} feedId={7}><ShoppingCart color={feed===7?'#d4af37':'#000'} size={20} /></NavButton>

    <NavButton onClick={() => changeFeed(6)} feedId={6}>Contacto</NavButton> 
    <NavButton onClick={() => changeFeed(2)} feedId={2}>Exhibiciones</NavButton>
    <NavButton onClick={() => changeFeed(3)} feedId={3}>Obras</NavButton>
    {feed!==1&&<NavButton onClick={() => changeFeed(1)} feedId={1}>Inicio</NavButton>}
    </>
    
    
    <NavLogo onClick={() => changeFeed(1)}> <img src={require('../../assets/logokaspasbg.png')} alt='Kaspas Logo' className='navbarlogoimg' /></NavLogo>

    {/* <NavButton onClick={() => changeFeed(1)} feedId={1}>Inicio</NavButton> */}
    {/* <NavButton onClick={() => changeFeed(1)} feedId={1}><HomeIcon color={feed===1?'#d4af37':'#000'} size={20} /></NavButton> */}
    {/* {isOpen && (
        <div style={{
          position: 'absolute',
          top: '10vh',
          right: 0,
          backgroundColor: '#fff' ,
          color: 'black',
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
      )} */}
  </nav>

  
  );
};
