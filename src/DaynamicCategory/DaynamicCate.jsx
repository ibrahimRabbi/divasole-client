import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import Card from './Card';
import Title from '../UI/Title';
import './daynamic.css';
import Sidebar from './sidebar';
import Loader from '../UI/Loader';



const DaynamicCate = () => {
    const { category } = useParams()
    const [loading, setLoader] = useState(false)
    const [data, setData] = useState([])



    const sortingHandler = (data) => {
        setLoader(true)
        fetch(`https://toys-server-ebon.vercel.app/data/${category}?sort=${data}`)
            .then(res => res.json())
            .then(res => {
                setData(res)
                setLoader(false)
            })
    }

    useEffect(() => {
        setLoader(true)
        fetch(`https://toys-server-ebon.vercel.app/data/${category}`)
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
            <div className='w-[95%]'>

                <div className='grid gap-10'>
                    <Sidebar category={category} sortingHandler={sortingHandler} />
                    <div className='mt-7'>
                        <Title title={category} />
                        <div className='grid grid-cols-3 gap-11 mb-16'>
                            {data.map(v => <Card key={v._id} data={v} category={category} />)}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DaynamicCate;