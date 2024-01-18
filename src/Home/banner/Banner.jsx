import React from 'react';
import BannerCategory from './bannerCategory';
import Carusal from './Carusal';


const Banner = () => {
    return (
        <header className='relative mt-4 w-full'>
            <BannerCategory />
            <Carusal/>          
        </header>
    );
};

export default Banner;





