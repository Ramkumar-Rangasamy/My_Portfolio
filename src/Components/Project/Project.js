import React, { useEffect} from "react";

import './project.css';
import Orgnic from './assets/Organic-food.jpg';
import Coffee from './assets/coffeeshop.jpg';
import Calculator from './assets/calculator.jpg';
import Mobile from './assets/mobile apps.jpg';
import Bike from './assets/Bike.jpg'
import Payanam from './assets/payanam.jpg';


import Aos from "aos"
import 'aos/dist/aos.css'

export function Project(){

  
  useEffect(()=>{
    Aos.init();
   },[])
 
  return (
    
    <>
        <div className="project" id="project">

         <h1 className="pt-4"><span className='span-letter'>My</span>Projects</h1>  
          <div className="project-Body">
       
            <div className="project-one">

                  {/* Organic page */}
               
                  <div className="project-two" data-aos="flip-left">
                    <div className="imgBox-one">
                      <h3 className='head-three pb-2'>Organic Farming</h3>
                      
                        <img src={Orgnic} className='imag-project'/>
                    </div>

                    <div className="project-content">
                      <h2>HTML/CSS</h2>
                      <p>New Concepts and Approaches in Organic Farming and supporting agriculture</p>
                      <a href="https://organic-farming-website-ramkumar.netlify.app/" target="-blank" ><button type="button" className="btn button-one">Live</button></a>
                      <a href="https://github.com/Ramkumar-Rangasamy/Organic.git" target="-blank" ><button type="button" className="btn button-one">Code</button></a>
                    </div>
                  </div>
                  
                  {/* Coffee Shop page */}
                  <div className="project-two" data-aos="flip-left">
                    <div className="imgBox-one">
                      <h3 className='head-three pb-2'>Coffee Shop </h3>
                      
                        <img src={Coffee} className='imag-project'/>
                    </div>
                    
                    <div className="project-content">
                      <h2>Javascript</h2>
                      <p>Good Day Start With A Good Coffee or a comfortable and hospitable setting</p>
                      <a href="https://coffee-shop-site-ramkumar.netlify.app/" target="-blank" ><button type="button" className="btn button-one">Live</button></a>
                      <a href="https://github.com/Ramkumar-Rangasamy/Coffee-shop.git" target="-blank" ><button type="button" className="btn button-one">Code</button></a>
                    </div>
                  </div>


                  {/* react project */}
                  <div className="project-two"  data-aos="flip-left">
                    <div className="imgBox-one">
                      <h3 className='head-three pb-2'>Calculator</h3>
                      
                        <img src={Calculator} className='imag-project'/>
                    </div>
                   
                    <div className="project-content">
                      <h2>Using ReactJS</h2>
                      <p>mathematical tasks and play a significant role in various fields where you can Using</p>
                      <a href="https://calculator-app-react-ramkumar.netlify.app/" target="-blank" ><button type="button" className="btn button-one">Live</button></a>
                      <a href="https://github.com/Ramkumar-Rangasamy/Calculator-project.git" target="-blank" ><button type="button" className="btn button-one">Code</button></a>
                    </div>
                  </div>
                    {/* react project */}
                    <div className="project-two" data-aos="flip-left">
                    <div className="imgBox-one">
                      <h3 className='head-three pb-2'>Mobile Apps</h3>
                      
                        <img src={Mobile} className='imag-project'/>
                    </div>

                    <div className="project-content" >
                      <h2>Javascript</h2>
                      <p>This is simple mobile apps in all device using tools in html,css and Javascript.</p>
                      <a href="https://mobile-apps-ramkumar-9944.netlify.app/" target="-blank" ><button type="button" className="btn button-one">Live</button></a>
                      <a href="https://github.com/Ramkumar-Rangasamy/Mobile-app-javascript" target="-blank" ><button type="button" className="btn button-one">Code</button></a>
                    </div>
                  </div>
                  
                    {/* react project */}
                    <div className="project-two" data-aos="flip-left" >
                    <div className="imgBox-one">
                      <h3 className='head-three pb-2'>Bike Service </h3>
                      
                        <img src={Bike} className='imag-project'/>
                    </div>

                    <div className="project-content" >
                      <h2>ReactJs/NodeJs</h2>
                      <p>Featured Project Ongoing Creating own way on app using in react and node js</p>
                      <a href="#" target="-blank" ><button type="button" className="btn button-one">Live</button></a>
                      <a href="https://github.com/Ramkumar-Rangasamy/Cartrabbit-Task" target="-blank" ><button type="button" className="btn button-one">Code</button></a>
                    </div>
                  </div>

                  
                  {/* Node js project page */}
                  <div className="project-two" data-aos="flip-left">
                    <div className="imgBox-one">
                      <h3 className='head-three pb-2'>PayanamTravel</h3>
                      <img src={Payanam} className='imag-project'/>
                    </div>

                    <div className="project-content">
                      <h2>ReactJs/NodeJs</h2>
                      <p>Featured Project Ongoing Creating a user-friendly app using in react and nodejs</p>
                      <a href="#" target="-blank" ><button type="button" className="btn button-one">Live</button></a>
                      <a href="#" target="-blank" ><button type="button" className="btn button-one">Code</button></a>
                    </div>
                  </div>

                
              





             



              

            
            </div>
        </div>
       </div>
    </>
  );
}
































