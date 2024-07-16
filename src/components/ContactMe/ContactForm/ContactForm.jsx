import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import "./ContactForm.css";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    firstname: '',
    lastname: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const serviceID = 'service_6yyhsqj';
    const templateID = 'template_q5vdiwg';
    const userID = 'ksuLGbAftSJinyUej';

    emailjs.send(serviceID, templateID, formData, userID)
      .then((response) => {
        console.log('SUCCESS!', response.status, response.text);
        alert('Message sent successfully!');
      }, (err) => {
        console.log('FAILED...', err);
        alert('Failed to send message. Please try again later.');
      });

    // Clear form
    setFormData({
      firstname: '',
      lastname: '',
      email: '',
      message: ''
    });
  };

  return (
    <div className='contact-form-content'>
      <form onSubmit={handleSubmit}>
        <div className='name-container'>
          <input 
            type="text" 
            name="firstname" 
            placeholder='First Name' 
            value={formData.firstname} 
            onChange={handleChange}
            required
          />
          <input 
            type="text" 
            name="lastname" 
            placeholder='Last Name' 
            value={formData.lastname} 
            onChange={handleChange}
            required
          />
        </div>
        <input 
          type="email" 
          name='email' 
          placeholder='Email' 
          value={formData.email} 
          onChange={handleChange}
          required
        />
        <textarea 
          name="message" 
          placeholder='Message' 
          rows={3} 
          value={formData.message} 
          onChange={handleChange}
          required
        />
        <button type="submit">SEND</button>
      </form>
    </div>
  );
}

export default ContactForm;
