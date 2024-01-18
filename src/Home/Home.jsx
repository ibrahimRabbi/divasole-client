import React from 'react';
import CateGory from './category/CateGory';
import Popular from './Popular';
import Banner from './banner/Banner';
import Offer from './Offer';
import OurFeatures from './OurFeatures';

const Home = () => {
    return (
        <div className='lg:w-[90%] w-[90%] mx-auto'>
            <Banner/>
            <Offer />
            <OurFeatures/>
            <CateGory/>
            <Popular/> 
            
        </div>
    );
};

export default Home;