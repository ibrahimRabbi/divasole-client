import React, { useState } from 'react';
import Button from '../UI/Button';
import { Link } from 'react-router-dom';
import Modal from '../UI/Modal';
import '../Navbar/navbar.css'
const Card = ({ data, category }) => {
    const { image, name, price, rating, _id } = data
    let [isOpen, setIsOpen] = useState(false)

    const openModal = () => {
        setIsOpen(true)
    }

    return (

        <div className="card backDrp border card-compact h-[450px] shadow-xl">
            <figure>
                <Link to={`/${category}/${_id}`}>
                    <img width={180} className='mt-20' src='https://i.ibb.co/b2r2r55/1696653667582.png' />
                </Link>
           </figure>

            <div className="card-body">
                <Link to={`/${category}/${_id}`}>
                    <h2 className="card-title text-zinc-950 hover:text-red-900">{name}</h2>
                    <p>If a dog chews shoes whose shoes does he choose?</p>
                </Link>
                <div className="flex justify-between items-center mt-5">
                    <div>
                        <h1 className='text-2xl font-semibold text-zinc-950'>{price}-TK</h1>
                        <div>{rating}</div>
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