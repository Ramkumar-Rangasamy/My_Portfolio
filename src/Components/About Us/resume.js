import React, { useEffect } from "react";

import './resume.css';
import resumeimage from './images/Resume.png';

//import Aos extra animations adding
import Aos from "aos"
import 'aos/dist/aos.css'

export function Resume(){
  useEffect(()=>{
    Aos.init();
   },[])
   
    return(
        <>
          <div className='resume-total' 
            data-aos="fade-right"
            data-aos-offset="300"
            data-aos-easing="ease-in-sine">
              
            <h1><span className='span-letter'>My</span>Resume</h1>
            <div className='resume-img'>
                <img src={resumeimage} className='col-12 col-lg-7 img-thumbnail resume-imgone' alt=''/>
            </div>
          </div>
        
        
        </>
    );

}
