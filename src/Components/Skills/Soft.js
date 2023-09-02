import React from 'react'

import './Soft.css';
import creative from './soft-images/creative.jpg';
import flexibility from './soft-images/flexibility.png';
import teamwork from './soft-images/teamwork.jpg';
import confidence from './soft-images/confidence.webp';
import decision from './soft-images/decision making.avif';

export function Soft(){
  return (
    <>
        <div className="wrapper-soft">
          <div className="wap-soft">
            <div className="top_div mt-5">
                <h1><span className="span-letter">My</span>Soft skills</h1>
              
            </div>

            <div className="content-soft ">
              <div className='content-imag'>
                <img src={creative}  alt=""/>
                <div className='soft-para'>
                 <h2>Creative Thinking</h2>
                 <p >Creative thinking is the ability to come up with unique, original solutions. Also known as creative problem-solving, creative thinking is a valuable and marketable soft skill in a wide variety of careers</p>
                </div>
              </div>
              
            </div>
            <div className="content-soft ">
              <div className='content-imag'>
                <img src={flexibility}  alt=""/>
                <div className='soft-para'>
                 <h2>Flexibility</h2>
                 <p>Adapting successfully to changing situations & environments.Keeping calm in the face of difficulties.
                  Planning ahead, but having alternative options in case things go wrong.</p>
                </div>
              </div>
              
            </div>
            <div className="content-soft ">
              <div className='content-imag'>
                <img src={teamwork}  alt=""/>
                <div className='soft-para'>
                 <h2>Team Work</h2>
                 <p>Communication . Communication is the foundation of effective teamwork Time management Problem-solving.Listening.</p>
                </div>
              </div>
              
            </div>
            <div className="content-soft ">
              <div className='content-imag'>
                <img src={confidence}  alt=""/>
                <div className='soft-para'>
                 <h2>Confidence</h2>
                 <p>Remember that wherever your heart is, there you will find your treasure help you believe in myself</p>
                </div>
              </div>
              
            </div>
            <div className="content-soft ">
              <div className='content-imag'>
                <img src={decision}  alt=""/>
                <div className='soft-para'>
                 <h2>Decision Making</h2>
                 <p>It’s hard to think clearly under pressure, and sometimes your first idea isn’t always your best one.
                     Give yourself the chance to sit on a problem for a while so that you can process your options </p>
                </div>
              </div>
              
            </div>
          
           
          </div>
        </div>
        
    </>
  )
}

