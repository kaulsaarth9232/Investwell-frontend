import axios from 'axios';
import React from 'react'
import { useLocation } from 'react-router-dom';
import '../../media/Scss/index.css';
import NavbarComp from '../Navbar/Navbar'
const PolicyDocs = (props) => {
    const location = useLocation();
    const getPdfData = async () => {
        console.log('function called')
        const res = await axios.get('http://localhost:5000/getPdfData')
        const response = res.data;
        //file:///C:\Programs\sort.mw"
        //window.open("file:///C:\Users/sandeep/Desktop/project-1/frontend/public/index4.js", '_blank')
        window.open("file:///Users/sandeep/Desktop/project-1/frontend/public/index4.js")
        console.log(window.location.href);
    }
    const data = location.state.props;
    console.log(data);
    return (
        <div>
            <NavbarComp />
            <table className='table'>

                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Name</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((element, index) => {
                        return (
                            <tr key={index}>
                                <td>{index + 1}</td>
                                <td>{element.slice(0, -3)}</td>
                                <td><button onClick={getPdfData}>PDF</button></td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        </div>
    )
}

export default PolicyDocs