import React, { useState, useEffect, useRef } from "react"
import { FaBars } from 'react-icons/fa';
import { links, social } from './data';
import logo from './logo.svg';

function Navbar(){

    const [showLinks, setShowLinks] = useState(false)

    return(
        <nav>
            <div className="nav-center">
                <div className="nav-header">
                    <img src={logo} alt="logo"/>
                </div>
            </div>
        </nav>
    )
}

export default Navbar