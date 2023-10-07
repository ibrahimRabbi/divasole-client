import React from 'react';
import './title.css'

const Title = ({title}) => {
    return (
       
        <div className="divider w-[90%] mx-auto text-4xl font-semibold"> <h1 className='title'>{title}</h1></div>
    );
};

export default Title;