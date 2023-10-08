import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import Card from './Card';
import Title from '../UI/Title';
import './daynamic.css'
import Sidebar from './sidebar';


const DaynamicCate = () => {
    const { id } = useParams()
    const [data, setData] = useState([])
    

    

    useEffect(() => {
        fetch(`http://localhost:5000/data/${id}`)
            .then(res => res.json())
            .then(res => {
                // if (id === 'marvel') {
                //     const filtaring = res.filter(v => v.category !== 'warner-bros' || v.category !== 'star-wars')
                //     console.log(filtaring)
                //     setData(filtaring)
                // }
                setData(res)
            })
    }, [])
    
     
   
    return (
        <div className='bg'>
            <div className='pt-16  w-[95%]'>

                <div className='grid gap-10'>
                    <Sidebar />
                    <div className='mt-11'>
                        <Title title={id} />
                        <div className='grid grid-cols-3 gap-11 my-16'>
                            {data.map(v => <Card key={v._id} data={v} category={id} />)}
                        </div>
                    </div>
                </div>
            </div>
       </div>
    );
};

export default DaynamicCate;