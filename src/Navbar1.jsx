import React from "react";

import { DistributeVertical } from "react-bootstrap-icons";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import * as Icon from "react-bootstrap-icons";
import logo1 from './logo1.png';
import './login.css';



function Navbar1({ handleLoginClick }){
  const handleClick = () => {
    handleLoginClick();
  };  
return(
    <div className="header">
    <div className="header_logo">
<img src={logo1} alt="logo1" />
    <span className="text">Drive</span>
   

             
      </div>
    

     <div className="search">
    <Icon.Search className="hi"/>
    <input
    className="search_txt"
    type="text"
    placeholder="Search in drive"
    />
    
    </div>
    <div className='logo'>
      <Icon.Search />
      <Icon.ChevronExpand/>
    <Icon.Person/>
    <div className="navbar">
      <div>
        <span onClick={handleClick} className="loginicon">
          Sign In
        </span>
      </div>
    </div>

    </div>
  
  </div>



);


}

export default Navbar1;