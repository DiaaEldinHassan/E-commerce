import React from "react";
import accounts from "./Accounts";
import { useNavigate } from "react-router-dom";

import "./Log.css";



export default function Log(props) {
    const [formData, setFormData] = React.useState({
        email: '',
        password: ''
    });
    const navigate = useNavigate();

    function handleChange(e) {
        const { name, value } = e.target;
        setFormData(prevData => ({
            ...prevData,
            [name]: value
        }));
    }

    function checkLogin() {
        const { email, password } = formData;
        
        // Check if account exists with matching email and password
        const account = accounts.find(acc => acc.email === email && acc.password === password);
        
        if (account) {
            // Set logged-in state in parent
            props.func(true);
            // Navigate to home page
            navigate('/');
        } else {
            alert("Email or password is wrong. Please check or sign up.");
        }
    }

    return (
        <div className="login-entry">   
                <h2>Sign in to your account</h2>
                <p>Remember no one can make you feel inferior without your consent. – Eleanor Roosevelt</p>
                
                        <input
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="Enter your email"
                            required
                        />
                   

                
                        <input
                            name="password"
                            type="password"
                            value={formData.password}
                            onChange={handleChange}
                            placeholder="Enter your password"
                            required
                        />
                 

                <div>
                    <button onClick={checkLogin}>
                        Sign in
                    </button>
                </div>

                <a href="#" onClick={e => { e.preventDefault(); props.toggleView(); }}>Don't have an account? Sign up</a>
        </div>
    );
}