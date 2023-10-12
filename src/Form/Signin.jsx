import React, { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Context } from '../Authentication/AuthContext';
import { useForm } from 'react-hook-form';
import Swal from 'sweetalert2';
import SigninProvider from './SigninProvider';
import Loader from '../UI/Loader';

const Signin = () => {

    const { register, handleSubmit, formState: { errors }, } = useForm()
    const { signin } = useContext(Context)
    const location = useLocation()
    const redirectTo = location.state?.redi || '/'
    const navigate = useNavigate()
    const [error, setError] = useState('')
    const [loading, setloading] = useState(false)



    const loginHandler = (data) => {

        const { email, password, confirm } = data

        if (password !== confirm) {
            setError('confirm Password doesnt Match')
        } else {
            setError('')
            setloading(true)
            signin(email, password)
                .then((res) => {
                    fetch('https://course-server-nu.vercel.app/jwt', {
                        method: 'POST',
                        headers: { 'content-type': 'application/json' },
                        body: JSON.stringify({ email: res.email })
                    })
                        .then(res => res.json())
                        .then(res => {
                            localStorage.setItem('token', res.refreshToken)
                            Swal.fire({
                                position: 'center',
                                icon: 'success',
                                title: 'Sign in successfull',
                                showConfirmButton: false,
                                timer: 1500
                            })
                            navigate(redirectTo)
                        })
                })
                .catch(error => {
                    setloading(false)
                    if (error.message == "Firebase: Error (auth/user-not-found).") {
                        setError('user is not exist in this application plz provied a valid password and email')
                    } else if (error.message == 'Firebase: Error (auth/wrong-password).') {
                        setError('invalid password plz provide a valid password')
                    }
                })
        }

    }

    if (loading) {
        return  <Loader/>
    }

    return (      
            
        <div className="hero min-h-screen bg">       
             
                <div className="hero-content gap-20">
                <img width={500} src="https://i.ibb.co/yN0CJZ3/experimental-3d-morphis-bank-account-management-using-a-cell-phone.png" alt="" />  
                
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl backDrp">
                    
                    <form onSubmit={handleSubmit(loginHandler)} className="card-body">
                            <div className="form-control w-full">
                                <label className="label">
                                    <span className="label-text text-zinc-950">email</span>
                                </label>
                                <input className="border bg-transparent border-red-500 rounded-2xl p-2" placeholder="email" {...register('email', { required: true })} />
                                {errors.email && <p className="text-red-500">email ius requird</p>}
                            </div>

                            <div className="form-control w-full  ">
                                <label className="label">
                                <span className="label-text text-zinc-950">password</span>
                                </label>
                            <input className="border bg-transparent border-red-500 rounded-2xl p-2" placeholder="password" {...register('password', { required: true })} />
                                {errors.password && <p className="text-red-500">password is requird</p>}
                            </div>

                            <div className="form-control w-full  ">
                                <label className="label">
                                <span className="label-text text-zinc-950">confirm-password</span>
                                </label>
                            <input className="border bg-transparent border-red-500 rounded-2xl p-2" placeholder="confirm-password" {...register('confirm', { required: true })} />
                                {errors.confirm && <p className="text-red-500">confirm password is required</p>}
                            </div>
                            <p className='text-red-600 font-semibold'>{error}</p>
                            <button type='submit' className='bg-gradient-to-l mt-2 uppercase from-amber-500 to-red-500 btn shadow-md shadow-zinc-700   border-0 font-semibold text-zinc-950 hover:bg-amber-600'>Sign in</button>

                            <p className="font-semibold  text-sm text-zinc-950 text-center mt-5">dont Have an Account? <Link to='/signup' className="text-red-600 font-bold">Sign Up</Link> insted</p>
                            <div className="divider">OR</div>
                            <div>
                                <SigninProvider redirect={redirectTo} />
                            </div>
                        </form>
                    </div>
                </div>
            </div>
                        
       
    );
};

export default Signin;