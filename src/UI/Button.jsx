import React from 'react';

const Button = ({title}) => {
    return (
        <button className='bg-amber-500 rounded-lg text-xs py-2.5 px-3 shadow-lg shadow-transparent border-0 font-semibold hover:bg-amber-600'>{title}</button>
    );
};

export default Button;