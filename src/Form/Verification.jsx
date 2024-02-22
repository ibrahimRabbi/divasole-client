import React, { useContext, useState } from 'react';
import Swal from 'sweetalert2';
import OTPInput, { ResendOTP } from "otp-input-react";
import { Context } from '../Authentication/AuthContext';
import Loader from '../UI/Loader';
import { useLocation, useNavigate } from 'react-router-dom';
import useImageProcess from '../coustomHooks/useImageProcess';




const Verification = () => {

    const { signup, profile, loading } = useContext(Context)
    const [load, setLoad] = useState(false)
    const [error, setError] = useState('')
    const [OTP, setOTP] = useState("");
    const { state } = useLocation()
    const navigate = useNavigate()
    const { name, email, image, password } = state.data
    const img = useImageProcess(image)





    const submit = () => {
        setLoad(true)

        if (parseInt(OTP) === state.genarateOtp) {

            signup(email, password)
                .then(res => {
                    profile(res.user, name, img)

                    fetch('https://divasole-server.vercel.app/user', {
                        method: "POST",
                        headers: { 'content-type': 'application/json' },
                        body: JSON.stringify({ email, password, name, img })
                    })
                        .then(res => res.json())
                        .then(res => {
                            setLoad(false)
                            if (res.insertedId) {
                                Swal.fire({
                                    position: 'center',
                                    icon: 'success',
                                    title: 'Sign up Successfull',
                                    showConfirmButton: false,
                                    timer: 1500
                                })
                                navigate('/')
                            }
                        })

                })
                .catch(error => {
                    setLoad(false)
                    if (error.message == "Firebase: Error (auth/email-already-in-use).") {
                        setError('this email already have an account please sign up with unique Email')
                    }
                })
        } else {
            setError('invalid OTP please check again')
        }

    }





    if (load) {
        return <Loader />
    }

    return (
        <section className='lg:w-[70%] mt-12 mx-auto '>
            <h1 className='text-2xl  text-center font-semibold text-[#6d5433]'>We sent OTP Code in your Email please check it and input here </h1>
            <div className='lg:w-[45%] w-[96%] p-7 mt-6 rounded-lg bg-slate-50 border mx-auto'>
                <OTPInput value={OTP} onChange={setOTP} autoFocus OTPLength={6} otpType="number" disabled={false} className='ml-12' inputClassName='border border-2 p-2 text-2xl' />
                <ResendOTP className='mt-4' onResendClick={() => console.log("Resend clicked")} />

            </div>
            <p className='text-red-600 w-[45%] mx-auto text-sm text-start mt-2'>{error}</p>
            <button className='block mx-auto w-[25%] p-2 rounded-lg font-semibold text-white mt-5 bg-[#a17848]' onClick={submit} >Submit</button>
        </section>
    );
};

export default Verification;