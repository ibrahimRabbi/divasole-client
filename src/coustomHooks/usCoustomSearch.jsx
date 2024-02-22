import React, { useState } from 'react';
import { useAllDataQuery } from '../redux/baseApi/baseApi';
import { useNavigate } from 'react-router-dom';

const useCoustomSearch = () => {

    const { data = [] } = useAllDataQuery()
    const [srchFeild, setSrchFeild] = useState('')
    const [search, setSearch] = useState([])
    const navigate = useNavigate()


    const changeHandler = (e) => {
        const searchValue = e.target.value
        setSrchFeild(searchValue)
        if (searchValue == '') {
            setSearch([])
        } else {
            const compress = searchValue.toLowerCase()
            const filtering = data.filter(v => v.name.toLowerCase().includes(compress))
            const slicing = filtering.slice(0, 10)
            setSearch(slicing)
        }
    }

    const clickHandler = (value) => {
        setSrchFeild(value.name)
        setSearch([])
    }


    const searchHandler = (e) => {
        setSearch([])
        e.preventDefault()
        const name = e.target.name.value
       return navigate(`/search/${name}`)
    }



    return { srchFeild, changeHandler,search,clickHandler,searchHandler }
};

export default useCoustomSearch;