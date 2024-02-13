import React from 'react'
import NavImg from '../../Navbar.png'
import { useState } from 'react'
import '../../media/Scss/index.css';
import '../PolicyDocs/PolicyDocs'
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
const Navbar = () => {
    const navigate = useNavigate();
    const [res, setres] = useState([]);
    const getPolicyDocs = async () => {
        console.log('hello')
        const res1 = await axios.get('http://localhost:5000/getPdf')
        console.log(res1.data);
        setres(res1.data);
    }
    const [Navbar, setNavbar] = useState(false)
    const toggleNavbar = () => {
        setNavbar(!Navbar);
    }
    const [Pdf, setPdf] = useState(false);
    const ShowPdf = () => {
        setPdf(!Pdf)
    }
    return (
        <div className={`NavbarContent ${Navbar ? 'display' : ''}`}>
            <img src={NavImg} className='NavImg' onClick={toggleNavbar}></img>
            <ul className='NavbarList'>
                <li className='NavbarHome'>Home</li>
                <li className='NavbarProfile'>Profile Selection</li>
                <li className='NavbarPolicy' ><Link to={"/policy"} state={{ props: res }} className='NavbarPolicy' onClick={getPolicyDocs}>Policy</Link></li>
                <li className='NavbarAttendance'>Attendance</li>
            </ul>
        </div>
    )
}

export default Navbar