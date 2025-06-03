import React, { useEffect, useState } from 'react';
import '../../styles/Footer.css';
import { useFeed } from '../../context/FeedContext';


const leftSprites = [
  require('../../assets/left_1.png'),
  require('../../assets/left_2.png'),
];
const rightSprites = [
  require('../../assets/right_1.png'),
  require('../../assets/right_2.png'),
];
const idleSprite = require('../../assets/up_1.png');

export const Footer: React.FC = () => {
  const [direction, setDirection] = useState<'left' | 'right'>('right');
  const [step, setStep] = useState(0);
  const [position, setPosition] = useState(0);
  const [isIdle, setIsIdle] = useState(false);
const{feed, changeFeed}=useFeed();


  useEffect(() => {
    const center = window.innerWidth / 2 - 30;

    const interval = setInterval(() => {
      if (isIdle) return;

      setStep((prev) => (prev === 0 ? 1 : 0));

      setPosition((prev) => {
        const next = prev + (direction === 'right' ? 5 : -5);

        if (Math.abs(next - center) <= 5) {
          setIsIdle(true);
          setTimeout(() => setIsIdle(false), 5000); // 5 segundos de pausa
        }

        if (next >= window.innerWidth - 60) setDirection('left');
        if (next <= 0) setDirection('right');

        return next;
      });
    }, 100);

    return () => clearInterval(interval);
  }, [direction, isIdle]);

  const sprite = isIdle
    ? idleSprite
    : direction === 'right'
    ? rightSprites[step]
    : leftSprites[step];

  return (
    <nav className="footer">
      <div className="walker" style={{ left: `${position}px` }}>
       <a title='kaspas' onClick={()=>changeFeed(4)}> <img src={sprite} alt="kaspas" /></a>
      </div>
    </nav>
  );
};
