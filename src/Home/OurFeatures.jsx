import React from 'react';
import { FcApproval } from "react-icons/fc";
import { FaTruck } from "react-icons/fa";
import { MdOutlineVerifiedUser } from "react-icons/md";
import { GiReturnArrow } from "react-icons/gi";
const OurFeatures = () => {
    return (
        <section className='w-full hidden lg:grid lg:grid-cols-4 grid-cols-2 gap-5 mt-10 banner'>
            <div className='bg-slate-100 p-2 rounded-lg text-center'>
                <FcApproval className='text-4xl mx-auto' />
                <h1 className='text-md font-bold mt-2'>Authentic Products</h1>
                <p className='text-xs font-semibold mt-1'>Our biggest power is to provide authentic products to our customer</p>
            </div>

            <div className='bg-slate-100 p-2 rounded-lg text-center'>
                <FaTruck className='text-4xl mx-auto text-amber-600' />
                <h1 className='text-md font-bold mt-1'>Fast Delivary</h1>
                <p className='text-xs font-semibold mt-1'>we make sure our customer recive a order as soon as possible</p>
            </div>

            <div className='bg-slate-100 p-2 rounded-lg text-center'>
                <MdOutlineVerifiedUser className='text-4xl mx-auto text-green-600' />
                <h1 className='text-md font-bold mt-2'>Safe Payment</h1>
                <p className='text-xs font-semibold mt-1'>we are certified by DBID. so we can 100% make sure safe payment</p>
            </div>

            <div className='bg-slate-100 p-2 rounded-lg text-center'>
                <GiReturnArrow className='text-4xl mx-auto text-blue-600' />
                <h1 className='text-md font-bold mt-2'>Free & Easy Return</h1>
                <p className='text-xs font-semibold mt-1'>we provide our coustom free and refund service</p>
            </div>
            <div>

            </div>
         </section>
    );
};

export default OurFeatures;