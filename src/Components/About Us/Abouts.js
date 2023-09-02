import React, { useEffect} from "react";

//about css file import 
import './about.css';

//import Aos extra animations adding
import Aos from "aos"
import 'aos/dist/aos.css'


//school and college image
import mainimage from './images/IMG_20220614_1948386.jpg';


//scroll using in hashlink 
import {HashLink} from'react-router-hash-link';




export function Abouts(){
  useEffect(()=>{
    Aos.init();
   },[])
  
    return(
     <>
        <div id="about">
          <div className='about-color'>

            <div className="about-img" data-aos="fade-up">

              <div className="about-content">
                <h1>ABOUT ME</h1>
                <p>A Brand That Meets All Your Needs</p>
              </div>
                
            </div>
            
          </div>  

          <div className="container-fluid about-color-one">
            <div className='about-division row pt-3'>

              <div className='images-main col-lg-4 ' data-aos="fade-dwon">
                <img src={mainimage} className='about-image img-thumbnail  '/>
              </div>

              <div className='about-text card-title col-lg-8' data-aos="fade-up">

                <h2 className='text-center'>About Myself</h2>
                <p className="para-into" data-aos="fade-up" >I am Ramkumar, and I live in Coimbatore. I have a 
                  B.Sc. in information technology, and I have worked on an e-commerce project. My technical skills 
                  include HTML, CSS, JavaScript, Java,React JS,and Node js and my soft skills include sharp 
                  observation, well-executed decision-making, creative thinking, and dedication. I consider myself 
                  to be self-motivated, hard-working, and disciplined. I aim to work for a company that aids in my 
                  career excellence.
                </p>

                <div className="para-into">
                 <h2>You Like My Profile Click This Button</h2>
                  <div className="about-button">
                  <HashLink to='/#contact' smooth ><button type="button" className="btn btn-about">Hire Me</button></HashLink>
                  </div>
                </div>
    
              </div> 
            </div>
          </div>
        </div>
     </>
    )
}














