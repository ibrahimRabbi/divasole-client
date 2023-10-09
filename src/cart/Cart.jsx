import React from 'react';
import { useCartDataQuery } from '../redux/baseApi/baseApi';
import Card from './CartCard';
import './cart.css'
import Calculate from './calculate';
const Cart = () => {

    const { data = [], refetch, isLoading } = useCartDataQuery()

    if (isLoading) {
        return <h2 className='pt-28'>data  ho okay byre loading</h2>
    }
    return (
        <section className='bg'>
            <div className='w-[90%] pt-28 pb-10 mx-auto cart grid gap-10'>
                <div className='space-y-5'>
                    {
                        data.map(v => <Card action={refetch} obj={v} key={v._id} />)
                    }
                </div>
                 <Calculate/>
            </div>
        </section>
    );
};

export default Cart;