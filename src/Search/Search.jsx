import React from 'react';
import { Link, useLocation } from 'react-router-dom';
 import Card from '../DaynamicCategory/Card';
import Sidebar from '../DaynamicCategory/sidebar';

const Search = () => {
    const { state } = useLocation()
console.log(state)

    
    return (
        <div className='pt-16 w-[90%] '>

            <div className='grid gap-16'>
                <Sidebar />
                <div className='my-14'>
                    {
                        state?.length === 0 ? <div className='mx-auto h-[60vh]'>
                            <div className='flex items-center'>
                                <img width={70} src="https://i.ibb.co/5cLFPSK/1bc5a7ea14c0618c435ac828698e1b8f.jpg" />
                                <p className='text-2xl'>{`your expected ${state.search}  does not available here`}</p>
                            </div>
                            <Link className='bg-amber-500 text-center mx-auto block w-1/2 rounded-lg p-2' to='/'>Go To Home</Link>
                        </div> : <div className='grid grid-cols-3 gap-11'>
                            {state?.map(v => <Card key={v._id} data={v} />)}
                        </div>
                    }
                </div>
            </div>
            
           
        </div>
    );
};

export default Search;