import { set } from 'mongoose';
import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import { useLocation } from 'react-router-dom'
const Home = () => {
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
                <div className="toast-header">
                </div>

                {toast && <div className="toastbody">
                    Login Successfull
                </div>}

            </div>
            <h1>{name}</h1>
        </>
    )
}


export default Home