import React from 'react';
//app application css
import './App.css';

//install Bootstrap  after install and import area 
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle.js';

//import in all page here
import { Navbar } from './Components/Navbar/Navbar';
import { Home } from './Components/Home/home';
import { Abouts } from './Components/About Us/Abouts';
import { Eduction } from './Components/About Us/Eduction';
import { Skills } from './Components/Skills/Skills';
import { Certificate } from './Components/Certificates/Certificate';
import { Project } from './Components/Project/Project';
import { Contact } from './Components/Contact/Contact';
import {Footer} from './Components/Navbar/Footer';

//The react-router-dom package contains bindings for using React Router in web applications.
import { BrowserRouter,Routes,Route} from 'react-router-dom';

function App() {
 

  return (
    <>
      <BrowserRouter>      
        <Navbar/>
          <Routes>
            <Route path='/' element={[<Home/>,<Abouts/>,<Eduction/>,<Skills/>,<Project/>,<Certificate/>,<Contact/>]}/>
          </Routes> 
        <Footer/> 
      </BrowserRouter>
    </>
  );
}

export default App;
