import React from 'react';
import Title from '../UI/Title';
import { usePopularToysQuery, useSpecificToyQuery } from '../redux/baseApi/baseApi';
import Card from '../DaynamicCategory/Card';

const Popular = () => {
    const { data = [] } = usePopularToysQuery(5)
     
    return (
        <section className='w-[90%] mt-20 mx-auto'>
            <div className='w-[60%] text-center mx-auto'>
                <Title title='Popular Toys'/>
            </div>
            
            <div className='grid grid-cols-2 lg:grid-cols-4 lg:gap-10 gap-5'>
                {
                    data.map(v=><Card key={v._id} data={v} category={v._category}/>)
                }
            </div>
         </section>
    );
};

export default Popular;