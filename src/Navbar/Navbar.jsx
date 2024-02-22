import React, { useContext } from 'react';
import './navbar.css'
import { BsCart3 } from 'react-icons/bs'
import { Link } from 'react-router-dom';
import { Context } from '../Authentication/AuthContext';
import { useCartDataQuery, useUserQuery } from '../redux/baseApi/baseApi';
import Welcome from './Welcome';
import { TfiEmail } from "react-icons/tfi";
import SearchBox from '../searchBox/SearchBox';



const Navbar = () => {
    const { user, signout } = useContext(Context)
    const { data: users = {}, isLoading } = useUserQuery(user?.email)
    const { data: cartData = [], isLoading: dataLoading } = useCartDataQuery(user?.email)
    let quantitiy = 0

    cartData.forEach(v => {
        quantitiy = quantitiy + v.qnty
    });

    if (isLoading || dataLoading) {
        return ''
    }

    return (
        <nav className=''>
            <Welcome />
            <div className='navbar bg-slate-100'>
                <div className='lg:w-[90%] w-[97%] flex justify-between items-center mx-auto'>

                    {/* fast div */}
                    <Link to='/'>
                        <img width={80} loading='lazy' src="https://i.ibb.co/4FTjRr1/divasole-Logo.png" alt="LOGO" />
                    </Link>

                    {/* middle div */}
                    <div className='w-[40%] lg:inline-block hidden'>
                        <SearchBox />
                    </div>


                    {/* last div */}
                    <div className='flex lg:w-[23%] items-center welcome justify-between gap-7'>
                        <Link to='/contact' className='lg:flex items-center gap-2'>
                            <TfiEmail className='text-3xl text-zinc-700 font-bold' />
                            <div className='text-sm hidden lg:block'>
                                <p className='font-semibold'>Email us</p>
                                <p className='text-xs text-zinc-600 font-semibold'>for any issue</p>
                            </div>
                        </Link>


                        <div className='items-center flex gap-7'>
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
                                        {
                                            users?.role === 'admin' ? <ul tabIndex={0} className="menu z-50 menu-sm dropdown-content font-semibold text-zinc-950 mt-1 p-2 shadow backDrp22 rounded-box w-52">
                                                <li><Link to='/dashboard'>Dashboard</Link></li>
                                                <li><button className='text-red-600 font-bold  ' onClick={() => signout()}>Logout</button></li>
                                            </ul> : <ul tabIndex={0} className="menu z-50 menu-sm dropdown-content font-semibold text-zinc-950 mt-1 p-2 shadow  backDrp22 rounded-box w-52">
                                                <li><button className='text-red-600 font-bold' onClick={() => signout()}>Logout</button></li>
                                            </ul>
                                        }



                                    </div> : <Link to='signin' className='bg-gradient-to-l uppercase from-amber-500 to-red-500 rounded-lg text-xs py-2.5 px-3 shadow-md shadow-zinc-700   border-0 font-semibold text-zinc-950 hover:bg-amber-600'>SIGN IN</Link>
                            }

                        </div>


                    </div>
                </div>

            </div>
            <div className='w-full lg:hidden block bg-slate-200'>
                <div className='mx-auto p-2'>
                    <SearchBox />
                </div>
            </div>



            
        </nav>
    );
};

export default Navbar;