// Navbar.js
import React from 'react';
import './Navbar.css';
import logo from '../Assets/logo.png';
import { Link, useNavigate } from 'react-router-dom';

const Navbar = () => {
    const navigate = useNavigate();

    const handleLogoClick = () => {
        // Navigate to the TravelInformationPage
        navigate('/travel-information');
    };

    return (
        <div className='navbar'>
            <div className='nav-logo' onClick={handleLogoClick}>
                <img src={logo} alt='' />
                <spanp>Boodmu</spanp>
            </div>
            <ul className='nav-menu'>
                <li><Link to='/Home'>Home</Link></li>
                <li><Link to='/about'>About Us</Link></li>
                <li><Link to="/contact">Contact Us</Link></li>
                {/* <li><Link to="/booking">Booking</Link></li> */}
                <li><Link to="/product">Product</Link></li>

            </ul>
            <div className='nav-login-cart'>
                <Link to='/Login'><button>Login</button></Link>
            </div>            
               

        </div>
    );
}

export default Navbar;


