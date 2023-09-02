import React, { useRef } from 'react';
 //We using in email import him 
 import emailjs from '@emailjs/browser';
import './contact.css';

// install launch Icon 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faLocationDot} from '@fortawesome/free-solid-svg-icons';
import {faEnvelope} from '@fortawesome/free-solid-svg-icons';
import {faPhone} from '@fortawesome/free-solid-svg-icons';


export function Contact(){

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_wxfz38e', 'template_lizdh2b', form.current, 'njq464uK-8ibZWYlS')
      .then((result) => {
          console.log(result.text);
          e.target.reset();
          alert("Message Sent! Thank you for contacting us");
      }, (error) => {
          console.log(error.text);
          alert("Something went wrong! Please try again.");
      });
  };
 
    return(
        <>
          <div className="contact-main" id='contact'>
          
            {/* <div class="alert-success" id='succss' >
              <span>Message Sent! Thank you for contacting us.</span>
            </div>
            <div class="alert-error" id='error'>
              <span>Something went wrong! Please try again.</span>
            </div> */}
    
            <div class="contact-section">
                
              <div class="contact-info">
                <div className="contact-icon">
                 <p><FontAwesomeIcon icon={faLocationDot} className="icons"/>
                  Coimbatore, Tamil Nadu-641 302</p>
                </div>
                <div className="contact-icon">
                  <p><FontAwesomeIcon icon={faEnvelope}  className="icons"/>
                  ramkumar.rangaraj7@gmail.com</p>
                </div>
                <div className="contact-icon">
                  <p><FontAwesomeIcon icon={faEnvelope}  className="icons"/>
                   always.ramkumar7@gmail.com</p>
                </div>
                <div className="contact-icon">
                  <p><FontAwesomeIcon icon={faPhone} className="icons"/>
                  +91 9944 897 180</p>
                  </div>
               
                {/* <div className="contact-icon">
                  <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d62587.03773662375!2d77.0729119!3d11.3573487!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba8e6d67a1f75bd%3A0xb96be759ce02283b!2sKallakarai%2C%20Tamil%20Nadu%20641302!5e0!3m2!1sen!2sin!4v1691837316709!5m2!1sen!2sin" width="350" height="250" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                </div> */}
              
              

              </div>

              <div class="contact-form">
                <h2>Contact Us</h2>
                <form className="contact" ref={form}  onSubmit={sendEmail}>

                  <input type="text" name="your_name" id="name" className="text-box" placeholder="Your Name" required/>
                  <input type="email" name="client_email" id="email" className="text-box" placeholder="Your Email" required/>
                  <textarea name="message"  id="message" rows="5" placeholder="Your Message" required></textarea>
                  
                  <button type="submit"  className="btn send-btn ">Send</button>
                  
                </form>
              </div>
            </div>
   
          </div>
        </>
    );
}




 


