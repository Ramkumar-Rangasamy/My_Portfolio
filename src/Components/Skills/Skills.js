import React from "react";
import './skills.css';



import html from './images/html.png';
import css from './images/css.png';
import js from './images/javascript.png';
import react from './images/reactjs.gif';
import node from './images/node.jpg';
import jas from './images/java.png';
import sp from './images/sp.png';
import sql from './images/slq.png';
import { Soft } from "./Soft";

export function Skills(){
    
    return(
        <>
        <div className="wrapper" id="skill">
          <div className="wap">
          <div className="top_div mt-5">
                <h1><span className="span-letter">My</span>Technical skills</h1>
              
            </div>
            <div className="content-five html">
                 <img src={html}  alt=""/>
                 <h2>HTML5</h2>
                 <p>HyperText Markup Language</p>
                 <span className="h2">90%</span>
            </div>
            <div className="content-five css">
                 <img src={css}  alt=""/>
                 <h2>CSS3</h2>
                 <p>Cascading Style Sheets</p>
                 <span className="h2">85%</span>
            </div>
           
            <div className="content-five">
                 <img src={js}  alt=""/>
                 <h2>JavaScript</h2>
                 <p>Generate Dynamic Web Page </p>
                 <span className="h2">75%</span>
            </div>
            <div className="content-five">
                 <img src={react}  alt=""/>
                 <h2>ReactJS</h2>
                 <p>Library and Build Single-page Applications</p>
                 <span className="h2">65%</span>
            </div>
            <div className="content-five">
                 <img src={node}  alt=""/>
                 <h2>Node js</h2>
                 <p>Create Server-side Web Applications</p>
                 <span className="h2">60%</span>
            </div>
            <div className="content-five">
                 <img src={jas}  alt=""/>
                 <h2>CoreJava</h2>
                 <p>Java Programming Language</p>
                 <span className="h2">75%</span>
            </div>
            <div className="content-five">
                 <img src={sp}  alt=""/>
                 <h2>SpringBoot</h2>
                 <p>Backend Framework</p>
                 <span className="h2">60%</span>
            </div>
            <div className="content-five">
                 <img src={sql}  alt=""/>
                 <h2>MySQL</h2>
                 <p>DataBase</p>
                 <div>
                    <span className="h2">75%</span>
                 </div>
            </div>
          </div>
        </div>
        <Soft/>
        </>
    );
}