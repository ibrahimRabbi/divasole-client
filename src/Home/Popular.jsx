import React from 'react';
import Title from '../UI/Title';
import { usePopularToysQuery, useSpecificToyQuery } from '../redux/baseApi/baseApi';
import Card from '../DaynamicCategory/Card';

const Popular = () => {
    const { data = [] } = usePopularToysQuery(5)
     
    return (
        <section className='w-full my-14 mx-auto'>
            <h1 className='banner text-2xl font-bold'>
                Hot and Trendy products :
            </h1>
            
            <div className='mt-2 grid grid-cols-2 lg:grid-cols-4 lg:gap-10 gap-5'>
                {
                    data.map(v=><Card key={v._id} data={v} category={v._category}/>)
                }
            </div>

            <div className='text-center mt-10'>
                <button className='btn btn-outline btn-warning'>Load More Product</button>
            </div>
         </section>
    );
};

export default Popular;