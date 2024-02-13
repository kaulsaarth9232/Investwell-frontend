import { set } from 'mongoose';
import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import axios from 'axios'
import '../../media/Scss/index.css';
import { redirect, useLocation, useNavigate } from 'react-router-dom'
import NavbarComp from '../Navbar/Navbar'
const Home = () => {
    const navigate = useNavigate();

    const getdata = async () => {
        axios.defaults.withCredentials = true;
        await axios.get('http://localhost:5000/getdata')
            .then(res => {
                console.log(res.data);
                if (res.data === 'logout') {
                    navigate('/login')
                }
                console.log('getdata');
            })
    }
    const loc = useLocation();
    const name = loc.state.props;
    console.log(name);
    const [toast, settoast] = useState(false)
    useEffect(() => {
        settoast(true);
        setTimeout(() => {
            settoast(false);
        }, 10000)
    }, [name])
    return (
        <>
            <div className="toast" role="alert" aria-live="assertive" aria-atomic="true">
                <NavbarComp />
                <div className="toast-header">
                </div>
                {toast && <div className="toastbody">
                    Login Successfull
                </div>}
            </div>
            <button onClick={getdata} className="getdatabtn">
                Logout
            </button>
            <h1 className='content'>{name}</h1>
        </>
    )
}


export default Home