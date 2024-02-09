import React from 'react'
import { useState } from 'react';
import Loginform from './Loginform'
import '../../media/Scss/index.css';
import { Link, useNavigate } from "react-router-dom";
import axios from 'axios';
const Index = () => {
    const [Email, setEmail] = useState('');
    const [Password, setPassword] = useState('');
    const [res, setRes] = useState('')
    const var1 = useNavigate();
    const handle = async (e) => {
        e.preventDefault()
        const res1 = await axios.post('http://localhost:5000/login', {
            Email: Email,
            Password: Password
        })
        if (res1.data === 'error') {
            alert('Enter a Correct Password')
        }
        else if (res1.data) {
            console.log('donee')
            console.log(res1);
            setRes(res1.data);
            var1('/home', { state: { props: res1.data } });
        }
    }
    return (
        <div><Loginform setEmail={setEmail} setPassword={setPassword} handle={handle} res={res} /></div>
    )
}

export default Index