import React from 'react';
import { Link } from "react-router-dom";

const style = {
    Header: {
    },
    button: {

    },
    Login: {

    },
    Logout:{

    },
};

//function button = (if loggedin( show log out button)
//else (show login button));


export default function Header() {
    return (
        <div className="first div">
            <div style={style.Header}>
                {/* App name and slogan */}
                <h1>Farmers' Harvest</h1><h4>Fresh Produce Today!</h4>
            </div>
            <div style={style.button} >
                {/* login button, logout button should disappear when not logged in and vice versa */}
            <button type="Login" ><Link to="/login"> Login </Link></button>
            <button type="logout">Logout</button>
            </div>
        </div>
    )
};

