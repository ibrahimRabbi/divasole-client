import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import Card from './Card';
import './daynamic.css';
import Sidebar from './sidebar';
import Loader from '../UI/Loader';



const DaynamicCate = () => {
    const { category } = useParams()
    const [loading, setLoader] = useState(false)
    const [data, setData] = useState([])


    const sortingHandler = (data) => {
        setLoader(true)
        fetch(`https://divasole-server.vercel.app/data/${category}?sort=${data}`)
            .then(res => res.json())
            .then(res => {
                setData(res)
                setLoader(false)
            })
    }

    useEffect(() => {
        setLoader(true)
        fetch(`https://divasole-server.vercel.app/data/${category}`)
            .then(res => res.json())
            .then(res => {
                setData(res)
                setLoader(false)

            })
    }, [category])


    if (loading) {
        return <Loader />
    }

    return (
        <div>
            <div className='w-[95%] lg:ml-0 mx-auto'>

                <div className='grid gap-10'>
                    <Sidebar category={category} sortingHandler={sortingHandler} />
                    <div className='mt-7'>

                        <div className='grid lg:grid-cols-4 grid-cols-2 gap-4 mb-16'>
                            {data.map(v => <Card key={v._id} data={v} category={category} />)}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DaynamicCate;