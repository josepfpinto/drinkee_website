import React from 'react';
import '../styles/style.scss';
import { Outlet, Link } from "react-router-dom";
import Cookies_popup from './cookie_popup';

const Main = () => {
    return (
        <>
            {Cookies_popup()}
            <nav></nav>
            <Outlet />
        </>
    )
};

export default Main;
