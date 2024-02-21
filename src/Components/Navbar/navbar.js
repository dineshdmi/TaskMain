// Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';
import '../CSS/Navbar.css'; // Import the CSS file

const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="left-end">
                <span className="app-name">Header</span>
            </div>
            <ul className="right-end">
                <li>
                    <Link to="/component1">Component 1</Link>
                </li>
                <li>
                    <Link to="/component2">Component 2</Link>
                </li>
                <li>
                    <Link to="/component3">Component 3</Link>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;
