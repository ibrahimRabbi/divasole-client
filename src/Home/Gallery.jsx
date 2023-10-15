import React from 'react';
import './home.css'
import Title from '../UI/Title';
const Gallery = () => {
    return (
        <section className='lg:w-[85%] w-[90%] mx-auto pt-12'>
            <div className='w-1/2 mx-auto text-center'>
                <p className='text-sm text-gray-800'>We got a todays offers for you</p>
                <Title title='hot offers'/>  
            </div>

            <div className='gallery lg:grid mt-10 gap-3'>
                <img data-aos="fade-right" className='w-full hidden lg:inline-block pp' src="https://i.ibb.co/60PHgDX/batman.jpg" alt="" />
                <div data-aos="fade-down" className='lg:flex lg:flex-wrap grid grid-cols-2 lg:gap-8 gap-4 w-full'>
                    <img className='w-[260px] pp' src="https://i.ibb.co/W2bknhD/thanos2.jpg" alt="" />
                    <img className='w-[260px] pp' src="https://i.ibb.co/NYB7PcT/hulk.jpg" alt="hulk" />
                    <img className='w-[260px] pp' src="https://i.ibb.co/J7ydPRK/thanos.jpg" alt="thanos" />
                    <img className='w-[260px] pp' src="https://i.ibb.co/Q6F09hP/download-17.jpg" alt="download-17" />

                </div>
                <img data-aos="fade-left" className='w-full hidden lg:inline-block pp' src="https://i.ibb.co/0hwGLdT/download-19.jpg" />
            </div>
        </section>
    );
};

export default Gallery;