import React, { useState } from 'react';
//import ReactDOM from "react-dom/client";
//import { useMutation } from '@apollo/client';
import style from "../Style/login.css";

//import Auth from '../utils/auth';

// Establishing variable login and passing through credentials 
//const Login = (credentials) => {
   // const [formState, setFormState] = useState({ email: '', password: '' });
    //const [login, { error, data }] = useMutation(LOGIN_USER);

    // State changes based on user's input 
   // const handleChange = (event) => {
      //  const { user, value } = event.target;

     //   setFormState({
     //       ...formState,
      //      [user]: value
     //   })
  //  };

    // Submitting the form
   // const handleFormSubmit = async (event) => {
    //    event.preventDefault();
   //     console.log(formState);
    //    try {
     //       const { data } = await login({
      //          variables: { ...formState },
      //      });

       //     Auth.login(data.login.token);
       // } catch (e) {
       //     console.error(e);
       // }

       // setFormState({
       //     email: '',
       //     password: ''
       // });
   // };
//}

function LoginPage() {
    return (
        <div>
            <div className='pageLogin'>
                <div>
                    <h2>Welcome to Farmers' Harvest. Please log in below</h2>
                </div>
                {/* login for users */}
                <div className='signin'>
                    <input name="UserName" placeholder='Username' />
                    <input name="password" placeholder="password" />
                    <button type="submit">Submit</button>
                </div>
                <div>
                    <div>
                        <h2> Or sign up below!</h2>
                    </div>
                    {/* sign up form */}
                    <div className='signup'>
                        <input name='name' placeholder='Name' />
                        <input name='email' placeholder='Email' />
                        <input name='username' placeholder='Set your Username' />
                        <input name='password' placeholder='Password' />
                        <label>I agree to the Terms Of Service: <input type="checkbox" name='TOSCheckbox' /></label>
                        <button type="submit">Submit</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

// export default parameters 
export default LoginPage;

