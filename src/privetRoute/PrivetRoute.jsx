import React, { useContext } from 'react';
import { Context } from '../Authentication/AuthContext';
import { Navigate, useLocation } from 'react-router-dom';
import Loader from '../UI/Loader';
 

const PrivetRoute = ({ children }) => {

    const { user, loading } = useContext(Context)
    const location = useLocation()

    if (loading) {
        return  <Loader/>
    }
    if (user) {
        return children
    }

    return <Navigate state={{ redi: location.pathname }} to='/signin' />

};

export default PrivetRoute;