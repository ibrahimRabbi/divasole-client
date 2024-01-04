import React, { useState } from 'react';
 import './home.css'
import { Link } from 'react-router-dom';



const CategoryCard = ({ data }) => {
    
    const [toysData, setToysData] = useState([])
    
    return (
        <Link to={`${data.category}`} className='text-center banner p-6 rounded-lg hover:shadow-xl hover:scale-105 duration-100'>
            <div className="avatar">
                <div className="lg:w-32 w-24">
                    <img loading='lazy' src={data.img}/>
                </div>
            </div>    
            <h1 className='text-xl font-semibold'>{data.name}</h1> 
        </Link>
    );
};

export default CategoryCard;