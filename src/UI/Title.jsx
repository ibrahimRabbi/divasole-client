import React from 'react';
import './title.css'

const Title = ({title}) => {
    return (
        <div className='flex flex-col items-center lg:w-[60%] mx-auto'>
            <img src="https://i.ibb.co/3TRBZ2V/title.png"  className='lg:w-[280px] w-[180px]' />
            <div className='divider relative -top-8  '></div>
            <h1 className='title lg:text-3xl text-xl relative -top-12'>{title}</h1>
        </div>
       
        
    );
};

export default Title;