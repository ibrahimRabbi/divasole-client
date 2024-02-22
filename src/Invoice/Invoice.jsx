import React, { useContext, useEffect, useRef, useState } from 'react';
import { Context } from '../Authentication/AuthContext';
import { useLocation, useNavigate } from 'react-router-dom';
import Loader from '../UI/Loader';
import { usePDF } from 'react-to-pdf';


const Invoice = () => {

    const [data, setData] = useState({})
    const [load, setLoad] = useState(false)
    const [disabled, setdisable] = useState(false)
    const ref = useRef()
    const { user } = useContext(Context)
    const { state } = useLocation()
    const navigate = useNavigate()
    const date = new Date()
    let subTotal = 0;

    const { toPDF, targetRef } = usePDF({ filename: 'divasole_invoice.pdf' });



    const pdfHandler = async () => {
        setdisable(true)
        await toPDF()
        await navigate('/')
    }







    useEffect(() => {
        setLoad(true)
        fetch(`https://divasole-server.vercel.app/order/${state}`)
            .then(res => res.json())
            .then(res => setData(res))
        setLoad(false)
    }, [user])




    if (!user || load) {
        return <Loader />
    }
    return (
        <section className='bg-slate-50 p-5 mb-20'>
            <p className='lg:w-[60%] w-[95%] text-center mx-auto mt-7'>{`${user?.displayName} আপনার অর্ডারটি সফলভাবে সম্পন্ন হয়েছে অনুগ্রহ করে নিচের ইনভয়েসটি ডাউনলোড করুন আপনাকে ২ অথবা সর্বোচ্চ ৩ ঘন্টার মধ্যে আপডেট জানানো হবে ধন্যবাদ`}</p>


            <div ref={targetRef} className='bg-white lg:w-[55%] w-[98%] px-8 pdf  py-10 mt-12 mx-auto rounded-md shadow-xl border'>
                <div className='flex justify-between items-center'>
                    <img width={100} src="https://i.ibb.co/4FTjRr1/divasole-Logo.png" />
                    <h1 className=' text-5xl text-white px-3 py-2 rounded-md'>INVOICE</h1>
                </div>
                <hr className='border-2 border-[#917051] mt-6' />

                <div className='mt-4 text-sm font-semibold text-zinc-600'>
                    <p>Order ID : <span className='text-xs'>{state}</span></p>
                    <p  >{`Date : ${date.getDate()}/${date.getMonth()}/${date.getFullYear()}`}</p>
                    <p>Status : unpaid</p>
                </div>
                <div className='mt-6 w-[95%] flex justify-between'>
                    <div>
                        <h1 className='text-base font-semibold'>Bill From:</h1>
                        <div className='text-sm font-semibold text-gray-600'>
                            <p>Divasole Emporium</p>
                            <p>Jatrabari, Dhaka</p>
                            <p>1849478744</p>
                        </div>
                    </div>

                    <div>
                        <h1 className='text-base font-semibold'>Bill To:</h1>
                        <div className='text-sm font-semibold text-gray-600'>
                            <p>{data?.name}</p>
                            <p>{data.address + ',' + data.city}</p>
                            <p>{data?.number}</p>
                        </div>
                    </div>
                </div>

                <hr className='border-[#866648] mt-3' />

                <div>
                    <div className="overflow-x-auto mt-6">
                        <table className="table table-zebra">
                            {/* head */}
                            <thead className='bg-[#bd9979]'>
                                <tr>
                                    <th>No</th>
                                    <th>Name</th>
                                    <th>Quantity</th>
                                    <th>Size</th>
                                    <th>Price</th>
                                    <th>Total Price</th>
                                </tr>
                            </thead>
                            <tbody>
                                {data?.items?.map((v, index) => {
                                    const total = parseInt(v.price) * parseInt(v.qnty)
                                    subTotal = subTotal + total
                                    return (
                                        <tr key={v._id}>
                                            <th>{index + 1}</th>
                                            <td>{v.name.slice(0, 30)}</td>
                                            <td>{v.qnty}</td>
                                            <td>{v.size}</td>
                                            <td>{v.price}</td>
                                            <td>{parseInt(v.price * v.qnty)}</td>
                                        </tr>
                                    )
                                })}
                            </tbody>
                        </table>
                    </div>
                </div>




                <div className='flex font-semibold justify-end mt-7 w-[92%]'>
                    <div>
                        <p className='flex gap-8'>Sub Total : <span>{subTotal}</span></p>
                        <p className='flex gap-8'>Discount : <span>10 TK</span></p>
                    </div>
                </div>

                <hr className='border-[#866648] mt-3' />

                <div className='flex font-semibold justify-end mt-4 text-2xl w-[92%]'>
                    <p>
                        Payable Amount : <span>{subTotal - 10}</span>
                    </p>
                </div>
            </div>

            <button disabled={disabled} className={`bg-[#72563b] btn text-white p-2 rounded-lg mx-auto block mt-6 lg:w-[20%] w-[50%] mb-4 hover:bg-[#5e4630]`} onClick={pdfHandler}>Download</button>
        </section>
    );
};

export default Invoice;