import React from 'react';
import Navbar from '../Navbar/Navbar';
import { Outlet } from 'react-router-dom';
import Footer from '../Footer/Footer';
 import './layout.css'
const Layout = () => {
    return (
        <div className='layout' >  
            <Navbar/>
            <Outlet />
            <Footer/>
        </div>
    );
};

export default Layout;