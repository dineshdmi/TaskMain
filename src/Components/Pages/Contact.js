import React from 'react';
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';
import './CSS/Contact.css';

const ContactPage = () => {
  return (
    <>
    <div className="card">
      <h2>For Assistance</h2>
      <p>
        Please reach out to our customer support team, available every day from 10:00 AM to 7:00 PM. You can contact us through the Help & Support Form on our website and application.
      </p>
      
      <p>
        You can also use our IVR number: <strong>+91 114 1189222</strong>.
      </p>

      <div className="warning">
        <strong>!WARNING!</strong> Do not call any other number except mentioned above. Please note, boodmo never calls & asks for bank account details, UPI id, OTP, etc. from the customer. We urge you not to share such information with anyone. In case of any fraudulent transaction, immediately notify your bank.
      </div>

      <h3>Our Head Office Address</h3>
      <p>
        Smart Parts Online Pvt. Ltd.<br />
        AIHP Palms (Plot No. 242 & 243), Ground floor, Udyog Vihar Phase IV, Gurugram, Haryana-122015, India.
      </p>
    </div>
    <div className="container">
      <div className="contact-info">
        <h2>Help & Support</h2>
        <p>For any inquiries or assistance, please contact us:</p>

        <ul>
          <li><FaEnvelope /> your.email@example.com</li>
          <li><FaPhone /> +91 114 1189222</li>
          <li><FaMapMarkerAlt /> AIHP Palms (Plot No. 242 & 243), Ground floor, Udyog Vihar Phase IV, Gurugram, Haryana-122015, India.</li>
        </ul>
      </div>

      <div className="contact-form">
        <h2>Contact Us</h2>
        <form>
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" name="name" placeholder='Enter Name' required />

          <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" placeholder='Enter Email' required />

          <label htmlFor="questionType">Question Type:</label>
          <select id="questionType" name="questionType" required>
            <option value="comment">Comment</option>
            <option value="location">Location</option>
          </select>

          <label htmlFor="comment">Comment:</label>
            <textarea id="comment" name="comment" placeholder='Enter Message' required></textarea>

          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
      <div className="privacy-policy-container">
        <h1>Privacy Policy - boodmo</h1>
        <p>
          Effective Date: January 01, 2021
        </p>

        <p>
          Welcome to boodmo.com ("Website"). This Privacy Policy outlines how we collect,
          use, and safeguard your information. Please carefully read this Privacy Policy as
          it forms part of your legal agreement with us. Your use of the Website signifies
          your acceptance of this Privacy Policy.
        </p>

        <h2>1. Collection and Use of Information:</h2>
        <p>
          When you sign up on the Website, we collect personal information, including but
          not limited to your name, gender, age, language preferences, location of residence,
          and mobile number. We also automatically receive and collect anonymous information
          through standard usage logs, which may include:
        </p>

        <ul>
          <li>Web server cookies stored on your hard drive.</li>
          <li>IP address assigned to the computer you use.</li>
          <li>Domain server through which you access our service.</li>
          <li>Type of computer you're using.</li>
        </ul>

        <h2>2. Purpose of Collection:</h2>
        <p>
          We collect and use your information to:
        </p>

        <ul>
          <li>Enhance your experience on our Websites.</li>
          <li>Provide personalized services.</li>
          <li>Improve our services and products.</li>
          <li>Communicate with you about promotions, updates, and important notices.</li>
        </ul>

        <h2>3. Information Sharing:</h2>
        <p>
          We do not sell, trade, or otherwise transfer your personally identifiable information
          to third parties. However, we may share non-personally identifiable information for
          analytical and marketing purposes.
        </p>

        <h2>4. Data Security:</h2>
        <p>
          We implement security measures to protect your personal information. However, no
          method of transmission over the internet or electronic storage is 100% secure.
          Therefore, we cannot guarantee absolute security.
        </p>
      </div>
    </>
  );
};

export default ContactPage;
