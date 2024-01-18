import React, { useState } from 'react';
 import '../home.css'
import { Link } from 'react-router-dom';



const CategoryCard = ({ data }) => {
    
    const [toysData, setToysData] = useState([])
    
    return (
        <Link to={`${data.category}`} className='text-center border banner p-6'>
            <div className="avatar">
                <div className="lg:w-32 w-24">
                    <img className='hover:scale-105 duration-100' loading='lazy' src={data.img}/>
                </div>
            </div>    
            <h1 className='lg:text-xl text-sm font-semibold'>{data.name}</h1> 
        </Link>
    );
};

export default CategoryCard;