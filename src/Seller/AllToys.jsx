import React from 'react';
import { useAllDataQuery } from '../redux/baseApi/baseApi';
import Loader from '../UI/Loader';

const AllToys = () => {

    const { data = [],isLoading } = useAllDataQuery()
     
    if (isLoading) {
        return <Loader/>
    }
    return (
        <section>
            <div className='w-[90%]  py-32 mx-auto'>
                <div className="overflow-x-auto backDrp">
                    <table className="table">
                        {/* head */}
                        <thead className='bg-gradient-to-r from-amber-500 to-red-500 uppercase text-zinc-950'>
                            <tr>
                                 <th>SR.NO</th>
                                <th>Image</th>
                                <th>title</th>
                                <th>price</th>
                                <th>seller Name</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {data.map((v,index) => {
                                return (
                                    <tr key={v._id}>
                                        <td>{index+1}</td>
                                        <td>
                                            <div className="avatar">
                                                <div className="mask mask-squircle w-12 h-12">
                                                    <img src={v.image} alt="Avatar Tailwind CSS Component" />
                                                </div>
                                            </div>
                                        </td>
                                        <th>{v.name}</th>
                                        <td>{v.price}-TK</td>
                                        <td>{v.userName? v.userName:'anonymuse'}</td>
                                        <td>
                                            <button className="p-2 rounded-lg text-zinc-950 bg-amber-500">view details</button>
                                        </td>
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

export default AllToys;