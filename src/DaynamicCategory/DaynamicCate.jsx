import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import Card from './Card';
import Title from '../UI/Title';
import './daynamic.css'
import Sidebar from './sidebar';
import { useCategoryDataQuery } from '../redux/baseApi/baseApi';
import { Roller } from 'react-spinners-css';
import Loader from '../UI/Loader';


const DaynamicCate = () => {
    const { category } = useParams()
    const {data=[],refetch,isLoading} = useCategoryDataQuery(category)

    if (isLoading) {
        return  <Loader/>
    }
    
    return (
        <div>
            <div className='pt-16  w-[95%]'>

                <div className='grid gap-10'>
                    <Sidebar/>
                    <div className='mt-7'>
                        <Title title={category} />
                        <div className='grid grid-cols-3 gap-11 mt-12 mb-16'>
                            {data.map(v => <Card key={v._id} data={v} category={category}/>)}
                        </div>
                    </div>
                </div>
            </div>
       </div>
    );
};

export default DaynamicCate;