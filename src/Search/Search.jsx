import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Card from '../DaynamicCategory/Card';
import Sidebar from '../DaynamicCategory/sidebar';
import Loader from '../UI/Loader';

const Search = () => {
    const { state } = useLocation()
    const [data, setData] = useState(state)
    const [loader, setLoader] = useState(false)

    const sortingHandler = (data) => {
        setLoader(true)
        fetch(`https://toys-server-ebon.vercel.app/data?sort=${data}`)
            .then(res => res.json())
            .then(res => {

                setData(res)
                setLoader(false)
            })
    }

    if (loader) {
        return <Loader />
    }


    return (
        <div className='pt-16 w-[90%] '>

            <div className='grid gap-16'>
                <Sidebar sortingHandler={sortingHandler} />
                <div className='my-14'>
                    {
                        state?.length === 0 ? <div className='mx-auto h-[60vh]'>
                            <div className='flex items-center'>
                                <img width={70} src="https://i.ibb.co/5cLFPSK/1bc5a7ea14c0618c435ac828698e1b8f.jpg" />
                                <p className='text-2xl'>{`your expected ${state.search}  does not available here`}</p>
                            </div>
                            <Link className='bg-amber-500 text-center mx-auto block w-1/2 rounded-lg p-2' to='/'>Go To Home</Link>
                        </div> : <div className='grid grid-cols-3 gap-11'>
                            {data?.map(v => <Card key={v._id} data={v} />)}
                        </div>
                    }
                </div>
            </div>


        </div>
    );
};

export default Search;