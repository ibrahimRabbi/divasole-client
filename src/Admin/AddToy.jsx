import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import Swal from 'sweetalert2';
import { Context } from '../Authentication/AuthContext';
import Loader from '../UI/Loader';
import useCategory from '../coustomHooks/useCategory';

const AddProduct = () => {
    const { register, reset, handleSubmit, formState: { errors } } = useForm();
    const category = useCategory()
    category.sort()
    const [loading, setLoading] = useState(false)
    const { user } = useContext(Context)


    const submitHandler = (data) => {

        setLoading(true)
        const { price, category, available, description, name, image } = data

        const formData = new FormData()
        formData.append('image', image[0])



        fetch(`https://api.imgbb.com/1/upload?key=980c5aa9b32d7a954c2c27ea3bb7f131`, {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(res => {
                if (res.data?.url) {
                    const img = res.data.url
                    const obj = {
                        rating: 5,
                        name, image: img,
                        price: parseInt(price), available, category: category.toLowerCase(), description,
                        moreImg: [img, img, img, img],
                        color: ['red', 'blue', 'yellow'],
                        sellerName: user.displayName,
                        sellerEmail: user.email,
                    }
                    fetch('https://divasole-server.vercel.app/insertData', {
                        method: 'POST',
                        headers: { 'content-type': 'application/json' },
                        body: JSON.stringify(obj)
                    })
                        .then(res => res.json())
                        .then(res => {
                            if (res.insertedId) {
                                setLoading(false)
                                reset()
                                Swal.fire({
                                    position: 'center',
                                    icon: 'success',
                                    title: 'product add successfull',
                                    showConfirmButton: false,
                                    timer: 1500
                                })
                            }
                        })
                }
            })
    }

    if (loading) {
        return <Loader />
    }
    return (
        <section className='mt-8'>
            <form onSubmit={handleSubmit(submitHandler)} className='w-[80%] backDrp rounded-xl mx-auto'>

                <div className="form-control w-full">
                    <label className="label">Product Title *</label>
                    <input type="text"
                        className="border border-amber-500 rounded-2xl p-2" placeholder='Type Here'
                        {...register('name', { required: true })} />
                    {errors.title && <p className="text-red-500">title is requird</p>}
                </div>

                <div className='grid grid-cols-2 gap-5'>
                    <div className="form-control w-full">
                        <label className="label">Price *</label>
                        <input type="number"
                            className="border border-amber-500 rounded-2xl p-2" placeholder='EX:400'
                            {...register('price', { required: true, min: 10 })} />
                        {errors.price?.type === 'required' && <p className="text-red-500">price is requird</p>}
                        {errors.price?.type === 'min' && <p className="text-red-500">price must have above an 10 tk</p>}
                    </div>

                    <div className="form-control w-full">
                        <label className="label">Category *</label>
                        <select {...register('category')} className="select rounded-3xl border-amber-500 select-bordered">
                            {category.map(v => <option key={Math.random()}>{v}</option>)}
                        </select>
                    </div>
                    <div className="form-control w-full">
                        <label className="label">Toy Image *</label>
                        <input type="file" className="file-input file-input-bordered file-input-warning w-full" {...register('image', { required: true })}
                        />
                        {errors.image && <p className="text-red-500">your image is requird</p>}
                    </div>


                    <div className="form-control w-full">
                        <label className="label">Quantity*</label>
                        <input type="number"
                            className="border border-amber-500 rounded-2xl p-2" placeholder='Type Here'
                            {...register('available', { required: true, min: 20 })} />
                        {errors.available?.type === 'required' && <p className="text-red-500">stock is requird</p>}
                        {errors.available?.type === 'min' && <p className="text-red-500">stock add minimum 20 pices</p>}
                    </div>


                </div>

                <div className="form-control w-full">
                    <label className="label">Description*</label>
                    <textarea type="text"
                        className="border border-amber-500 rounded-2xl p-2" placeholder='Type Here'
                        {...register('description', { required: true })} />
                    {errors.title && <p className="text-red-500">description is requird</p>}
                </div>



                <input className="bg-gradient-to-l font-semibold from-red-500 to-amber-500 mt-10 hover:bg-amber-600 p-2 w-full rounded-lg" type="submit" />

            </form>


        </section>
    );
};

export default AddProduct;






{/* <div className="form-control w-full">
                        <label className="label"><span className="label-text">Image URL 1*</span></label>
                        <input type="text"
                            className="border border-amber-500 rounded-2xl p-2" placeholder='URL 1'
                            {...register('img1')} />
                    </div>

                    <div className="form-control w-full">
                        <label className="label"><span className="label-text">Image URL 2*</span></label>
                        <input type="text"
                            className="border border-amber-500 rounded-2xl p-2" placeholder='URL 1'
                            {...register('img2')} />
                    </div>

                    <div className="form-control w-full">
                        <label className="label"><span className="label-text">Image URL 3*</span></label>
                        <input type="text"
                            className="border border-amber-500 rounded-2xl p-2" placeholder='URL 1'
                            {...register('img3')} />
                    </div>

                    <div className="form-control w-full">
                        <label className="label"><span className="label-text">Image URL 4*</span></label>
                        <input type="text"
                            className="border border-amber-500 rounded-2xl p-2" placeholder='URL 1'
                            {...register('img4')} />
                    </div>



 */}
