import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './CSS/Login.css';

const LoginSignup = () => {
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
    });
    const [isClicked, setIsClicked] = useState(false);
    const [isLoginMode, setIsLoginMode] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleContinue = () => {
        const { name, email, password } = formData;

        // Validate that required fields are filled
        if (!isLoginMode && !name) {
            alert('Please enter your name.');
            return;
        }

        if (!email) {
            alert('Please enter your email.');
            return;
        }

        if (!password) {
            alert('Please enter your password.');
            return;
        }

        // Log the values (you can replace this with your desired action)
        console.log('Name:', name);
        console.log('Email:', email);
        console.log('Password:', password);

        // Perform any other necessary actions
        setIsClicked(true);
        alert('Continue button clicked!');

        // Redirect to the about page
        navigate('/about');
    };

    const handleToggleMode = () => {
        setIsLoginMode((prevMode) => !prevMode);
    };

    return (
        <div className='loginsignup'>
            <div className='loginsignup-container'>
                <h1>{isLoginMode ? 'Login' : 'Sign Up'}</h1>
                <div className='loginsignup-fields'>
                    {!isLoginMode && (
                        <input
                            type='text'
                            placeholder='Your Name'
                            name='name'
                            value={formData.name}
                            onChange={handleChange}
                        />
                    )}
                    <input
                        type='email'
                        placeholder='Email Address'
                        name='email'
                        value={formData.email}
                        onChange={handleChange}
                    />
                    <input
                        type='password'
                        placeholder='Password'
                        name='password'
                        value={formData.password}
                        onChange={handleChange}
                    />
                </div>
                <button onClick={handleContinue}>
                    {isLoginMode ? 'Login' : 'Continue'}
                </button>
                {isClicked && (
                    <div className='tooltip'>
                        <p>{isLoginMode ? 'Login' : 'Continue'} button was clicked!</p>
                    </div>
                )}
                <p className='loginsignup-login' onClick={handleToggleMode}>
                    {isLoginMode
                        ? "Don't have an account? Sign Up here"
                        : 'Already have an account? Login here'}
                </p>
                <div className='loginsignup-agree'>
                    <input type='checkbox' name='' id='' />
                    <p>
                        By continuing, I agree to the terms of use & privacy policy.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default LoginSignup;
