import React from 'react'

import './footer.css';

// install launch Icon 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
//import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
// import icons
// import {faRegistered} from '@fortawesome/free-regular-svg-icons';    
import {faGithub} from '@fortawesome/free-brands-svg-icons';
import {faLinkedin} from '@fortawesome/free-brands-svg-icons';
import {faFacebook}from '@fortawesome/free-brands-svg-icons';
import {faInstagram}from '@fortawesome/free-brands-svg-icons';

export function Footer(){

    //current year only showing changing automatically
    const year= new Date();

  return (
    <>
        <footer className="footer">  
             
            <div className='footer-col'>
              
                <h2> Creative Design & Development</h2>
            </div>
            <div className='footer-col'>
               <p>Everybody's a web designer until, you know, they actually try to do it.</p>
            </div>
            <div class="footer-col">
                    <h4>follow us</h4>
                        <div className="social-links">
                            <a href="https://github.com/Ramkumar-Rangasamy" target="-blank"><FontAwesomeIcon icon={faGithub}/></a>
                            <a href="https://www.linkedin.com/in/ramkumar-rrr1031m/" target="-blank"><FontAwesomeIcon icon={faLinkedin}/></a>
                            <a href="https://www.facebook.com/profile.php?id=100022270248303&mibextid=D4KYlr" target="-blank"><FontAwesomeIcon icon={faFacebook}/></a>
                            <a href="https://www.instagram.com/always_ramkumar/" target="-blank"><FontAwesomeIcon icon={faInstagram}/></a>
                        </div>
            </div>

            <div className='footer-col'>
                <p>Copyright &copy; 2023 - {year.getFullYear()} Portfolio, All rights reserved .</p>
                <p>Powered by Ramkumar R .</p>
            </div>

        </footer>
    </>
  )
}
