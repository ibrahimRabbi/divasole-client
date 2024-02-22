import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const DashBoard = () => {
    return (
        <section>
            <div className="drawer lg:drawer-open">
                <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content ">
                    <Outlet />
                </div>
                <div className="drawer-side">
                    <label htmlFor="my-drawer-2" aria-label="close sidebar" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-80 min-h-full bg-base-200 text-base-content">
                        <li><Link to='/'><img width={140} src="https://i.ibb.co/4FTjRr1/divasole-Logo.png" /></Link></li>
                        <div className='mt-5'>
                            <li><Link to='/'>Home</Link></li>
                            <li><Link to='orders'>Orders</Link></li>
                            <li><Link to='addproduct'>Add Product</Link></li>
                            <li><Link to='manage'>Manage Product</Link></li>
                            <li><Link to='manage'>Inventory</Link></li>
                        </div>      
                    </ul>
                </div>
            </div>
        </section>
    );
};

export default DashBoard;