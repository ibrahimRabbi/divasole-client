 import React from 'react';
import './daynamic.css'
import ActiveLink from '../UI/ActiveLink';
// import { handler } from '../redux/features/slice';
// import { useDispatch, useSelector } from 'react-redux';






const Sidebar = ({ sortingHandler }) => {
    const sorting = ['New Arrival', 'Rating', 'Low price', 'High price']
    
    return (
        <div className='border bg-slate-100 border-t-0 border-b-0 p-5'>

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
                                <li><ActiveLink to='/softToys'>Soft Toys</ActiveLink></li>
                                <li><ActiveLink to='/teddy'>Teddy Bear</ActiveLink></li>
                                <li><ActiveLink to='/marvel'>Marvel</ActiveLink></li>
                                <li><ActiveLink to='/avangers'>Avangers</ActiveLink></li>
                                <li><ActiveLink to='/spiderman'>spiderman</ActiveLink></li>
                                <li><ActiveLink to='/star-wars'>star-wars</ActiveLink></li>
                                <li><ActiveLink to='/warner-bros'>warner-bros</ActiveLink></li>
                                <li><ActiveLink to='/transfarmer'>Transfarmer</ActiveLink></li>
                            </ul>
                        </details>
                    </li>
                </ul>   
            </div>
        </div>
    );
 };
 
 export default Sidebar;