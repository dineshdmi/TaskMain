// EnrollmentForm.js

import React, { useState } from 'react';
import './EnrollmentForm.css';
import { MdCancel } from "react-icons/md";

const EnrollmentForm = ({ onSubmit, onCancel }) => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        // You can perform form validation or other logic here before submitting
        onSubmit({ name, email });
    };

    return (
        <div className="enrollment-form-container">
            <div className="cancel-icon" onClick={onCancel}>
                <MdCancel/>
            </div>
            <form onSubmit={handleSubmit} className="enrollment-form">
                <h2>Enroll Now</h2>
                <label>
                    Name:
                    <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
                </label>
                <label>
                    Email:
                    <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                </label>
                <button type="submit">Submit</button>
            </form>
        </div>
    );
};

export default EnrollmentForm;
