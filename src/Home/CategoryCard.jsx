import React, { useState } from 'react';
import '../Navbar/navbar.css'
import { Link } from 'react-router-dom';



const CategoryCard = ({ data }) => {
    
    const [toysData, setToysData] = useState([])
    
    return (
        <Link to={`${data.category}`} className='text-center mt-11 shadow-xl p-8 rounded-lg backDrp hover:scale-105 duration-100'>
            <div className="avatar">
                <div className="w-48 mask mask-squircle">
                    <img loading='lazy' src={data.img} />
                </div>
            </div>    
            <h1 className='text-xl font-semibold'>{data.name}</h1> 
        </Link>
    );
};

export default CategoryCard;