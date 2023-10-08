import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
import Swal from 'sweetalert2';
import Button from '../UI/Button';
import './single.css'
const SingleData = () => {
    const { id } = useParams()
    const [data, setData] = useState({})
    const images = [];
    


    data.moreImg?.forEach(v => {
        images.push({ original: v, thumbnail: v })
    })


    useEffect(() => {
        fetch(`http://localhost:5000/id/${id}`)
            .then(res => res.json())
            .then(res => setData(res))
    }, [])
    


    return (
        <section className='bg' >
            <div className="w-[80%] lg:gap-16 gap-5 mx-auto py-28 grid lg:grid-cols-2">
                <div  >
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

                    <ul className='list-disc font-semibold text-zinc-800 text-sm ml-5 mt-3'>
                        <li >Metarial - Rubber body</li>
                        <li>Size - 7inch</li>
                        <li>Assable - vietnam</li>
                    </ul>
                    <div className="flex lg:mt-10 mt-5 justify-between items-center pr-12">
                        <p className="text font-semibold text-2xl">
                            {data?.price}-TK
                        </p>
                        <p>{data.rating}</p>
                    </div>

                    <div className="divider"></div>

                    <div className="flex gap-8 lg:mt-12 mt-5 items-center">
                        <button className="p-2 rounded-lg text-white font-semibold bg-red-600 w-[45%]">Add To Cart</button>
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