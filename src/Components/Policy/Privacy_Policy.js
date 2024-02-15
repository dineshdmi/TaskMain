// PrivacyPolicy.js

import React from 'react';
import { FaHandPointRight } from "react-icons/fa";
import '../Policy/CSS/Privacy_Policy.css';

const PrivacyPolicy = () => {
  return (
    <div className="privacy-policy-container">
      <h1 className="section-title">Privacy Policy - boodmo</h1>
      <p>
        This Privacy Policy is effective as of January 01, 2021. This is our official Privacy Policy which forms part of your legal agreement with us. Please read our Privacy Policy carefully to be sure you understand how we collect and use information and under what circumstances we share information. By accessing the services provided by the site service boodmo.com (“Website”), You agree to the collection and use of your data by the site/service boodmo.com in the manner provided in this Privacy Policy. This Policy does not apply to the procedures and practices followed by entities that are not managed, owned or controlled by the Company and the site/service boodmo.com or to the people that are not engaged, employed or managed by the Company and the site/service boodmo.com. Our objective is to make you:
      </p>

      {/* Radio icon with point */}
      <div className="privacy-point">
        <FaHandPointRight className="check-icon" /> <p>Feel comfortable using our Websites;</p>
      </div>
      <div className="privacy-point">
        <FaHandPointRight className="check-icon" /> <p>Feel secure in submitting your information to us;</p>
      </div>
      <div className="privacy-point">
        <FaHandPointRight className="check-icon" /> <p>What Information do we Collect About You?</p>
      </div>
      {/* <div className="privacy-point">
        <FaHandPointRight className="check-icon" /> <p>We collect information from you when you sign up on the Website. When registering on the Website, you may be asked to enter your personal information (like your name, gender, age, language preferences, the location of residence, mobile number, etc)</p>
      </div>
      <div className="privacy-point">
        <FaHandPointRight className="check-icon" /> <p>We will automatically receive and collect certain anonymous information in standard usage logs through our Web server, including computer-identification information obtained from "cookies," sent to your browser from:</p>
      </div> */}
      <div className="privacy-point">
        <FaHandPointRight className="check-icon" /> <p>web server cookie stored on your hard drive</p>
      </div>
      <div className="privacy-point">
        <FaHandPointRight className="check-icon" /> <p>an IP address, assigned to the computer which you use;</p>
      </div>



      {/* Repeat the structure for other points */}

      <p>
        Copyright 2022 © All rights reserved. Last Modified - 03 March 2022
      </p>
    </div>
  );
};

export default PrivacyPolicy;
