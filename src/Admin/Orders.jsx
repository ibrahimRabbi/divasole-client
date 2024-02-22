import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';




const Orders = () => {

    const [data, setData] = useState([])


    useEffect(() => {
        fetch('https://divasole-server.vercel.app/order')
            .then(res => res.json())
            .then(res => setData(res))
    }, [])


    return (
        <section>
            <div className='w-[90%] mt-16 mx-auto'>
                <div className="overflow-x-auto backDrp">
                    <table className="table">
                        {/* head */}
                        <thead className='bg-gradient-to-r from-amber-500 to-red-500 uppercase text-zinc-950'>
                            <tr>
                                <th>Order.NO</th>
                                <th>Phone NO</th>
                                <th>Email</th>
                                <th>Payable Amount</th>
                                <th>Status</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {data.map((v, index) => {
                                return (
                                    <tr key={v._id}>
                                        <td>{index + 1}</td>
                                        <td>{v.number}</td>
                                        <td>{v.email}</td>
                                        <th>{v.payableAmount}-TK</th>
                                        <th className={v.status === 'confirm' ? 'text-teal-600' : 'text-red-600'}>{v.status}</th>
                                        <td><Link to='/dashboard/order/view-details' state={v} className='bg-[#644733] text-white p-2 rounded-lg'>View Details</Link></td>
                                    </tr>
                                )
                            })}
                        </tbody>

                    </table>
                </div>
            </div>
        </section>
    );
};

export default Orders;