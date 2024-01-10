// Navbar.js

import React from 'react';
import './Navbar.css';
import logo from '../Assets/travel_logo.jpg';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div className='navbar'>
            <div className='nav-logo'>
                <img src={logo} alt='' />
                <p>Travel</p>
            </div>
            <ul className='nav-menu'>
                <li><Link style={{ textDecoration: 'none' }} to='/'>Home</Link></li>
                <li><Link style={{ textDecoration: 'none' }} to="/about">About Us</Link></li>
                <li><Link style={{ textDecoration: 'none' }} to="/contact">Contact Us</Link></li>
            </ul>
            <div className='nav-login-cart'>
                <Link to='/login'><button>Login</button></Link>
            </div>
        </div>
    );
}

export default Navbar;
