import React, { useEffect } from "react";
  //import css file
import './eduction.css';
  //import images
import cms from './images/cms.webp';
import  mmegone from './images/mmeg-2.jpg';

  //import Aos animation liabrarys and css file 
import Aos from "aos"
import 'aos/dist/aos.css'

export function Eduction(){

  useEffect(()=>{
    Aos.init();
   },[])

    return(
        <>
          <div className="Eduction-total"> 
            <div className='p-2'>

             <h2 className='text-center pt-3' data-aos="fade-up">Education_Details</h2>
              <div className="row no-gutters mt-5 Eduction-first " data-aos="fade-up">
                <div className="col-lg-4 col-md-5">
                  <img src={cms}  className="Eduction-img   col-lg-12"  alt="college_profile"/>
                </div>

                <div className="col-lg-8 col-md-7" data-aos="fade-up">
                  <div className='card-body pt-5'>
                    <h4 className="card-title">BSC-Bachelor of Science in information technology</h4>
                    <p className='para-into' >Field of Study : Information Technology <br/>
                    CMS College of Science & Commerce  in Coimbatore <br/>
                    2018-2021<br/>
                    Percentage : 70% </p>
                    <hr/>
                  </div>
                </div>  
              </div>

              <div className="row no-gutters mt-5 Eduction-first" data-aos="fade-up">
                <div className="col-lg-4 col-md-5">
                  <img src={mmegone}  className="Eduction-img col-lg-12" alt="college_profile"/>
                </div>

                <div className="col-lg-8 col-md-7" data-aos="fade-up">
                  <div className='card-body pt-5'>
                    <h4 className="card-title">HSC - Higher Secondary School</h4>
                    <p className='para-into'>Field of Study : Arts & Computer <br/> Maharishi Eswaraya Gurukulam Matriculation Higher 
                     Secondary School <br/> 2016-2018<br/>Percentage : 64% 
                    </p>
                    <hr/>
                  </div>
                </div>  
              </div>


              <div className="row no-gutters mt-5  Eduction-first " data-aos="fade-up">
                <div className="col-lg-4 col-md-5">
                  <img src={mmegone}  className="Eduction-img  col-lg-12" alt="college_profile"/>
                </div>

                <div className="col-lg-8 col-md-7" data-aos="fade-up">
                  <div className='card-body pt-5'>
                    <h4 className="card-title">SSLC - Secondary School Leaving Certificate</h4>
                    <p className='para-into'>Field of Study : General Education <br/> Maharishi Eswaraya Gurukulam Matriculation Higher 
                      Secondary School in Punjai Puliyampatti<br/> 2016 <br/>Percentage : 60% 
                    </p>
                    <hr/>
                  </div>
                </div>  
              </div>

            </div>

          </div>
        </>
    );
}


