import React, { useContext, useEffect } from 'react';
import { useCartDataQuery } from '../redux/baseApi/baseApi';
import Card from './CartCard';
import Calculate from './calculate';
import { Context } from '../Authentication/AuthContext';
import { Roller } from 'react-spinners-css';
import Swal from 'sweetalert2';
import './cart.css';
import Loader from '../UI/Loader';

const Cart = () => {
    const { user } = useContext(Context)
    const { data = [], refetch, isLoading } = useCartDataQuery(user?.email)

    const deleteHandler = (id) => {
        fetch(`https://divasole-server.vercel.app/deleteCartData/${id}`, { method: 'DELETE' })
            .then((res) => res.json())
            .then(res => {
                if (res.deletedCount > 0) {
                    refetch()
                    Swal.fire({
                        position: 'center',
                        icon: 'success',
                        title: 'Delete Done',
                        showConfirmButton: false,
                        timer: 1500
                    })
                }
            })
    }

    useEffect(() => {
        refetch()
    }, [])


    if (!user) {
        return <Loader />
    }

    if (isLoading) {
        return <Loader />
    }

    return (
        <section>
            <div className='w-[90%] mt-12 pb-10 mx-auto cart lg:grid flex flex-col-reverse gap-10'>
                <div className='space-y-5'>
                    {
                        data.map(v => <Card handler={deleteHandler} obj={v} key={v._id} />)
                    }
                </div>
                <Calculate data={data} />
            </div>
        </section>
    );
};

export default Cart;