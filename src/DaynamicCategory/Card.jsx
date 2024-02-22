import React, { useState } from 'react';
import Button from '../UI/Button';
import { Link } from 'react-router-dom';
import Modal from '../UI/Modal';
import '../Navbar/navbar.css'
import { Rating } from '@smastrom/react-rating'
import '@smastrom/react-rating/style.css'



const Card = ({ data, category }) => {
    const { image, name, price, rating, _id, available, description } = data
    let [isOpen, setIsOpen] = useState(false)

    const openModal = () => {
        setIsOpen(true)
    }

    const descSlice = description.slice(0, 45)

    return (

        <div className="card border card-compact lg:h-[330px] h-[300px] shadow-xl">
            <figure>
                <Link to={`/${category}/${_id}`}>
                    <img className='hover:scale-110 duration-100' src={image} />
                </Link>
                {
                    parseInt(available) > 0 ? '' : <div className="badge absolute top-3 right-2 text-xs text-white bg-[#613d26]">sold out</div>
                }
            </figure>

            <div className="card-body">
                <Link to={`/${category}/${_id}`}>
                    <h2 className="text-sm font-semibold text-zinc-800 hover:text-red-900">{name}</h2>
                    <p className='mt-3'>{descSlice}</p>
                </Link>
                <div className="flex justify-between items-center flex-grow mt-2">
                    <div>
                        <h1 className='text-base font-semibold text-zinc-950'>{price}-TK</h1>
                        <div className='lg:flex hidden'>
                            <Rating style={{ maxWidth: 80, }} value={rating} />
                        </div>
                    </div>
                    <div>
                        <button className='text-[10px] font-semibold p-2 rounded-lg bg-gradient-to-l from-red-500 to-amber-500' onClick={openModal}>Quick View</button>
                        <Modal obj={data} open={isOpen} setIsOpen={setIsOpen} />
                    </div>
                </div>
            </div>
        </div>

    );
};

export default Card;