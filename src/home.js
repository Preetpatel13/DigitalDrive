import { DistributeVertical } from "react-bootstrap-icons";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "./Navbar1.jsx";
import NavDropdown from "react-bootstrap/NavDropdown";
import * as Icon from "react-bootstrap-icons";
import logo1 from './logo1.png';
import React from "react";
import Preet1 from './preet1.js';
import Contact from "./contact";
import up_file  from  './logos/up_file.png';
import up_folder from  './logos/up_folder.png';
import up_vedio from  './logos/up_vedio.png';
import shared_me from './logos/shared_me.png';
import Footer from './footer'
import Ourteam from './ourteam';
import  { useState } from 'react';
//import FileUpload from './fileupload.js';
import Sidebar from './sidebar';
import './sidebar.css'


//import { ExpandMore} from '@mui/icons-material';
import '../src/home.css';
import Navbar1 from "./Navbar1";
import Login from "./login";
import File from './fileupload'
import App1 from "./uploaded";

function BasicExample() {
  

  return (

<div className="main">
{/* 
    <Navbar1 /> */}
    {/* <Navbar1 handleLoginClick={handleLoginClick} />
      <Contact/>
      <Preet1/> */}
       {/* <App1 /> */}
   
<Navbar/>
<Sidebar></Sidebar>
 
<Ourteam /> 



{/* <Footer /> */}


</div>





      
     );
}

export default BasicExample;
