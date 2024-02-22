 import React from 'react';
import './daynamic.css'
import ActiveLink from '../UI/ActiveLink';
// import { handler } from '../redux/features/slice';
// import { useDispatch, useSelector } from 'react-redux';






const Sidebar = ({ sortingHandler }) => {
    const sorting = ['New Arrival', 'Rating', 'Low price', 'High price','Best Deal']
    
    return (
        <div className='border hidden lg:inline-block bg-slate-100 border-t-0 border-b-0 p-5'>

            <div>
                <p className='text-zinc-800 ml-2 font-semibold'>Sort By:</p>
                <select onChange={(e)=>sortingHandler(e.target.value)}  className="select mt-1 bg-transparent border w-full max-w-xs">
                    {sorting.map(v => <option key={Math.random()}>{v}</option>)}
                </select>
            </div>
            <div className='mt-5'>
                <p className='text-zinc-800 ml-2 font-semibold'>Categories</p>
                <ul  className="menu text-md">
                    <li>
                        <details open>
                            <summary>choose your category</summary>
                            <ul>
                                <li><ActiveLink to='/mens-shoes'>Mens Shoes</ActiveLink></li>
                                <li><ActiveLink to='/kameez'>Kameez</ActiveLink></li>
                                <li><ActiveLink to='/canvas'>Canvas</ActiveLink></li>
                                <li><ActiveLink to='/t-shirt'>T-shirt</ActiveLink></li>
                                <li><ActiveLink to='/punjabi'>Punjabi</ActiveLink></li>
                                <li><ActiveLink to='/teddy bear'>Teddy bear</ActiveLink></li>
                                <li><ActiveLink to='/Mobail'>Mobail</ActiveLink></li>
                                <li><ActiveLink to='/Kitchen Accessories'>Kitchen Accessories</ActiveLink></li>
                            </ul>
                        </details>
                    </li>
                </ul>   
            </div>
        </div>
    );
 };
 
 export default Sidebar;