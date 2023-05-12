import React from 'react';
import { Link } from "react-router-dom";
import NavBar from './navbar';
import style from './Style/header.css';

//function button = (if loggedin( show log out button)
//else (show login button));


export default function Header() {
    return (
        <div className='Header'>
            <div>
                {/* App name and slogan */}
                <h1>Farmers' Harvest</h1><h4>Fresh Produce Today!</h4>
            </div>
            <div className='navtabbar'>
            <NavBar />
            </div>
            <div className='ButtonS' >
                {/* login button, logout button should disappear when not logged in and vice versa */}
                <button className='Login' type="Login" ><Link to="/login"> Login </Link></button>
                <button className='Logout' type="logout">Logout</button>
            </div>
        </div>
    )
};

