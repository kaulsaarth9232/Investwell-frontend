import React from 'react'
import Signupform from './Signupform'
import axios from 'axios'
import { useState } from 'react';
import { Link, useNavigate } from "react-router-dom";
const Index = () => {
    const var1 = useNavigate();
    const [Name, setName] = useState('');
    const [Email, setEmail] = useState('');
    const [Password, setPassword] = useState('');
    const [ans, setans] = useState('')
    const handle = async (e) => {
        e.preventDefault()
        const res = await axios.post('http://localhost:5000/signup', {
            Name: Name,
            Email: Email,
            Password: Password
        })
        let msg = res.data.message
        console.log(msg);
        setans(msg);
        // if (res.data.success) {
        //     var1('/login');
        // }
    }
    return (
        <div>
            <Signupform handle={handle} setEmail={setEmail} setName={setName} setPassword={setPassword} setans={setans} ans={ans} />
        </div>
    )
}

export default Index
