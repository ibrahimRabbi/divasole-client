import React, { useContext, useEffect, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
import Swal from 'sweetalert2';
import { useCartDataQuery, useGetDataByIdQuery } from '../redux/baseApi/baseApi';
import { Context } from '../Authentication/AuthContext';
import { Rating } from '@smastrom/react-rating'
import '@smastrom/react-rating/style.css'
import Loader from '../UI/Loader';


const SingleData = () => {
    const { id, category } = useParams()
    //const [data, setData] = useState({})
    const { data = {}, isLoading } = useGetDataByIdQuery(id)
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


    const productData = {
        userMail: user?.email,
        productId: id,
        name: data.name,
        price: data.price,
        size, qnty,
        image: data.image
    }



    const addToCartHandler = () => {
        if (!user) {
            return navigate('/signin')
        } else {
            fetch(`https://divasole-server.vercel.app/cart`, {
                method: "POST",
                headers: { 'content-type': 'application/json' },
                body: JSON.stringify(productData)
            })
                .then(res => res.json())
                .then(res => {
                    if (res.insertedId) {
                        refetch()
                        Swal.fire({
                            title: 'cart has been Added successfully',
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


    const buyNowHandler = () => {
        if (!user) {
            return navigate('/signin')
        } else {
            return navigate('/buynow', { state: productData })
        }
    }


    if (isLoading) {
        return <Loader />
    }



    return (

        <section>
            <div className="lg:w-[80%] w-[90%] lg:gap-16 gap-5 mx-auto mt-10 pb-20 grid lg:grid-cols-2 grid-cols-1">
                <div>
                    <ImageGallery
                        showFullscreenButton={false}
                        showPlayButton={false}
                        thumbnailPosition="bottom"
                        useBrowserFullscreen={false}
                        showNav={false}
                        items={images}
                    />
                </div>

                <div className='mt-5'>
                    <p className="text font-semibold text-3xl">{data?.name}</p>
                    <p className="font-semibold mt-4 text-zinc-800 text-xs">
                        {data?.description}
                    </p>
                    <div className='flex mt-7 items-center justify-between'>
                        <div>
                            <p className='font-semibold'>Quantity:</p>
                            <div className='flex justify-between border border-[#e2ac8a] items-center px-2 bg-white gap-5 rounded-md'>
                                <button onClick={dicrimentHandler} className='p-2 text-lg font-bold'>-</button>
                                <p className='px-1'>{qnty}</p>
                                <button onClick={incrimentHandler} className='p-2 text-lg font-bold' >+</button>
                            </div>
                        </div>
                        <p className='font-semibold mt-5'>Available Stock- {data.available > 0 ? data.available : <span className='text-red-600'>Sold Out</span>}</p>
                    </div>
                    <div className='mt-4'>
                        <p className='font-semibold'>Available Sizes:</p>
                        <div className='flex flex-wrap gap-4'>
                            {availableSize.map(v => {
                                return (
                                    <div key={Math.random()} onClick={() => sizeHandler(v)} className={`${size === v ? 'bg-[#613d26] text-slate-50 font-normal' : ''} border cursor-pointer border-[#613d26] font-semibold text-xs p-2 rounded-lg`}>
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
                        <p className="text font-semibold text-2xl text-[#613d26]">
                            {data?.price}-TK
                        </p>
                        <Rating style={{ maxWidth: 110 }} value={data?.rating} />
                    </div>

                    <div className="divider"></div>
                    <div className="flex gap-8 lg:mt-12 mt-5 items-center">
                        <button onClick={addToCartHandler} className={`p-2 btn ${data.available == 0 ? 'btn-disabled' : 'visible'} hover:bg-red-700 rounded-lg text-white font-semibold bg-red-600 w-[45%]`}>Add To Cart</button>
                        <button onClick={buyNowHandler} className={`p-2 btn ${data.available == 0 ? 'btn-disabled' : 'visible'} hover:bg-amber-500 rounded-lg font-semibold bg-amber-400 text-slate-900 w-[45%]`}>
                            Buy Now
                        </button>
                    </div>
                </div>
            </div>

        </section>
    )
};

export default SingleData;