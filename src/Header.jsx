import React from 'react'
import { Link } from "react-router-dom";
import Logo from './white-rubixe-logo.png';
export default function NavBar() {
  return (
    <div id='navbar-link'>
        <div id="nav">
                <nav>
                    <div id='logo'>
                        <img src={Logo} alt="logo"  id='logo'/>
                    </div>
                    <div id="navbar">
                        <Link to='/home' id='navh' className="hover-underline-animation">HOME</Link>
                        <Link to='/services' id='navb' className="hover-underline-animation">SERVICES</Link>
                        <Link to='/products'id='navt' className="hover-underline-animation">PRODUCTS</Link>
                        <Link to='/ai' id='navhl' className="hover-underline-animation">AI INTERNSHIP</Link>
                        <Link to='/careers' id='navf' className="hover-underline-animation">CAREER</Link>
                        <Link to='/blog' id='navfd' className="hover-underline-animation">BLOG</Link>
                        <Link to='/about' id='navfd' className="hover-underline-animation">ABOUT</Link>
                        <Link to='/contact' id='navfd' className="hover-underline-animation">CONTACT US</Link>
                    </div>
                    
                </nav>
            </div>
    </div>
  )
}
