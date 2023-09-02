import React, { useEffect} from "react";
import './certificate.css';

import Aos from "aos"
import 'aos/dist/aos.css'


import Tech from './images/Tech Foundation for Web Development_page-0001.jpg';
import javascript from './images/Programming with JavaScript_page-0001.jpg';
import Front from './images/Meta Meta Front-End Developer Specialization_page-0001.jpg';
import Reacjs from './images/Advanced React_page-0001.jpg';
import corejava from './images/Core Java Specialization_pages-to-jpg-0001.jpg';
import Versioncontrol from './images/Version Control_page-0001.jpg';
import Backend from './images/Introduction to Back-End Development_page-0001.jpg';
import Springboot from './images/Spring Framework Specialization._page-0001.jpg'
import Data from './images/datatabse_page-0001.jpg';

export function Certificate() {
   useEffect(()=>{
    Aos.init();
   },[])

    return(
      <>
         <div className="division" id="certificate">
          <h1 className="p-3 "><span className="span-letter">My</span>Certification</h1>  
       
            <div className="pageBody">
         
               <div className="container-one">
               
                  <div className="card-two" data-aos="zoom-in">
                     <div className="imgBox">
                     <img src={Tech}  className="imag-two img-thumbnail" />
                     </div>
                     <div className="content">
                        <h2>Tech Foundation</h2>
                        <p>Tech Foundation for Web Development from KGiSL / MicroCollege</p>
                        <a href="https://www.coursera.org/account/accomplishments/certificate/TZ8XSV2JGJDU" target="-blank"><button className="btn btn-home">View</button></a>
                     </div>
                  </div>

                  <div className="card-two"data-aos="zoom-in-up">
                     <div className="imgBox">
                          <img src={javascript}  className="imag-two img-thumbnail"/>
                     </div>
                     <div className="content">
                        <h2>JavaScript</h2>
                        <p>Programming with JavaScript from Meta </p>
                        <a href="https://www.coursera.org/account/accomplishments/certificate/YBWKURNNU99K" target="-blank"><button className="btn btn-home">View</button></a>
                     </div>
                  </div>

                  <div className="card-two" data-aos="zoom-in-down">
                     <div className="imgBox">
                       <img src={Front}  className="imag-two img-thumbnail"/>
                     </div>
                     <div className="content">
                        <h2>Front-End Developer</h2>
                        <p>Meta Front-End Developer Specialization from Meta</p>
                        <a href="https://www.coursera.org/account/accomplishments/specialization/certificate/94QNAUFWX49F" target="-blank"><button className="btn btn-home">View</button></a>
                     </div>
                  </div>

                  <div className="card-two"data-aos="zoom-in">
                     <div className="imgBox">
                        <img src={Reacjs}  className="imag-two  img-thumbnail"/>
                     </div>
                     <div className="content">
                        <h2>Advanced React</h2>
                        <p>Advanced React from Meta</p>
                        <a href="https://www.coursera.org/account/accomplishments/certificate/WNL5WFQ9WK79" target="-blank"><button className="btn btn-home">View</button></a>
                     </div>
                  </div>

                  <div className="card-two" data-aos="zoom-in-up" >
                     <div className="imgBox">
                       <img src={corejava}  className="imag-two img-thumbnail"/> 
                     </div>
                     <div className="content">
                        <h2>Core Java</h2>
                        <p>Core Java Specialization from LearnQuest</p>
                        <a href="https://www.coursera.org/account/accomplishments/specialization/certificate/95FRMSP4Y4DR" target="-blank"><button className="btn btn-home">View</button></a>
                     </div>
                  </div>

                  <div className="card-two" data-aos="zoom-in-down">
                     <div className="imgBox">
                        <img src={Versioncontrol}  className="imag-two img-thumbnail"/>
                     </div>
                     <div className="content">
                        <h2>Version Control</h2>
                        <p>Version Control from Meta</p>
                        <a href="https://www.coursera.org/account/accomplishments/certificate/45TPHVN35K4H" target="-blank"><button className="btn btn-home">View</button></a>
                     </div>
                  </div>

                  <div className="card-two" data-aos="zoom-in">
                     <div className="imgBox">
                        <img src={Backend}  className="imag-two img-thumbnail"/>
                     </div>
                     <div className="content">
                        <h2>Back-End</h2>
                        <p>Introduction to Back-End Development from Meta</p>
                        <a href="https://www.coursera.org/account/accomplishments/certificate/R3UJJH99NEZR" target="-blank"><button className="btn btn-home">View</button></a>
                     </div>
                  </div>

                  <div className="card-two" data-aos="zoom-in-up">
                     <div className="imgBox">
                        <img src={Springboot}  className="imag-two  img-thumbnail"/>
                     </div>
                     <div className="content">
                        <h2>Spring Boot</h2>
                        <p>Spring Framework Specialization from LearnQuest</p>
                        <a href="https://www.coursera.org/account/accomplishments/specialization/certificate/DNECCNJAFDJ5" target="-blank"><button className="btn btn-home">View</button></a>
                     </div>
                  </div>

                  <div className="card-two" data-aos="zoom-in-down">
                     <div className="imgBox">
                        <img src={Data}  className="imag-two  img-thumbnail"/>
                     </div>
                     <div className="content">
                        <h2>MySQL</h2>
                        <p>Database Structures and Management with MySQL from Meta</p>
                        <a href="https://www.coursera.org/account/accomplishments/certificate/Z2GU499RQ2G8" target="-blank"><button className="btn btn-home">View</button></a>
                     </div>
                  </div>
                  
               </div>
            </div>
         </div>
      </>
    );
}