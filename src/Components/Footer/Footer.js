// Footer.js

import React from 'react';
import './Footer.css';
import facebook from '../Assets/facebook-logo.png';
import insta from '../Assets/insta.png';
import twitter from '../Assets/twitter.png';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-info">
          <h2>Contact Us</h2>
          <p>Email: mdinu8127@gmail.com</p>
          <p>Phone: +911234567890</p>
        </div>
        <div className="footer-social">
          <h2>Follow Us</h2>
          <ul>
            <li>
              <a href="#" target="_blank" rel="noopener noreferrer">
                <img src={facebook} alt="Facebook" />
              </a>
            </li>
            <li>
              <a href="#" target="_blank" rel="noopener noreferrer">
                <img src={insta} alt="Instagram" />
              </a>
            </li>
            <li>
              <a href="#" target="_blank" rel="noopener noreferrer">
                <img src={twitter} alt="Twitter" />
              </a>
            </li>
          </ul>
        </div>
      </div>
      <p className="footer-copyright">© 2024 Your Company. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
