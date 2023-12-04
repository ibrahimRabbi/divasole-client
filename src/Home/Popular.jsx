import React from 'react';
import Title from '../UI/Title';
import { usePopularToysQuery, useSpecificToyQuery } from '../redux/baseApi/baseApi';
import Card from '../DaynamicCategory/Card';

const Popular = () => {
    const { data = [] } = usePopularToysQuery(5)
     
    return (
        <section className='w-[90%] mt-36 mx-auto'>
            <div className='w-[60%] text-center mx-auto'>
                <Title title='Popular Toys'/>
            </div>
            
            <div className='grid grid-cols-4 gap-10 mt-16'>
                {
                    data.map(v=><Card key={v._id} data={v} category={v._category}/>)
                }
            </div>
         </section>
    );
};

export default Popular;