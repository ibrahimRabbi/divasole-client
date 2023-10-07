import React from 'react';
import '../Navbar/navbar.css'
import { Link } from 'react-router-dom';
const CategoryCard = ({name}) => {
    return (
        <Link className='text-center mt-11 shadow-xl border p-8 rounded-lg backDrp hover:scale-105 duration-100'>
            <div className="avatar">
                <div className="w-48 mask mask-squircle">
                    <img src="https://i.ibb.co/WtxBqv4/1696676380816.jpg" />
                </div>
            </div>    
                <h1 className='text-xl font-semibold'>{name}</h1> 
        </Link>
    );
};

export default CategoryCard;