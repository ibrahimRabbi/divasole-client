import React from 'react';
import { usePopularToysQuery, useSpecificToyQuery } from '../redux/baseApi/baseApi';
import Card from '../DaynamicCategory/Card';

const Popular = () => {
    const { data = [] } = usePopularToysQuery(5)



    // const loadMore = () => {
    //     fetch('https://divasole-server.vercel.app/alldata?limit=20')
    //         .then(res => res.json())
    //         .then(res => setData(res))
    // }



    return (
        <section className='w-full my-14 mx-auto'>
            <h1 className='banner text-2xl font-bold'>
                Hot and Trendy products :
            </h1>

            <div className='mt-2 grid grid-cols-2 lg:grid-cols-5 lg:gap-10 gap-5'>
                {
                    data.map(v => <Card key={v._id} data={v} category={v.category} />)
                }
            </div>

            {/* <div className='text-center mt-10'>
                <button onClick={loadMore} className='text-blue-800 text-xl hover:underline'>Load More Product.....</button>
            </div> */}
        </section>
    );
};

export default Popular;