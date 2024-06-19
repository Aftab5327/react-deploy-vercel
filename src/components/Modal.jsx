import React, { useState } from 'react';
import '../styles/Modal.css';
import { MdOutlineClose } from "react-icons/md";

export const Modal = ({ message, onClose }) => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    address: '',
    message: message,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState, 
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('https://formspree.io/f/xyyroond', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });
      if (response.ok) {
        console.log('Form submitted successfully');
        onClose();
      } else {
        console.error('Form submission error');
      }
    } catch (error) {
      console.error('Form submission error', error);
    }
  };

  return (
    <div className='modalBackground'>
      <div className='formContain'>
        <form className='formContainer1' onSubmit={handleSubmit}>
          <div className="closeDiv">
            <h3>Get In Touch</h3>
            <MdOutlineClose onClick={onClose} size={30} id='closeButton' />
          </div>
          <div className="contactInfo">
            <input type='text' placeholder='First Name...' name='firstName' value={formData.firstName} onChange={handleChange} />
            <input type='text' placeholder='Last Name...' name='lastName' value={formData.lastName} onChange={handleChange} />
            <input type='email' placeholder='Email...' name='email' value={formData.email} onChange={handleChange} />
            <input type='number' placeholder='Phone...' name='phone' value={formData.phone} onChange={handleChange} />
          </div>
          <div className="addressInfo">
            <input type='text' placeholder='Address' name='address' value={formData.address} onChange={handleChange} />
            <textarea name='message' placeholder='Type your message here' value={formData.message} onChange={handleChange} />
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
};
