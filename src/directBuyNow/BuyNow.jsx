import React, { useEffect, useState } from 'react';
import { Link, useLocation, useParams } from 'react-router-dom';

const BuyNow = () => {
    const { id } = useParams()
    const { state } = useLocation()
    const productPrice = state.price * state.qnty
    const subTotal = productPrice - 10
   
    //const discount = productPrice * 10 / 100

    return (
        <section>
            <section className='lg:w-[60%] w-[95%] mx-auto h-[70vh] mt-16'>
                <div className='border p-4'>
                    <div className='flex gap-7 '>
                        <div className="avatar">
                            <div className="w-44 rounded-xl">
                                <img src={state.image} />
                            </div>
                        </div>
                        <div>
                            <p className='text-2xl text-sky-900 font-semibold  border-b-2 pb-1'>{state.name}</p>
                            <p className='font-semibold text-zinc-700 mt-3 '>Price : <span className='text-amber-600'>{state.price}</span> </p>
                            <p className='font-semibold text-zinc-700 text-sm'>Quantity : {state.qnty}</p>
                            <p className='font-semibold text-zinc-700 text-sm'>Size : {state.size}</p>
                            <p className='font-semibold text-zinc-700 text-sm'>Vat : 00 TK  </p>
                            <p className='font-semibold text-zinc-700 text-sm'>Discount : 10 Tk</p>

                        </div>
                    </div>
                    <div className='divider w-[80%] mx-auto'></div>
                    <h1 className='text-4xl text-red-600 font-semibold text-center pb-3 mt-7'>Sub Total - {subTotal}  TK</h1>
                </div>

                <div className=' mt-7 text-center mx-auto'>
                    <Link to='/place-order' state={{ items: [state], subTotal}} className='bg-gradient-to-r text-zinc-950 from-amber-400 to-red-500 btn hover:bg-amber-500 w-[65%]'>Procced to checkout</Link>
                </div>
            </section>
        </section>
    );
};

export default BuyNow;