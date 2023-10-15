import React, { useContext, useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
import Swal from 'sweetalert2';
import { useIdDataQuery, useCartDataQuery } from '../redux/baseApi/baseApi';
import { Context } from '../Authentication/AuthContext';
import { Rating } from '@smastrom/react-rating'
import '@smastrom/react-rating/style.css'
import Loader from '../UI/Loader';


const SingleData = () => {
    const { id } = useParams()
    const { data = {}, isLoading } = useIdDataQuery(id)
    const images = [];
    const navigate = useNavigate()
    const { user } = useContext(Context)
    const availableSize = [5, 6, 7, 8, 10, 10.5, 12, 12.5, '15+']
    const [qnty, setQnty] = useState(1)
    const [size, setSize] = useState(7)
    const { refetch } = useCartDataQuery(user?.email)




    data.moreImg?.forEach(v => {
        images.push({ original: v, thumbnail: v })
    })

    const incrimentHandler = () => {
        setQnty(v => {
            if (v >= 10) {
                return v = 10
            }
            return v + 1
        })
    }

    const dicrimentHandler = () => {
        setQnty(v => {
            if (v < 2) {
                return v = 1
            }
            return v - 1
        })
    }

    const sizeHandler = (size) => {
        setSize(size)
    }



    const addToCartHandler = () => {
        if (!user) {
            return navigate('/signin')
        } else {

            const addData = {
                userMail: user?.email,
                productId: id,
                name: data.name,
                price: data.price,
                size, qnty,
                image: data.image
            }
            fetch(`https://toys-server-ebon.vercel.app/cart`, {
                method: "POST",
                headers: { 'content-type': 'application/json' },
                body: JSON.stringify(addData)
            })
                .then(res => res.json())
                .then(res => {
                    if (res.insertedId) {
                        refetch()
                        Swal.fire({
                            title: 'cart have been Added successfully',
                            icon: 'success',
                            showCancelButton: true,
                            confirmButtonColor: '#3085d6',
                            cancelButtonColor: '#d33',
                            confirmButtonText: 'view Cart'
                        }).then((result) => {
                            if (result.isConfirmed) {
                                navigate('/cart')
                            }
                        })
                    }
                })
        }
    }

    if (isLoading) {
        return <Loader />
    }



    return (
        <section>
            <div className="w-[80%] lg:gap-16 gap-5 mx-auto py-28 grid lg:grid-cols-2">
                <div>
                    <ImageGallery
                        showFullscreenButton={false}
                        showPlayButton={false}
                        thumbnailPosition="bottom"
                        useBrowserFullscreen={false}
                        items={images}
                    />
                </div>

                <div className='mt-5'>
                    <p className="text font-semibold lg:text-4xl text-2xl">{data?.name}</p>
                    <p className="font-semibold mt-4 text-zinc-800 text-sm">
                        {data?.description}
                    </p>
                    <div className='flex mt-7 items-center justify-between'>
                        <div>
                            <p className='font-semibold'>Quantity:</p>
                            <div className='flex justify-between items-center px-2 bg-white gap-5 rounded-md'>
                                <button onClick={dicrimentHandler} className='p-2 text-lg font-bold'>-</button>
                                <p className='px-1'>{qnty}</p>
                                <button onClick={incrimentHandler} className='p-2 text-lg font-bold' >+</button>
                            </div>
                        </div>
                        <p>stack available or sold out</p>
                    </div>
                    <div className='mt-4'>
                        <p className='font-semibold'>Available Sizes:</p>
                        <div className='flex flex-wrap gap-4'>
                            {availableSize.map(v => {
                                return (
                                    <div key={Math.random()} onClick={() => sizeHandler(v)} className={`${size === v ? 'bg-purple-500 text-slate-50 font-normal' : ''} border cursor-pointer font-semibold text-zinc-700 text-xs border-white p-2 rounded-lg`} >
                                        {v} Inch
                                    </div>
                                )

                            })}
                        </div>
                    </div>
                    <ul className='list-disc font-semibold text-zinc-800 text-sm ml-5 mt-3'>
                        <li >Metarial - Rubber body</li>
                        <li>Size - 7inch</li>
                        <li>Assable - vietnam</li>
                    </ul>
                    <div className="flex lg:mt-10 mt-5 justify-between items-center pr-12">
                        <p className="text font-semibold text-2xl">
                            {data?.price}-TK
                        </p>
                        <Rating style={{ maxWidth: 110 }} value={data?.rating} />
                    </div>

                    <div className="divider"></div>
                    <div className="flex gap-8 lg:mt-12 mt-5 items-center">
                        <button onClick={addToCartHandler} className="p-2 rounded-lg text-white font-semibold bg-red-600 w-[45%]">Add To Cart</button>
                        <button className="p-2 rounded-lg font-semibold bg-amber-400 text-slate-900 w-[45%]">
                            Buy Now
                        </button>
                    </div>
                </div>
            </div>

        </section>
    );
};

export default SingleData;