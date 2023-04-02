
import Navbar from "./Navbar1.js";
import React from "react";
import Ourteam from './ourteam';
import Sidebar from './sidebar';
import './sidebar.css'
// import FileDisplay from "./file_display.jsx";
import './home.css';


function BasicExample() {
  return (
    <div className="main">
      <Navbar />
      <Sidebar></Sidebar>
      <Ourteam />
    </div>
  );
}

export default BasicExample;
