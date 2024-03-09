import React, { useState, useEffect } from 'react';
import NavBar from '../NavBar/NavBar';
import img4 from '../../images1/image4.jpg';
import './Contact.css';
import Footer from '../../Footer/Footer';

export default function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    // Fetch messages from the backend when the component mounts
    fetch('http://localhost:8080/api/v1/message/get')
      .then((response) => response.json())
      .then((data) => {
        setMessages(data);
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    // Send the form data to the backend
    fetch('http://localhost:8080/api/v1/message/post',
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ name, email, subject, message }),
    })
    
    
      .then((response) => response.json())
      .then((data) => {
        console.log('Message sent:', data);
        
        // Reset the form fields
        setName('');
        setEmail('');
        setSubject('');
        setMessage('');
        // Fetch updated messages from the backend
        
          })
          .catch((error) => {
            console.error('Error:', error);
          });
      
     
  };

  return (
    <div className="contact-container">
      <NavBar />
      <div className="image-container">
        <img src={img4} className="img4" alt="" />
        <div className="images">
          <h1>Contact Us</h1>
          <p>Leave a message to us. We will plan your journey.</p>
        </div>
      </div>

      <div className="sendmessage">
        <h1>Send a message to us !</h1>
      </div>

      <div className="form">
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input type="text" className="form-control" id="name" value={name} onChange={(e) => setName(e.target.value)} />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email address</label>
            <input type="email" className="form-control" id="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="name@example.com" />
          </div>
          <div className="form-group">
            <label htmlFor="subject">Subject</label>
            <textarea className="form-control" id="subject" value={subject} onChange={(e) => setSubject(e.target.value)}></textarea>
          </div>
          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea className="form-control" id="message" rows="3" value={message} onChange={(e) => setMessage(e.target.value)}></textarea>
          </div>
          <button type="submit" className="btn btn-outline-dark">Send Message</button>
        </form>
      </div>

      <div className="message-list">
        <h2>Messages</h2>
        {messages.map((msg, index) => (
          <div key={index} className="message-box">
            <table className='ul'>
            <tr><strong>Name:</strong> {msg.name}</tr>
            <tr><strong>Message:</strong> {msg.message}</tr>
            </table>
          </div>
        ))}
      </div>

      <Footer />
    </div>
  );
}
