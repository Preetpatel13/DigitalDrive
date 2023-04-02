
import {React} from "react";
import {Link, Route, Routes} from 'react-router-dom';
import './sidebar.css';
import Contact from "./contact";
import up_file  from  './logos/up_file.gif';
import up_folder from  './logos/up_folder.png';
import File from './fileupload'
import shared_me from './logos/shared_me.png';
import mygif from './mygif.gif'
const sidebar = ()=>{
return(


<div className="sidebar">
<div class="hell">
  <h2 class="pree">Welcome To <span class="sp"> Digital Drive</span></h2>
  <p class="hi1">now you can upload you files easily and safelt access very safely</p>

  <div className="flx">
  <img src={up_file} alt="up_file" />
  <Link to="/file"><button>File Upload</button></Link>
</div>
  
<div className="flx">
<img src={up_folder} alt="up_folder" />
<Link to="/file"><button>Show folder</button></Link> 
 
 </div>

</div>
<div class="gi">
<img src={mygif}/>
</div>






</div>

);

};

export default sidebar;