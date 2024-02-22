import React from 'react';
import { NavLink } from "react-router-dom";
const ActiveLink = ({ to, children }) => {
    return (
        <NavLink
            to={to}
            className={({ isActive }) => isActive ? 'text-[#774f2e] font-bold' : ""}>
            {children}
        </NavLink>
    );
};

export default ActiveLink;