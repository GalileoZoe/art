import React from 'react';
import '../../App.css';
import { useFeed } from '../../context/FeedContext';
import { Home } from '../screens/Home';
import { Exhibitions } from '../screens/Exhibitions';
import { Contact } from '../screens/Contact';
import { Pieces } from '../screens/Pieces';
import { About } from '../screens/About';
import { Location } from '../screens/Location';
import { Store } from '../screens/Store';
import { Lerma } from '../screens/Lerma';
import { XXIVK } from '../screens/XXIVK';


export const Layout: React.FC = () => {
    const { feed } = useFeed();

    switch (feed) {
        case 1:
            return <Home/>;
        case 2:
            return <Exhibitions/>;
        case 3:
            return <Pieces/>;
        case 4:
            return <About/>;
        case 5:
            return <Location/>;
        case 6:
            return <Contact/>;
        case 7:
            return <Store/>;
        case 8:
            return <XXIVK/>;
        case 9:
            return <Lerma/>;
        default:
            return <Home/>;
    }
};
