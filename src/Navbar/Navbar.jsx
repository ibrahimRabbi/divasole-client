import React from 'react';
import Button from '../UI/Button';
import './navbar.css'
const Navbar = () => {
    return (
        <nav className='py-2 fixed z-50 navbar'>
            <div className='w-[90%] flex justify-between items-center mx-auto'>
                {/* fast div */}
                <div>
                    <img width={170} loading='lazy' src="https://i.ibb.co/GRZtW6f/1696653667568.png" alt="LOGO" />
                </div>

                {/* last div */}
                <div className='flex items-center gap-7'>
                    <div className="form-control">
                        <div className="input-group ">
                            <input type="text" placeholder="Search…" className="input input-bordered w-full" />
                            <button className="btn bg-red-600 hover:bg-red-700 btn-square">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="white"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
                            </button>
                        </div>
                    </div>
                    <Button title='SIGN IN' />
                </div>
            </div>
        </nav>
    );
};

export default Navbar;