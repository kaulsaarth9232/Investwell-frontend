import React, { useState } from 'react'
import { Link } from "react-router-dom";
import { useEffect } from 'react';
import '../../media/Scss/index.css';
const Signupform = ({ handle, setEmail, setName, setPassword, setans, ans }) => {
    const [toast, settoast] = useState(false)
    useEffect(() => {
        settoast(true);
        setTimeout(() => {
            settoast(false);
            setans('')
        }, 3000)
    }, [ans])
    return (
        <form onSubmit={handle} className="signupForm">
            <h1 className='topSignup'>Signup Form</h1>
            <div className='main-div'>
                <div>
                    <label htmlFor='Name' className='signupName'>NAME</label>
                    <input id="Name" type="text" placeholder="Add Name" onChange={(e) => setName(e.target.value)} required className='nameInput' />
                </div>
                <div>
                    <label htmlFor='Email' className='signupEmail'>EMAIL</label>
                    <input id=" Email" type="email" placeholder="Add Email" onChange={(e) => setEmail(e.target.value)} required className='emailInput' />
                </div>
                <div>
                    <label htmlFor='Password' className='signupPassword'>PASSWORD</label>
                    <input id="Password" type="password" placeholder="Add Password" onChange={(e) => setPassword(e.target.value)} required className='passwordInput' />
                    {/* <ul>
                        <li>At least 6 Characters length</li>
                        <li>At one Lowercase letter (a...z)</li>
                        <li>At one Uppercase letter (A...Z)</li>
                        <li>Only Special Character [@]</li>
                        <li>At one digit (0...9)</li>
                    </ul> */}
                </div>
                <button className='loginButton'>SUBMIT</button>
                {toast && <div className="Answer">
                    {ans}
                </div>}

            </div>
            <div className='loginNavigate'>
                <Link to='/login'> Login</Link>
            </div>
        </form>
    )
}

export default Signupform