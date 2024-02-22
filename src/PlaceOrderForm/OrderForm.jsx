import React, { useEffect, useState } from 'react';
import Swal from 'sweetalert2';
import { useForm } from "react-hook-form"
import { useLocation, useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { Context } from '../Authentication/AuthContext';
import Loader from '../UI/Loader';


let bangladeshDistricts = [
    'Dhaka South', "Dhaka North", 'Faridpur', 'Gazipur', 'Gopalganj', 'Kishoreganj', 'Madaripur', 'Manikganj', 'Munshiganj',
    'Narayanganj', 'Narsingdi', 'Rajbari', 'Shariatpur', 'Tangail', 'Bagerhat', 'Chuadanga', 'Jashore',
    'Jhenaidah', 'Khulna', 'Kushtia', 'Magura', 'Meherpur', 'Narail', 'Satkhira', 'Jamalpur', 'Mymensingh',
    'Netrakona', 'Sherpur', 'Bogra', 'Joypurhat', 'Naogaon', 'Natore', 'Chapainawabganj', 'Pabna', 'Rajshahi',
    'Sirajganj', 'Dinajpur', 'Gaibandha', 'Kurigram', 'Lalmonirhat', 'Nilphamari', 'Panchagarh', 'Rangpur',
    'Thakurgaon', 'Moulvibazar', 'Sunamganj', 'Sylhet', 'Barishal', 'Bhola', 'Jhalokathi', 'Patuakhali',
    'Pirojpur', 'Bandarban', 'Brahmanbaria', 'Chandpur', 'Chittagong', 'Comilla', 'Coxs Bazar', 'Feni', 'Khagrachari',
    'Lakshmipur', 'Noakhali', 'Rangamati', 'Habiganj', 'Moulvibazar'
];

const OrderForm = () => {

    const { register, handleSubmit, formState: { errors } } = useForm()
    const { state } = useLocation()
    const navigate = useNavigate()
    const { user } = useContext(Context)
    const [load, setLoad] = useState(false)
    const sorting = bangladeshDistricts.sort()

    

    const submit = (data) => {
        setLoad(true)
        const obj = {
            ...data,
            email: user?.email,
            name: user?.displayName,
            payableAmount: state.subTotal,
            status: 'pedding',
            items: state.items
        }
        fetch('https://divasole-server.vercel.app/order', {
            method: "POST",
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify(obj)
        })
            .then(res => res.json())
            .then(res => {
                if (res.insertedId) {
                    setLoad(false)
                    navigate('/invoice', { state: res.insertedId })
                }
            })
    }


    useEffect(() => {
        Swal.fire({
            title: "আমরা ম্যানুয়ালি অর্ডার নিশ্চিত করে থাকি অনুগ্রহ করে নিচের দেয়া ফর্মটি পূরণ করুন",
            icon: "success"
        });
    }, [])


    if (load) {
        return <Loader />
    }

    return (
        <section className='lg:w-[40%] w-[90%] mx-auto mt-10 mb-28'>
            <form onSubmit={handleSubmit(submit)}>
                <div className='bg-slate-50 p-5 rounded-lg border space-y-2'>
                    <label className="form-control w-full">
                        <div className="label">
                            <span className="label-text">your number</span>
                        </div>
                        <input type="number" placeholder="EX : 01849478744" className="input input-bordered w-full" {...register('number', { required: true, maxLength: 11 })} />
                        {errors.number?.type === 'required' && <p className='text-red-600'>Your phone number is required</p>}
                        {errors.number?.type === 'maxLength' && <p className='text-red-600'>please input a valid number</p>}
                    </label>

                    <label className="form-control w-full">
                        <div className="label">
                            <span className="label-text">Your City or district</span>
                        </div>
                        <select {...register('city', { required: true })} className="select w-full select-bordered">
                            <option defaultValue='dhaka North' disabled>Select Your City</option>
                            {sorting.map(v => <option key={Math.random()}>{v}</option>)}
                        </select>
                        {errors.city?.type === 'required' && <p className='text-red-600'>please select your city</p>}
                    </label>


                    <label className="form-control w-full">
                        <div className="label">
                            <span className="label-text">your home address or street,area</span>
                        </div>
                        <input type="text" placeholder="EX : road no 9 , sector-6 , uttara" className="input input-bordered w-full " {...register('address', { required: true })} />
                        {errors.address?.type === "required" && <p className='text-red-600'>your street or home address is required</p>}
                    </label>

                </div>
                <input className='mt-4 btn w-full bg-[#805e43] text-white hover:bg-[#9e7452]' value='Place Order' type="submit" />
            </form>
        </section>
    );
};

export default OrderForm;