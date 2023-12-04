import React from 'react';
import './title.css'

const Title = ({title}) => {
    return (
        <div className='flex flex-col items-center w-[60%] mx-auto'>
            <img src="../../public/assest/title.png" width={280} />
            <div className='divider relative -top-8  '></div>
            <h1 className='title text-3xl relative -top-12'>{title}</h1>
        </div>
       
        
    );
};

export default Title;