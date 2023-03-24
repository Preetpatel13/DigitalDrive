
import React from "react";
import './home.css';
import Preet1 from './preet1.js';
import Contact from "./contact";
import up_file  from  './logos/up_file.png';
import up_folder from  './logos/up_folder.png';
import up_vedio from  './logos/up_vedio.png';
import shared_me from './logos/shared_me.png';
import Footer from './footer'

const sidebar = ()=>{
return(


<div className="sidebar">

<div className="sidebar_icon">


<div className="flx">
  <img src={up_file} alt="up_file" />
<span className="text">Upload File</span>
</div>
  
<div className="flx">
<img src={up_folder} alt="up_folder" />
<span className="text">Upload folder </span>
</div>

<div className="flx">
<img src={up_vedio} alt="up_vedio" />
<span className="text">Upload vedio</span>
</div>


<div className="flx">
<img src={shared_me} alt="shared_me" />
<span className="text">shared with me</span>
</div>


</div>








</div>

);

};

export default sidebar;