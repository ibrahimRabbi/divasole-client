import React, { useContext, useEffect } from 'react';
import './navbar.css'
import { BsCart3 } from 'react-icons/bs'
import { Link, useNavigate } from 'react-router-dom';
import { Context } from '../Authentication/AuthContext';
import { useCartDataQuery, useUserQuery } from '../redux/baseApi/baseApi';
import ActiveLink from '../UI/ActiveLink';


const Navbar = () => {
    const { user, signout } = useContext(Context)
    const { data: users = {}, isLoading } = useUserQuery(user?.email)
    const { data: cartData = [],refetch } = useCartDataQuery(user?.email)
    const navigate = useNavigate()
    let quantitiy = 0

    cartData.forEach(v => {
        quantitiy = quantitiy + v.qnty
    });

    const searchHandler = (e) => {
        e.preventDefault()
        const name = e.target.name.value 
        fetch(`http://localhost:5000/data?search=${name}`)
            .then(res => res.json())
            .then(res => {
                navigate('/search', { state:res })
        })
         
       
    }

    useEffect(() => {
    refetch()
})

    if (isLoading) {
        return ''
    }
    return (
        <nav className='py-2 fixed z-30 navbar backDrp'>
            <div className='w-[90%] flex justify-between items-center mx-auto'>
                {/* fast div */}
                <Link to='/'>
                    <img width={170} loading='lazy' src="https://i.ibb.co/B39k2dx/1696674199331-removebg-preview.png" alt="LOGO" />
                </Link>

                {/* middle div */}

                {
                    users?.role ? <ul className='flex gap-11 text-zinc-950 text-sm font-medium'>
                        <li><ActiveLink to='/'>HOME</ActiveLink></li>
                        <li><ActiveLink to='/alltoys'>ALL TOYS</ActiveLink></li>
                        <li><ActiveLink to='/mytoys'>MY TOYS</ActiveLink></li>
                        <li><ActiveLink to='/addtoys' >ADD TOYS</ActiveLink></li>
                    </ul> : <div className='w-[32%]'>
                        <div className="form-control">
                            
                                    <form className="input-group " onSubmit={searchHandler}>
                                        <input name='name' type="text" placeholder="Search by product name" className="input input-bordered w-full" />
                                        <button type='submit' className="btn bg-gradient-to-t from-red-500 to-amber-500 hover:bg-red-700 btn-square">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="white"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
                                        </button>
                               </form>
                            
                        </div>
                    </div>
                }

                {/* last div */}
                <div className='flex items-center gap-7'>

                    <Link to='/cart' className="indicator">
                        <BsCart3 className='text-2xl font-bold' />
                        <span className="badge badge-sm indicator-item bg-red-500 border-0 text-white">{quantitiy}</span>
                    </Link>
                    {
                        user ?
                            <div className="dropdown dropdown-end">
                                <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                                    <div className="w-10 ring-1 ring-amber-400 rounded-full">
                                        <img loading='lazy' src={user?.photoURL} />
                                    </div>
                                </label>
                                <ul tabIndex={0} className="menu menu-sm dropdown-content font-semibold text-zinc-950 mt-3 z-[1] p-2 shadow  backDrp22 rounded-box w-52">
                                    {users?.role === 'seller' ? "" : <div>
                                        <li><Link>Dashboard</Link></li>

                                    </div>}
                                    <li><button className='text-red-600 font-bold  ' onClick={() => signout()}>Logout</button></li>
                                </ul>


                            </div> : <Link to='signin' className='bg-gradient-to-l uppercase from-amber-500 to-red-500 rounded-lg text-xs py-2.5 px-3 shadow-md shadow-zinc-700   border-0 font-semibold text-zinc-950 hover:bg-amber-600'>SIGN IN</Link>
                    }



                </div>
            </div>
        </nav>
    );
};

export default Navbar;