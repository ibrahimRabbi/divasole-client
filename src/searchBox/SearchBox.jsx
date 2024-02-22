import React from 'react';
import useCoustomSearch from '../coustomHooks/usCoustomSearch';


const SearchBox = () => {

 const {srchFeild,changeHandler,search,clickHandler,searchHandler} = useCoustomSearch()
    

    return (
        <div className='w-full relative'>
            <form className="input-group " onSubmit={searchHandler}>
                <input
                    name='name'
                    value={srchFeild}
                    onChange={changeHandler}
                    type="search"
                    placeholder="Search by product name"
                    className="input input-bordered w-full"
                />

                <button type='submit' className="btn bg-[#624B3E] hover:bg-red-700 btn-square">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="white"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
                </button>
            </form>

            {search.length > 0 ? <div className='bg-slate-100 p-2 rounded-lg mt-1 absolute z-50 w-full'>
                {search.map(v => {
                    return (
                        <p className='cursor-pointer hover:bg-slate-50 rounded-lg' onClick={() => clickHandler(v)} key={v._id}>{v.name}</p>
                    )
                })}
            </div> : ''}
        </div>
    );
};

export default SearchBox;