import React from 'react';
import ActiveLink from '../UI/ActiveLink';

const Manubar = () => {
    return (
        <nav className='bg-[#96735d] text-slate-100 font-semibold text-[13px]'>
            <ul className='flex gap-11 font-medium w-[95%] mx-auto justify-center py-2 '>
                <li><ActiveLink to='/'>HOME</ActiveLink></li>
                <li><ActiveLink to='/alltoys'>ALL TOYS</ActiveLink></li>
                <li><ActiveLink to='/mytoys'>MY TOYS</ActiveLink></li>
                <li><ActiveLink to='/addtoys' >ADD TOYS</ActiveLink></li>
            </ul>
        </nav>
    );
};

export default Manubar;