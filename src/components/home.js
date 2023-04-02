import { DistributeVertical } from "react-bootstrap-icons";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "./Navbar1.js";
import NavDropdown from "react-bootstrap/NavDropdown";
import * as Icon from "react-bootstrap-icons";
import React from "react";
import ListElements from "./list.js"; 
import Log from './log.js';
import Ourteam from './ourteam';
import  { useState } from 'react';
//import FileUpload from './fileupload.js';
import Sidebar from './sidebar';
import './sidebar.css'
import Footer from './footer';


//import { ExpandMore} from '@mui/icons-material';
import './home.css';
import Navbar1 from "./Navbar1";
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
<ListElements/>

<Sidebar></Sidebar>
 
<Ourteam /> 
{/* <Footer/> */}


{/* <Footer /> */}


</div>





      
     );
}

export default BasicExample;
