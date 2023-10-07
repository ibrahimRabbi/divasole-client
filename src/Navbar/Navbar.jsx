import React from 'react';
import Button from '../UI/Button';
import './navbar.css'
import { BsCart3 } from 'react-icons/bs'
const Navbar = () => {
    return (
        <nav className='py-2 fixed z-50 navbar backDrp'>
            <div className='w-[90%] flex justify-between items-center mx-auto'>
                {/* fast div */}
                <div>
                    <img width={170} loading='lazy' src="https://i.ibb.co/B39k2dx/1696674199331-removebg-preview.png" alt="LOGO" />
                </div>

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
                     
                    <Button title='SIGN IN' />
                </div>
            </div>
        </nav>
    );
};

export default Navbar;