import React, { useContext, useEffect, useState } from 'react';
import '../../styles/Footer.css';
// import { useFeed } from '../../context/FeedContext';

export const Footer: React.FC = () => {
    // const { changeFeed } = useFeed();

    // const [isOnline, setIsOnline] = useState<boolean>(navigator.onLine);

    // useEffect(() => {
    //     // Funciones para manejar los eventos de conexión
    //     const handleOnline = (): void => setIsOnline(true);
    //     const handleOffline = (): void => setIsOnline(false);

    //     // Escuchar eventos de conexión
    //     window.addEventListener('online', handleOnline);
    //     window.addEventListener('offline', handleOffline);

    //     // Cleanup para eliminar los eventos al desmontar el componente
    //     return () => {
    //         window.removeEventListener('online', handleOnline);
    //         window.removeEventListener('offline', handleOffline);
    //     };
    // }, []);

    return (
        <nav className='footer'>
           
        </nav>
    );
};
