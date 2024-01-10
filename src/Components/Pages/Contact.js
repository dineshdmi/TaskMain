// ContactUs.js
import React from 'react';

const ContactUs = () => {
  return (
    <div
      style={{
        textAlign: 'center',
        padding: '20px',
      }}
      className='contact-us-container'
    >
      <h2>Contact Us</h2>
      <form
        style={{
          display: 'flex',
          flexDirection: 'column',
          maxWidth: '400px',
          margin: '0 auto',
          borderRadius: '10px', // Added border radius to the form
          border: '1px solid #ddd', // Added border to the form
          padding: '20px', // Added padding to the form
        }}
      >
        <label
          style={{
            marginBottom: '8px',
          }}
          htmlFor='name'
        >
          Name:
        </label>
        <input
          style={{
            padding: '8px',
            marginBottom: '16px',
            width: '100%',
            boxSizing: 'border-box',
            borderRadius: '5px', // Added border radius to the input
          }}
          type='text'
          id='name'
          name='name'
          required
        />

        <label
          style={{
            marginBottom: '8px',
          }}
          htmlFor='email'
        >
          Email:
        </label>
        <input
          style={{
            padding: '8px',
            marginBottom: '16px',
            width: '100%',
            boxSizing: 'border-box',
            borderRadius: '5px', // Added border radius to the input
          }}
          type='email'
          id='email'
          name='email'
          required
        />

        <label
          style={{
            marginBottom: '8px',
          }}
          htmlFor='message'
        >
          Message:
        </label>
        <textarea
          style={{
            padding: '8px',
            marginBottom: '16px',
            width: '100%',
            boxSizing: 'border-box',
            borderRadius: '5px', // Added border radius to the textarea
          }}
          id='message'
          name='message'
          rows='4'
          required
        ></textarea>

        <button
          style={{
            backgroundColor: '#4CAF50',
            color: 'white',
            padding: '10px',
            border: 'none',
            borderRadius: '5px', // Added border radius to the button
            cursor: 'pointer',
          }}
          type='submit'
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default ContactUs;
