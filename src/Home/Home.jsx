import React from 'react';
import Banner from './Banner';
import CateGory from './CateGory';
import Popular from './Popular';
import Arrival from './NewArrival';

const Home = () => {
    return (
        <div>
            <Banner />
            <CateGory />
            <Popular />
            <Arrival/>
        </div>
    );
};

export default Home;