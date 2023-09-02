import React from "react";
import './Navbar.css';

import {HashLink as Link} from'react-router-hash-link';

  export function Navbar(){
    return(
     <>
       <nav className="navbar navbar-expand-lg navbar-dark nav sticky-top">
          <a className="navbar-brand text-white" href="#"><span className="span-R pl-1 pr-1 ">RRR</span>Portfolio</a>
          <button className="navbar-toggler click-bn" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse nav-hero" id="navbarSupportedContent">
            <ul className="navbar-nav ml-auto mr-3">

              <li className="nav-item  active">
                <Link to={'#home'} scroll={el => el.scrollIntoView({ behavior: 'smooth', block: 'end' })} smooth  className="nav-link active nav-two">Home</Link>
              </li>

              <li className="nav-item  active">
                <Link to={'#about'}   smooth   className="nav-link active nav-two">About Me</Link>
              </li>
                    
              <li className="nav-item active">
                <Link to={'#skill'} smooth className="nav-link active nav-two">Skills</Link>
              </li>

              <li className="nav-item active"> 
                <Link to={'#project'} smooth className="nav-link active nav-two">Project</Link>
              </li>

              <li className="nav-item active">
                <Link to={'#certificate'} smooth className="nav-link active nav-two">Certificates</Link>
              </li>

              <li className="nav-item active">
              <Link to={'#contact'} scroll={el => el.scrollIntoView({ behavior: 'smooth', block: 'center' })}  smooth className="nav-link active nav-two">Contact Us</Link>
              </li> 

            </ul>          
            
          </div>
       </nav>    
     </>
    );
  }