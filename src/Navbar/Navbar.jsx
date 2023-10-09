import React, { useContext } from 'react';
import Button from '../UI/Button';
import './navbar.css'
import { BsCart3 } from 'react-icons/bs'
import { Link } from 'react-router-dom';
import { Context } from '../Authentication/AuthContext';


const Navbar = () => {
    const { user,signout } = useContext(Context)
    console.log(user)
    return (
        <nav className='py-2 fixed z-30 navbar backDrp'>
            <div className='w-[90%] flex justify-between items-center mx-auto'>
                {/* fast div */}
                <Link to='/'>
                    <img width={170} loading='lazy' src="https://i.ibb.co/B39k2dx/1696674199331-removebg-preview.png" alt="LOGO" />
                </Link>

                {/* middle div */}

                <div className='w-[32%]'>
                    <div className="form-control">
                        <div className="input-group ">
                            <input type="text" placeholder="Search…" className="input input-bordered w-full" />
                            <button className="btn bg-gradient-to-t from-red-500 to-amber-500 hover:bg-red-700 btn-square">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="white"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
                            </button>
                        </div>
                    </div>
                </div>

                {/* last div */}
                <div className='flex items-center gap-7'>
                    
                        <div className="indicator">
                             <BsCart3 className='text-2xl font-bold'/>
                            <span className="badge badge-sm indicator-item bg-red-500 border-0 text-white">8</span>
                        </div>
                    {
                        user ?  
                            <div className="dropdown dropdown-end">
                                <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                                    <div className="w-10 ring-1 ring-amber-400 rounded-full">
                                        <img src={user?.photoURL} />
                                    </div>
                                </label>
                                <ul tabIndex={0} className="menu menu-sm dropdown-content font-semibold text-zinc-950 mt-3 z-[1] p-2 shadow  backDrp22 rounded-box w-52">
                                    <li><Link>DASHBOARD</Link></li>
                                    <li><a>Settings</a></li>
                                    <li><button className='text-red-600 font-bold  ' onClick={()=>signout()}>Logout</button></li>
                                </ul>
                               
                            
                        </div> : <Link to='signin' className='bg-gradient-to-l uppercase from-amber-500 to-red-500 rounded-lg text-xs py-2.5 px-3 shadow-md shadow-zinc-700   border-0 font-semibold text-zinc-950 hover:bg-amber-600'>SIGN IN</Link>
                     }
                   

                     
                </div>
            </div>
        </nav>
    );
};

export default Navbar;