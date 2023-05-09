import React from 'react';

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
                <h1>Farmers' Harvest</h1><h4>Test subtitle</h4>
            </div>
            <div style={style.button} >
            <button type="Login">Login</button>
            <button type="logout">Logout</button>
            </div>
        </div>
    )
};

