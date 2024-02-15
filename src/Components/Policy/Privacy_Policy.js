// PrivacyPolicy.js

import React from 'react';
import './CSS/Privacy_Policy.css';
import { FaHandPointRight } from "react-icons/fa";

const PolicySection = ({ title, content }) => {
  return (
    <div className="privacy-policy-section">
      <h2>{title}</h2>
      <div className="privacy-policy-content">
        {content}
      </div>
      <hr className="privacy-policy-divider" />
    </div>
  );
};

const PrivacyPolicy = () => {
  return (
    <div className="privacy-policy-container">
      <h1 className="privacy-policy-title">Privacy Policy - boodmo</h1>
      <div className="privacy-policy-content">
        <PolicySection
          title=""
          content={
            <>
              <p>
                This Privacy Policy is effective as of January 01, 2021. This is our official Privacy Policy which forms part of your legal agreement with us. Please read our Privacy Policy carefully to be sure you understand how we collect and use information and under what circumstances we share information. By accessing the services provided by the site service boodmo.com (“Website”), You agree to the collection and use of your data by the site/service boodmo.com in the manner provided in this Privacy Policy.
              </p>
              <div className="privacy-point">
                <FaHandPointRight className="check-icon" /> <p>Feel comfortable using our Websites;</p>
              </div>
              <div className="privacy-point">
                <FaHandPointRight className="check-icon" /> <p>Feel secure in submitting your information to us;</p>
              </div>
              <div className="privacy-point">
                <FaHandPointRight className="check-icon" /> <p>What Information do we Collect About You?</p>
              </div>
              <div className="privacy-point">
                <FaHandPointRight className="check-icon" /> <p>web server cookie stored on your hard drive</p>
              </div>
              <div className="privacy-point">
                <FaHandPointRight className="check-icon" /> <p>an IP address, assigned to the computer which you use;</p>
              </div>
              <div className="privacy-point">
                <FaHandPointRight className="check-icon" /> <p>the domain server through which you access our service;</p>
              </div>
              <div className="privacy-point">
                <FaHandPointRight className="check-icon" /> <p>the type of computer you're using.</p>
              </div>
            </>
          }
        />

        <PolicySection
          title="We may also collect Information from the Links you click on our Platform and the number of times you access the page."
          content={
            <>
              <p>
                <strong>01.</strong>If you purchase a product or service from us, we request certain personally identifiable information from you on our order form. You must provide contact information (such as name, email, and shipping address) and financial information (such as credit card number, expiration date, CVV verification, Name on card, billing address etc.). We use this information for billing purposes and to process your orders. If we have trouble processing an order, we will use this information to contact you.
              </p>
              <p>
                <strong>02.</strong>We will collect personally identifiable information about you only as part of a voluntary registration process, on-line survey, or contest or any combination thereof.
              </p>
              <p>
                <strong>03.</strong>Our advertisers may collect anonymous traffic information from their own assigned cookies to your browser.
              </p>
              <p>
                <strong>04.</strong>The Site contains links to other websites. We are not responsible for the privacy practices of such websites which we do not own, manage or control.
              </p>
              <p>
                <strong>05.</strong>We make chat rooms, forums, instant messenger and message boards and other services available to you. Please understand that any information that is disclosed in these areas becomes public information. We have no control over its use and you should exercise caution when disclosing your personal information to anyone.
              </p>
              <p>
                <strong>06.</strong>If you use a bulletin board or chat room on this site, you should be aware that any personally identifiable information you submit there can be read, collected, or used by other users of these forums, and could be used to send you unsolicited messages. We are not responsible for the personally identifiable information you choose to submit in these forums.
              </p>
              <p style={{
                marginLeft:'40px',
                fontWeight:'700'

              }}>
              We are the sole owners of your information collected by us at several different points on our Website. Please note that the above-listed information collected by us may be stored in our database for future reference.</p>
            </>
          }
        />

        <PolicySection
          title="How do We Use this Information?"
          content={
            <>
              
            </>
          }
        />

        {/* Continue with the rest of your Privacy Policy content */}

      </div>
      <hr className="privacy-policy-section-border" />
      <p style={{
        justifyContent: 'center',
        textAlign: 'center'
      }}>
        Copyright 2022 © All rights reserved. Last Modified - 03 March 2022
      </p>
    </div>
  );
};

export default PrivacyPolicy;
