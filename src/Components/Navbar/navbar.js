// Navbar.js

import React, { useState } from 'react';
import './Navbar.css';
import logo from '../Assets/logo.png';
import profileIcon from '../Assets/profile-icon.jpg'; // Replace with your actual profile icon image
import { Link, useNavigate } from 'react-router-dom';



const Navbar = () => {
    const navigate = useNavigate();
    const [showMenu, setShowMenu] = useState(false);
    const [showLoginForm, setShowLoginForm] = useState(false);

    const handleLogoClick = () => {
        navigate('/Home');
    };

    const handleProfileClick = () => {
        setShowLoginForm(!showLoginForm);
    };

    const handleLoginClick = () => {
        // Navigate to the login page when the user interacts with the login form
        navigate('/Login');
    };

    const toggleMenu = () => {
        setShowMenu(!showMenu);
    };

    return (
        <nav className="navbar">
            <div className='nav-container'>
                <div className='nav-logo' onClick={handleLogoClick}>
                    <img src={logo} className="rounded-circle" alt="Logo" />
                </div>
                <div className={`nav-menu ${showMenu ? 'show' : ''}`}>
                    <ul>
                        <li><Link to='/Home'>Home</Link></li>
                        <li><Link to='/about'>About Us</Link></li>
                        <li><Link to="/contact">Contact Us</Link></li>
                        <li><Link to="/product">Product</Link></li>
                    </ul>
                </div>
                <div className='nav-login-cart'>
                    <div className='profile-section' onClick={handleProfileClick}>
                        <img src={profileIcon} alt="Profile" className="profile-icon" />
                    </div>
                    {showLoginForm && (
                        <div className="login-form">
                            {/* Your login/signup form goes here */}
                            <button onClick={handleLoginClick}>Login</button>
                        </div>
                    )}
                </div>
                <div className='hamburger-menu' onClick={toggleMenu}>
                    <div className={`bar ${showMenu ? 'change' : ''}`}></div>
                    <div className={`bar ${showMenu ? 'change' : ''}`}></div>
                    <div className={`bar ${showMenu ? 'change' : ''}`}></div>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
