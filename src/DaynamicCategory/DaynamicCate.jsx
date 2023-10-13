import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import Card from './Card';
import Title from '../UI/Title';
import './daynamic.css';
import Sidebar from './sidebar';
import { useCategoryDataQuery } from '../redux/baseApi/baseApi';

import Loader from '../UI/Loader';
import { useDispatch, useSelector } from 'react-redux';


const DaynamicCate = () => {
    //const { sortingData } = useSelector((state) => console.log(state.sortingData))
    const [datas, setDatas] = useState([])
    const { category } = useParams()
    const { data = [], refetch, isLoading } = useCategoryDataQuery(category)



    const sortingHandler = (data) => {
        console.log(data)
        fetch(`http://localhost:5000/data/${category}?sort=${data}`)
            .then(res => res.json())
            .then(res => setDatas(res))
    }


    useEffect(() => {
        setDatas(data)
    }, [data])


    if (isLoading) {
        return <Loader />
    }

    return (
        <div>
            <div className='pt-16  w-[95%]'>

                <div className='grid gap-10'>
                    <Sidebar category={category} sortingHandler={sortingHandler} />
                    <div className='mt-7'>
                        <Title title={category} />
                        <div className='grid grid-cols-3 gap-11 mt-12 mb-16'>
                            {datas.map(v => <Card key={v._id} data={v} category={category} />)}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DaynamicCate;