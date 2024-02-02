import React from 'react'
import NavBar from '../NavBar/NavBar'
import img4 from '../../images1/image4.jpg';
import './Contact.css'
import Footer from '../../Footer/Footer';

export default function Contact() {
  return (
    <div className='contact-container'>
      <NavBar/>
      <div className="image-container">
        <img src={img4} className='img4' alt="" />
        <div className="images">
          <h1>Contact Us</h1>
        </div>
      </div>

      <div className="sendmessage">
        <h1>Send a message to us !</h1>
      </div>

      <div className="form">
      <form>
      <div class="form-group">
    <label for="exampleFormControlSelect1">Name</label>
    <select class="form-control" id="exampleFormControlSelect1">
    </select>
  </div>
  <div class="form-group">
    <label for="exampleFormControlInput1">Email address</label>
    <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com"/>
  </div>
  
  <div class="form-group">
    <label for="exampleFormControlSelect2">Subject</label>
    <textarea class="form-control" id="exampleFormControlTextarea1" ></textarea>
      
  
  </div>
  <div class="form-group">
    <label for="exampleFormControlTextarea1">Message</label>
    <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
  </div>
</form>
      </div>
      <button type="button" class="btn btn-outline-dark">Send Message</button>

      <Footer/>

    </div>
  )
}
