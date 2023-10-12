import React from 'react';
import { HashLoader } from 'react-spinners';
const Loader = () => {
    return (
        <div className='py-44'>
            <HashLoader className='block mx-auto' speedMultiplier={2} size={80} color="#36d7b7" />
         </div>
    );
};

export default Loader;