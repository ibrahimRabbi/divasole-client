import React from 'react';
import BannerCategory from './bannerCategory';
import Carusal from './Carusal';


const Banner = () => {
    return (
        <header className='mt-4 w-full lg:flex items-start justify-between gap-5'>
            <BannerCategory />
            <Carusal/>          
        </header>
    );
};

export default Banner;





