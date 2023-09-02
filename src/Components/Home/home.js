import React, {useState,useEffect } from "react";
// import home css file
import'./home.css';
// import Aos Animation
import Aos from "aos"
import 'aos/dist/aos.css'

import resume from './RamKumar Resume.pdf';
import {Resume} from '../About Us/resume'

// install launch Icon 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
//import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
// import icons
import {faGithub} from '@fortawesome/free-brands-svg-icons';
import {faLinkedin} from '@fortawesome/free-brands-svg-icons';
import {faFacebook}from '@fortawesome/free-brands-svg-icons';
import {faInstagram}from '@fortawesome/free-brands-svg-icons';



export function Home(){

   const [show,setShow]=useState(false);

   useEffect(()=>{ Aos.init();},[])
   
 return(
      <>
         <div class="home-main" id="home">
            <div className="home-dark">
               <div class="row no-gutters">
                  <div class="col-md-10 ">
                     <div class="card-body" data-aos="fade-right">
                       <h4 className="card-title"><span className="hello-span">Hello,</span> I am</h4>
                       <p className=" card-text head-name"data-aos="fade-up" data-aos-duration="3000">Ramkumar.R</p>
                       <p className=" card-text home-para">Certified Full Stack Developer</p>
                       <p className=" card-text home-para-depth">Certified Full Stack Developer Developed a number of software solutions using a variety of                     
                       coding languages and has practical knowledge of programming languages like HTML, SQL, and 
                       React js and Node js.
                       </p>
                        <div className="button-home">
                          <a href={resume} download="RamKumar Resume" target="-blank"><button type="button" className="btn btn-home ">Download CV</button></a>  
                           <button type="button"onClick={
                             ()=>setShow(!show)} 
                             className="btn btn-home">
                             {show ? "Hide":"Resume"}
                           </button>
                          {show && <Resume/>}
                        </div>
                     
                     </div>
                       
                     {/*  main profile future now not using that only command
                        <div className="profile-one-home col-md-4">
                          <img  src={img2} className=" profile-home "  alt="..."/>
                        </div>
                      */}

                     <div class="social-icons-container col-12">
                        <ul>
                           
                           <a href="https://github.com/Ramkumar-Rangasamy" target="-blank"> <li><FontAwesomeIcon icon={faGithub}/><span className="span1">Github</span></li></a>

                           <a href="https://www.linkedin.com/in/ramkumar-rrr1031m/" target="-blank"><li><FontAwesomeIcon icon={faLinkedin}/><span className="span2">Linkedin</span></li></a>
                           
                           <a href="https://www.facebook.com/profile.php?id=100022270248303&mibextid=D4KYlr" target="-blank"><li><FontAwesomeIcon icon={faFacebook}/><span  className="span3">Facebook</span></li></a> 

                           <a href="https://www.instagram.com/always_ramkumar/" target="-blank"><li><FontAwesomeIcon icon={faInstagram}/><span  className="span4">Instagram</span></li></a>

                        </ul>
                     </div>
                     
                  </div>
               </div>
            </div>  
         </div> 
      </>
 );
}




















