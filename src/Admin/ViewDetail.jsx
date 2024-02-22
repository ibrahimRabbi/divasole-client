import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const ViewDetail = () => {
    const { state } = useLocation()
    const navigate = useNavigate()

    const confirm = () => {
        fetch(`https://divasole-server.vercel.app/order/${state._id}`, {
            method: 'PUT',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify({ status: 'confirm' })
        })
            .then(res => res.json())
            .then(res => {
                if (res.modifiedCount > 0) {
                    navigate('/dashboard/orders')
                }
            })
    }



    return (
        <section>
            <div className='ml-10 mt-5'>
                <div>
                    <p>Name : {state.name}</p>
                    <p>Email : {state.email}</p>
                    <p>Number : {state.number}</p>
                    <p>City : {state.city}</p>
                    <p>Home Address : {state.address}</p>
                    <p>Status : <span className={state.status === 'confirm' ? 'text-teal-600' : 'text-red-600'}>{state.status}</span></p>
                    <strong>Payable Amount : {state.payableAmount} TK</strong>
                </div>

            </div>

            <div className='w-[90%] mt-16 mx-auto'>
                <div className="overflow-x-auto backDrp">
                    <table className="table">
                        {/* head */}
                        <thead className='bg-gradient-to-r from-amber-500 to-red-500 uppercase text-zinc-950'>
                            <tr>
                                <th>Product Name</th>
                                <th>Price</th>
                                <th>Quantity</th>
                                <th>Size</th>
                                <th>Total Price</th>
                            </tr>
                        </thead>
                        <tbody>
                            {state.items?.map((v, index) => {
                                return (
                                    <tr key={v._id}>
                                        <td>{v.name}</td>
                                        <td>{v.price}</td>
                                        <td>{v.qnty}</td>
                                        <td>{v.size}</td>
                                        <td>{v.price * v.qnty}</td>
                                    </tr>
                                )
                            })}
                        </tbody>

                    </table>
                </div>
            </div>

            <button onClick={confirm} className='bg-[#704c37] text-white btn text-center block mx-auto w-[30%] mt-10'>Confirm</button>
        </section>
    );
};

export default ViewDetail;