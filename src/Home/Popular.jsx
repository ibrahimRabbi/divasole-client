import React from 'react';
import Title from '../UI/Title';
import { usePopularToysQuery, useSpecificToyQuery } from '../redux/baseApi/baseApi';
import Card from '../DaynamicCategory/Card';

const Popular = () => {
    const { data = [] } = usePopularToysQuery(5)
     
    return (
        <section className='w-[90%] mx-auto my-28'>
            <Title title='Popular and Demandable Toys' />
            <div className='grid grid-cols-4 gap-10 mt-12'>
                {
                    data.map(v=><Card key={v._id} data={v} category={v._category}/>)
                }
            </div>
         </section>
    );
};

export default Popular;