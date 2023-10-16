import React, { useState } from 'react';
import Button from '../UI/Button';
import { Link } from 'react-router-dom';
import Modal from '../UI/Modal';
import '../Navbar/navbar.css'
import { Rating } from '@smastrom/react-rating'
import '@smastrom/react-rating/style.css'



const Card = ({ data, category }) => {
    const { image, name, price, rating, _id,available } = data
    let [isOpen, setIsOpen] = useState(false)

    const openModal = () => {
        setIsOpen(true)
    }

    return (

        <div className="card backDrp border card-compact h-[450px] shadow-xl">
            <figure>
                <Link to={`/category/${_id}`}>
                    <img className='hover:scale-110 duration-100' src={image} />
                </Link>
                {
                    parseInt(available) > 0 ? '' : <div className="badge absolute top-3 right-2 text-xs text-white bg-red-600">sold out</div>
                }
           </figure>

            <div className="card-body">
                <Link to={`/category/${_id}`}>
                    <h2 className="card-title text-zinc-800 hover:text-red-900">{name}</h2>
                    <p>If a dog chews shoes whose shoes does he choose?</p>
                </Link>
                <div className="flex justify-between items-center mt-5">
                    <div>
                        <h1 className='text-2xl font-semibold text-zinc-950'>{price}-TK</h1>
                        <Rating style={{ maxWidth: 80 }} value={rating}   />
                    </div>
                    <div>
                        <Button action={openModal} title='Quick View'/>
                        <Modal obj={data} open={isOpen} setIsOpen={setIsOpen} />
                    </div>
                </div>
            </div>
        </div>

    );
};

export default Card;