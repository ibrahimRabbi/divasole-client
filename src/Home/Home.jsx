import React from 'react';
import Banner from './Banner';
import CateGory from './CateGory';
import Popular from './Popular';

const Home = () => {
    return (
        <div>
            <Banner />
            <CateGory />
            <Popular/>
        </div>
    );
};

export default Home;