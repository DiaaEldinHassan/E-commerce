import React from "react";
import accounts from "./Accounts";
import { useNavigate } from "react-router-dom";

export default function Left(props) {
    const [state, setState] = React.useState(false);
    const [formData, setFormData] = React.useState({
        email: '',
        password: '',
        confirmPassword: ''
    });
    const navigate = useNavigate();
  
    function log(){
        setState(!state);
    }

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
            // Navigate to home page
            navigate('/');
        } else {
            alert("Email or password is wrong. Please check or sign up.");
        }
    }

    function checkSignup() {
        const { email, password, confirmPassword } = formData;
        
        // Check if passwords match
        if (password !== confirmPassword) {
            alert("Passwords do not match!");
            return;
        }
       if(email==="" || password==="" || confirmPassword===""){
        alert("Please fill all the fields");
        return;
       }
        // Check if account exists
        if (accounts.find(account => account.email === email)) {
            alert("Account already exists");
        } else {
            accounts.push({ email, password });
            alert("Account created successfully");
            // Clear form
            setFormData({
                email: '',
                password: '',
                confirmPassword: ''
            });
            // Set logged-in state in parent
            props.func(true);
        }
    }

    return (state ? null :
        <div className="flex flex-1 left-container justify-center">   
            <div className="layout-content-container flex flex-col flex-1">
                <h2 className="tracking-light text-[28px] font-bold leading-tight px-4 text-center pb-3 pt-5">Create an account</h2>
                <div className="flex max-w-[480px] flex-wrap items-end gap-4 px-4 py-3">
                    <label className="flex flex-col min-w-40 flex-1">
                        <p className="text-base font-medium leading-normal pb-2">Email</p>
                        <input
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="Enter your email"
                            className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg focus:outline-0 focus:ring-0 border border-[#dbdbdb] bg-neutral-50 focus:border-[#dbdbdb] h-14 placeholder:text-neutral-500 p-[15px] text-base font-normal leading-normal"
                            required
                        />
                    </label>
                </div>
                <div className="flex max-w-[480px] flex-wrap items-end gap-1 px-4 py-3">
                    <label className="flex flex-col min-w-40 flex-1">
                        <p className="text-base font-medium leading-normal pb-2">Password</p>
                        <input
                            name="password"
                            type="password"
                            value={formData.password}
                            onChange={handleChange}
                            placeholder="Enter your password"
                            className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg focus:outline-0 focus:ring-0 border border-[#dbdbdb] bg-neutral-50 focus:border-[#dbdbdb] h-14 placeholder:text-neutral-500 p-[15px] text-base font-normal leading-normal"
                            required
                        />
                    </label>
                </div>
                <div className="flex max-w-[480px] flex-wrap items-end gap-4 px-4 py-3">
                    <label className="flex flex-col min-w-40 flex-1">
                        <p className="text-base font-medium leading-normal pb-2">Confirm Password</p>
                        <input
                            name="confirmPassword"
                            type="password"
                            value={formData.confirmPassword}
                            onChange={handleChange}
                            placeholder="Confirm your password"
                            className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg focus:outline-0 focus:ring-0 border border-[#dbdbdb] bg-neutral-50 focus:border-[#dbdbdb] h-14 placeholder:text-neutral-500 p-[15px] text-base font-normal leading-normal"
                            required
                        />
                    </label>
                </div>
                <div className="flex px-4 py-3">
                    <button
                        onClick={checkSignup}
                        className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 flex-1 text-sm font-bold leading-normal tracking-[0.015em]"
                    >
                        <span className="truncate">Create Account</span>
                    </button>
                </div>
                <a href="#" onClick={e => { e.preventDefault(); props.toggleView(); }} className="text-neutral-500 text-sm font-normal leading-normal pb-3 pt-1 px-4 text-center underline">Already have an account? Sign in</a>
            </div>
        </div>
    );
}