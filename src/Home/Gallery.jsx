import React from 'react';
import './home.css'
import Title from '../UI/Title';
const Gallery = () => {
    return (
        <section className='bg-[#fdede4] rounded-t-[170px]'>
            <div className='w-[90%] mx-auto pt-16'>
                <div className='w-1/2 mx-auto text-center'>
                    <Title title='hot offers' />
                </div>

                <div className='gallery lg:grid gap-8 pb-16'>
                    <img src="../../public/assest/offer-1.webp" className='rounded-lg w-full' alt="" />
                    <img src="../../public/assest/offer-2.webp" className='rounded-lg w-full' alt="" />
                    <img src="../../public/assest/offer-3.png" className='rounded-lg w-full ' alt="" />
                    <img src="../../public/assest/offer4.png" className='rounded-lg  w-full' alt="" />
                </div>
            </div>
        </section>
        
    );
};

export default Gallery;