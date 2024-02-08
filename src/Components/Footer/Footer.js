// Footer.js
import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css'; // Import your CSS file
import { SocialIcon } from 'react-social-icons'

const Footer = () => {
  return (
    <div>
    <footer className="footer">
      <div className="footer-section about">
        <h2>About</h2>
        <ul>
            <li><Link to="/contact">Contact us</Link></li>
          <li><Link to="/faq">FAQ</Link></li>
          <li><Link to="/careers">Careers</Link></li>
          <li><Link to="/investor-relations">Investor Relations</Link></li>
        </ul>
      </div>
      <div className="footer-section policy">
        <h2>Policy</h2>
        <ul>
          <li><Link to="/return-policy">Return Policy</Link></li>
          <li><Link to="/privacy-policy">Privacy Policy</Link></li>
          <li><Link to="/disclaimer">Disclaimer</Link></li>
          <li><Link to="/terms-of-use">Terms of Use</Link></li>
          <li><Link to="/buyers-policy">Buyers Policy</Link></li>
          <li><Link to="/sellers-policy">Sellers Policy</Link></li>
          <li><Link to="/anti-corruption-policy">Anti-corruption Policy</Link></li>
        </ul>
      </div>
      <div className="footer-section useful-links">
        <h2>Useful links</h2>
        <ul>
          <li><Link to="/articles">Articles</Link></li>
          <li><Link to="/brands">Brands</Link></li>
          <li><Link to="/catalogues">Catalogues</Link></li>
          <li><Link to="/car-makers">Car Makers</Link></li>
          <li><Link to="/sitemap">Sitemap</Link></li>
          <li><Link to="/sitemap2">Sitemap2</Link></li>
        </ul>
      </div>
    </footer>

      <div className="section social-media">
        <div className="social-icons">
          <SocialIcon
            url="https://linkedin.com/in/couetilc"
            className="social-icon"
          />
          <SocialIcon
            url="https://instagram.com/in/couetilc"
            className="social-icon"
          />
          <SocialIcon
            url="https://facebook.com/in/couetilc"
            className="social-icon"
          />
          <SocialIcon
            url="https://twitter.com/in/couetilc"
            className="social-icon"
          />
        </div>
      </div>
      <div className="footer-section copyright">
        <p>© 2015-2024 Smart Parts Online Pvt. Ltd. (v6.2.8 build 240202.13)</p>
      </div>
    </div>
  );
};

export default Footer;