import React from 'react';
import Banner from './Banner';
import CateGory from './CateGory';
import Popular from './Popular';
import Arrival from './NewArrival';
import Gallery from './Gallery';
import Marque from './Marquee';

const Home = () => {
    return (
        <div>
            <Banner />
            <CateGory />
            <Gallery />
            <Popular /> 
            <Arrival />
            <Marque />
        </div>
    );
};

export default Home;