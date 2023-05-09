import React { useState } from 'react';
import ReactDOM from "react-dom/client";
import { useMutation } from '@apollo/client';

import Auth from '../utils/auth';

// Establishing variable login and passing through credentials 
const Login = (credentials) => {
    const [formState, setFormState] = useState({ email: '', password: '' });
    const [login, { error, data }] = useMutation(LOGIN_USER);

    // State changes based on user's input 
    const handleChange = (event) => {
        const { user, value } = event.target;
    
        setFormState({
          ...formState,
          [user]: value
        })
      };

// Submitting the form
const handleFormSubmit = async (event) => {
    event.preventDefault();
    console.log(formState);
    try {
      const { data } = await login({
        variables: { ...formState },
      });

      Auth.login(data.login.token);
    } catch (e) {
      console.error(e);
    }

    setFormState({
        email: '',
        password: ''
      });
    };

//default expected params below
return (
    <div>
        <div>
            <h2>Welcome to Farmers' Harvest. Please log in below</h2>
        </div>
        <div style={Style.form}>
            <input />
            <input />
            <button />
        </div>
        <div>
            <div>
                <h2> Or sign up below!</h2>
            </div>
            <div style={Style.signup}>
                <input />
                <input />
                <input />
                <checkbox />
                <button />
            </div>
        </div>
    </div>
);
};

// export default parameters 
export default Login;
