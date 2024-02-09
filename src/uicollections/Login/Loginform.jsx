import axios from 'axios';
import React, { useState } from 'react'
import '../../media/Scss/index.css';
import { Link, useNavigate } from "react-router-dom";
const Loginform = ({ setEmail, setPassword, handle, res }) => {
    // const [Email, setEmail] = useState('');
    // const [Password, setPassword] = useState('');
    // const [res, setRes] = useState('')
    // const var1 = useNavigate();
    // const handle = async (e) => {
    //     e.preventDefault()
    //     const res1 = await axios.post('http://localhost:5000/login', {
    //         Email: Email,
    //         Password: Password
    //     })
    //     if (res1.data === 'error') {
    //         alert('Enter a Correct Password')
    //     }
    //     else if (res1.data) {
    //         console.log('donee')
    //         console.log(res1);
    //         setRes(res1.data);
    //         var1('/home', { state: { props: res1.data } });
    //     }
    // }
    return (
        <>
            <form onSubmit={handle} className="loginform">
                <h1 className='topLogin'>Login Form</h1>
                <div className='main-div'>
                    <div>
                        <label htmlFor='Email' className='labelEmail'>EMAIL</label>
                        <input id=" Email" placeholder="Add Email" className="emailInput" type="email" onChange={(e) => setEmail(e.target.value)} required />
                    </div>
                    <div className='labelPassword'>
                        <label htmlFor='Password' >PASSWORD</label>
                        <input id="Password" placeholder="Add Password" type="password" className="passwordInput" onChange={(e) => setPassword(e.target.value)} required />
                    </div>
                    <button className='loginButton'>SIGN IN</button>
                    <p >{res}</p>
                </div>
                <div className='navigateRegister'>
                    <Link to='/Signup'>SignUp</Link>
                </div>
            </form>

        </>
    )
}

export default Loginform