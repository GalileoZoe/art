import React, { useState } from 'react';
import { useFeed } from '../../context/FeedContext';
import { Camera, Facebook, Phone, MessageCircle, Instagram, ShoppingCart, Code, Code2, CodeIcon, Code2Icon, PcCaseIcon, Laptop, Laptop2Icon, LaptopMinimal, LaptopMinimalCheckIcon, ShieldClose, XCircleIcon } from 'lucide-react';
// import { DynamicIcon } from 'lucide-react/dynamic';
// import { coconut } from '@lucide/lab';


export const Contact: React.FC = () => {
  const { changeFeed } = useFeed();

  return (
    <div style={{
      padding: '20px',
      maxWidth: '1200px',
      margin: '0 auto'

    }}>
     

      <div style={{
        position:'fixed',
        backgroundColor: '#fff',
        borderRadius: '8px',
        boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
        width:'85%',
        left: '50%',
        translate: ' 0 -50%',
        transform: 'translateX(-50%)',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        zIndex: '0' // Asegura que el formulario esté por encima de otros componentes
      }}>
        <h2 style={{ marginBottom: '20px', color: '#333' }}>Contáctanos</h2>
        <div   style={{
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: '20px'
  }}>

   <a href='https://galileozoe.github.io/tierraprometidawebsite'> <img style={{maxHeight:'100px', minHeight:'100px', width:'100%' }} src={require('../../assets/logo-tp.png')} alt='Tierra Prometida' /></a>
   <a onClick={()=>changeFeed(9)}> <img style={{maxHeight:'100px', minHeight:'110px', width:'100%' }} src={require('../../assets/logolerma.png')} alt='Lerma' /></a>
   <a onClick={()=>changeFeed(8)}> <img style={{maxHeight:'100px', minHeight:'110px', width:'100%' }} src={require('../../assets/logo24k.png')} alt='24 Kilates' /></a>
   <a onClick={()=>changeFeed(7)}> <img style={{maxHeight:'100px', minHeight:'110px', width:'100%' }} src={require('../../assets/logo.png')} alt='Bendizion' /></a>
    </div>
      
      
        <div   style={{
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: '20px',
    textAlign:'center',
    paddingBottom:'10vh'
  }}>
         <Camera color='#d4af37' size={48} />
         <Facebook color='#d4af37' size={48} />
         <Phone color='#d4af37' size={48} />
         <MessageCircle color='#d4af37' size={48} />
         <Instagram color='#d4af37' size={48} />
         <ShoppingCart color='#d4af37' size={48} />
         <Laptop color='#d4af37' size={48} />

         {/* <DynamicIcon name="camera" color="red" size={48} /> */}
         {/* <Icon iconNode={coconut} /> */}
         </div>
         <br />
         <a style={{
  borderRadius: '30px',
  backgroundColor: '#d4af37',
  textDecoration: 'none',
  color: 'white',
  padding: '10px 20px',
  transform: 'translate(-50%, -50%)',
  position: 'absolute',
  left: '50%',
  top: '90%',
  fontSize: '1.2em',
  transition: 'background-color 0.3s ease',
}} href="wa.me//+527221427901">WhatsApp</a>
      </div>
    </div>
  );
};

const NavButton: React.FC<{ onClick: () => void; children: React.ReactNode }> = ({ onClick, children }) => {
  const [isHovered, setIsHovered] = useState(false);

  const buttonStyle = {
    padding: '10px 20px',
    margin: '0 10px',
    border: 'none',
    borderRadius: '4px',
    backgroundColor: 'transparent',
    color: isHovered ? '#d4af37' : '#333',
    cursor: 'pointer',
    fontSize: '1.1em',
    transition: 'color 0.3s ease'
  };

  return (
    <button
      style={buttonStyle}
      onClick={onClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {children}
    </button>
  );
};

const styles = {
  input: {
    padding: '12px',
    border: '1px solid #ddd',
    borderRadius: '4px',
    fontSize: '1em'
  },
  submitButton: {
    padding: '12px 24px',
    backgroundColor: '#d4af37',
    color: 'white',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
    fontSize: '1.1em',
    transition: 'background-color 0.3s ease',
    ':hover': {
      backgroundColor: '#b89b2d'
    }
  }
};






