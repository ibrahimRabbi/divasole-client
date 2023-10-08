import React from 'react';

const Button = ({title,action}) => {
    return (
        <button onClick={action} className='bg-gradient-to-l uppercase from-amber-500 to-red-500 rounded-lg text-xs py-2.5 px-3 shadow-md shadow-zinc-700   border-0 font-semibold text-zinc-950 hover:bg-amber-600'>{title}</button>
    );
};

export default Button;