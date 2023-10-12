 import React from 'react';
import './daynamic.css'
import ActiveLink from '../UI/ActiveLink';
const Sidebar = () => {
     
    const sorting = ['New Arrival','Rating','Low price','High price']
    return (
        <div className='backDrp border border-t-0 p-5'>

            <div>
                <p className='text-zinc-800 ml-2 font-semibold'>Sort By:</p>
                <select className="select mt-1 border w-full max-w-xs">
                    {sorting.map(v => <option key={Math.random()}>{v}</option>)}
                </select>
            </div>
            <div className='mt-5'>
                <p className='text-zinc-800 ml-2 font-semibold'>Categories</p>
                <ul  className="menu bg-white rounded-lg">
                    <li>
                        <details open>
                            <summary>choose your category</summary>
                            <ul>
                                <li><ActiveLink to='/avangers'>Avangers</ActiveLink></li>
                                <li><ActiveLink to='/spiderman'>spiderman</ActiveLink></li>
                                <li><ActiveLink to='/star-wars'>star-wars</ActiveLink></li>
                                <li><ActiveLink to='/warner-bros'>warner-bros</ActiveLink></li>
                                <li><ActiveLink to='/marvel'>Marvel</ActiveLink></li>
                            </ul>
                        </details>
                    </li>
                </ul>   
            </div>
        </div>
    );
 };
 
 export default Sidebar;