import React from 'react';
//import JWT from 'jwt-decode'

const style = {
    form: {

    },
    signup: {

    },

}

//useState?

//default expected params below

function Login() {
    return (
        <div>
            <div>
                <h2>Welcome to Farmers' Harvest. Please log in below</h2>
            </div>
            {/* login for users */}
            <div style={style.form}>
                <input name="UserName" placeholder='Username' />
                <input name="password" placeholder="password" />
                <button type="submit">Submit</button>
            </div>
            <div>
                <div>
                    <h2> Or sign up below!</h2>
                </div>
                {/* sign up form */}
                <div style={style.signup}>
                    <input name='name' placeholder='Name' />
                    <input name='email' placeholder='Email' />
                    <input name='username' placeholder='Set your Username' />
                    <input name='password' placeholder='Password' />
                    <label>I agree to the Terms Of Service: <input type="checkbox" name='TOSCheckbox' /></label>
                    <button type="submit">Submit</button>
                </div>
            </div>
        </div>
    )
}
export default Login;