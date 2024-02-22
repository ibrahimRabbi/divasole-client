import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import Swal from 'sweetalert2'
import { Context } from "../Authentication/AuthContext";
import SigninProvider from "./SigninProvider";
import Loader from "../UI/Loader";






const SignUp = () => {


    const { handleSubmit, register, formState: { errors } } = useForm()
    const navigate = useNavigate()
    const [error, setError] = useState('')
    const [load, setLoad] = useState(false)
    const genarateOtp = parseInt(10000 + Math.random() * 900000)



    const submit = (data) => {
        if (data.password !== data.confirm) {
            setError('confirm password did not match')
        } else {
            setError('')
            setLoad(true)

            fetch('https://divasole-server.vercel.app/verification', {
                method: 'POST',
                headers: { 'content-type': 'application/json' },
                body: JSON.stringify({ otp: genarateOtp, email: data.email })
            })
                .then(res => res.json())
                .then(res => {
                    if (res.accepted[0] === data.email) {
                        setLoad(false)
                        navigate('verified', { state: { data, genarateOtp } })
                    }


                })

        }
    }

    if (load) {
        return <Loader />
    }


    return (
        <section className="bg">

            <div className="w-full mx-auto rounded-lg lg:p-5">
                <div className="w-1/2 mx-auto" >
                    <h1 className="text-3xl font-semibold text-center">Sign up</h1>
                    <hr className="mt-2 border-[#613d26]" />
                </div>
                <form className="space-y-3 mt-7 lg:w-1/2 w-[90%] mx-auto" onSubmit={handleSubmit(submit)}>

                    <div className="form-control w-full">
                        <label className="label"><span className="label-text">Enter your full name*</span></label>
                        <input
                            className="border bg-transparent border-[#613d26] rounded-2xl p-2" placeholder='Ex : MD Sihab Hossain'
                            {...register('name', { required: true })} />
                        {errors.name && <p className="text-red-500">name is requird</p>}
                    </div>
                    <div className=" flex flex-col lg:grid grid-cols-2 gap-5">
                        <div className="form-control w-full">
                            <label className="label"><span className="label-text">Enter Email*</span></label>
                            <input type="email"
                                className="border bg-transparent border-[#613d26] rounded-2xl p-2" placeholder='Ex : abc@gmail.com'
                                {...register('email', { required: true })} />
                            {errors.email && <p className="text-red-600">email is requird</p>}
                        </div>

                        <div className="form-control w-full">
                            <label className="label"><span className="label-text">your Image*</span></label>
                            <input type="file" className="file-input file-input-warning bg-transparent border-[#613d26] file-input-bordered w-full max-w-xs" {...register('image', { required: true })}
                            />
                            {errors.image && <p className="text-red-600">your image is requird</p>}
                        </div>

                        <div className="form-control w-full">
                            <label className="label"><span className="label-text">type new password*</span></label>
                            <input
                                className="border bg-transparent border-[#613d26] rounded-2xl p-2" placeholder='password'
                                {...register('password', {
                                    required: true,
                                    pattern: /(?=.*[A-Z])(?=.*[0-9])(?=.*[a-z])/,
                                    minLength: 6
                                })} />
                            {errors.password?.type === 'required' && <p className="text-red-600">password is requird</p>}
                            {errors.password?.type === 'minLength' && <p className="text-red-600">password minimum 6 characters</p>}
                            {errors.password?.type === 'pattern' && <p className="text-red-600">password must have a uppercase and number</p>}
                        </div>

                        <div className="form-control w-full">
                            <label className="label"><span className="label-text">confirm password*</span></label>
                            <input
                                className="border bg-transparent border-[#613d26] rounded-2xl p-2" placeholder='confirm password'
                                {...register('confirm', { required: true })} />
                            {errors.confirm && <p className="text-red-600">confirm password is requird</p>}
                        </div>
                    </div>

                    <p className="text-red-600 pt-2">{error}</p>

                    <button className='bg-gradient-to-l mt-2 uppercase w-full from-amber-500 to-red-500 btn shadow-md shadow-zinc-700   border-0 font-semibold text-zinc-950 hover:bg-amber-600' type="submit">Sign up</button>

                </form>

                <p className="font-semibold text-sm text-center text-zinc-950 pt-7">Already Have an Account? <Link to='/signin' className="text-red-600 font-bold">Sign In</Link> insted</p>
                <div className="divider">OR</div>
                <div>
                    <SigninProvider redirect='/' />
                </div>
            </div>


        </section>
    );
};

export default SignUp;



