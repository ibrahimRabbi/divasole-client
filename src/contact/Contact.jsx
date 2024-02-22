import { FaFacebookMessenger, FaWhatsapp } from 'react-icons/fa';
import { PiMessengerLogo } from "react-icons/pi";
import { useForm } from "react-hook-form"
import { useRef } from 'react';
import emailjs from '@emailjs/browser';
import Swal from 'sweetalert2';
import { Link, useNavigate } from 'react-router-dom';


const Contact = () => {

    const { register, reset, handleSubmit, formState: { errors } } = useForm()
    const form = useRef()
    const navigate = useNavigate()

    const submit = (data) => {
        const { subject, email, message } = data
        emailjs.sendForm("service_6f4zn7s", "template_s41gfcw", form.current, '1i82K5U5J2626tuR8')
            .then(res => {
                if (res.status === 200) {
                    reset()
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: "Your email has been send",
                        showConfirmButton: false,
                        timer: 1500
                    });
                    navigate('/')
                }
            })

    }



    return (
        <section className="lg:my-16 my-10 w-[90%] mx-auto">
            <form ref={form} onSubmit={handleSubmit(submit)} className='lg:w-[50%] mx-auto space-y-5'>
                <label className="form-control w-full  ">
                    <span className="label-text">Your name*</span>
                    <input
                        type="text"
                        placeholder='full name'
                        name='name'
                        className="input input-bordered w-full  "
                        {...register('name', { required: true })}
                    />
                    {errors.subject?.type == 'required' && (<p className='text-red-600'>name is requird</p>)}

                </label>

                <label className="form-control w-full  ">
                    <span className="label-text">Subject line*</span>
                    <input
                        type="text"
                        placeholder='Subject'
                        name='subject'
                        className="input input-bordered w-full  "
                        {...register('subject', { required: true, maxLength: 101 })}
                    />
                    {errors.subject?.type == 'required' && (<p className='text-red-600'>subject is requird</p>)}
                    {errors.subject?.type == 'maxLength' && (<p className='text-red-600'>plz discribe within 101 word</p>)}
                </label>

                <label className="form-control w-full  ">
                    <span className="label-text">Your Email address*</span>
                    <input
                        type="email"
                        placeholder='email'
                        name='email'
                        className="input input-bordered w-full  "
                        {...register('email', { required: true })}
                    />
                    {errors.email?.type == 'required' && (<p className='text-red-600'>email in requird</p>)}
                </label>

                <label className="form-control">
                    <span className="label-text">Message*</span>
                    <textarea
                        cols="3" rows="4"
                        placeholder='type here'
                        name='message'
                        className="textarea textarea-bordered w-full"
                        {...register('message', { required: true, maxLength: 600 })}
                    ></textarea>
                    {errors.message?.type == 'required' && (<p className='text-red-600'>please describe us your issue in details</p>)}
                    {errors.message?.type == 'maxLength' && (<p></p>)}
                </label>

                <input className='bg-[#96735d] w-full p-2 btn hover:bg-[#5a4539] rounded-lg cursor-pointer text-white' type="submit" value="Send" />
            </form>



            {/************************ * whats app and message *******************************/}

            <div className='divider w-1/2 mx-auto mt-10'>or</div>

            <div className="flex justify-center items-start gap-8 mt-5">
                <Link to='https://wa.me/01849478744' target='_blank' className="bg-slate-100 p-4 border border-[#dfc9bb] rounded-lg">
                    <FaWhatsapp className="text-3xl text-green-700 mx-auto" />
                    <span className="text-xl">WhatsApp</span><br />
                </Link>

                <Link to='https://m.me/divasole.emporium' target='_blank' className="bg-slate-100 border border-[#d6bfb0] p-4 rounded-lg">
                    <PiMessengerLogo className="text-3xl text-sky-600 mx-auto" />
                    <span className="text-xl">Messenger</span><br />
                </Link>
            </div>
        </section>
    );
};

export default Contact;