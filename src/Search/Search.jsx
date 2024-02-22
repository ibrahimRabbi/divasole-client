import React, { useEffect, useState } from 'react';
import { Link, useLocation, useParams } from 'react-router-dom';
import Card from '../DaynamicCategory/Card';
import Sidebar from '../DaynamicCategory/sidebar';
import Loader from '../UI/Loader';


const Search = () => {
    const { name } = useParams()
    const [mainData, setmainData] = useState([])
    const [loader, setLoader] = useState(false)


    const sortingHandler = (data) => {
        setLoader(true)
        fetch(`https://divasole-server.vercel.app/alldata?sort=${data}`)
            .then(res => res.json())
            .then(res => {
                setmainData(res)
                setLoader(false)
            })
    }


    useEffect(() => {
        setLoader(true)
        fetch(`https://divasole-server.vercel.app/alldata?search=${name}`)
            .then(res => res.json())
            .then(res => {

                setmainData(res)
                setLoader(false)
            })
    }, [name])



    if (loader) {
        return <Loader />
    }


    return (
        <div className='w-[90%] mx-auto lg:ml-0'>

            <div className='grid gap-16'>
                <Sidebar sortingHandler={sortingHandler} />
                <div className='my-12'>
                    {
                        mainData?.length === 0 ? <div className='mx-auto h-[60vh]'>
                            <div className='flex items-center'>
                                <img width={70} src="https://i.ibb.co/5cLFPSK/1bc5a7ea14c0618c435ac828698e1b8f.jpg" />
                                <p className='text-2xl'>{`your expected ${name.search}  does not available here`}</p>
                            </div>
                            <Link className='bg-amber-500 text-center mx-auto block w-1/2 rounded-lg p-2' to='/'>Go To Home</Link>
                        </div> : <div className='grid lg:grid-cols-4 grid-cols-2 gap-4'>
                            {mainData?.map(v => <Card key={v._id} data={v} />)}
                        </div>
                    }
                </div>


            </div>


        </div>
    );
};

export default Search;