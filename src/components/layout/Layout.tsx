import React from 'react';
import '../../App.css';
import { useFeed } from '../../context/FeedContext';
import { Home } from '../screens/Home';
import { Exhibitions } from '../screens/Exhibitions';
import { Contact } from '../screens/Contact';
import { Pieces } from '../screens/Pieces';

export const Layout: React.FC = () => {
    const { feed } = useFeed();

    switch (feed) {
        case 1:
            return <Home/>;
        case 2:
            return <Exhibitions/>;
        case 3:
            return <Pieces/>;
        case 6:
            return <Contact/>;
        default:
            return <Home/>;
    }
};
