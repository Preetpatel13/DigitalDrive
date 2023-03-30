
import {React} from "react";
import './home.css';
import {Link, Route, Routes} from 'react-router-dom';

import Preet1 from './preet1.js';
import Contact from "./contact";
import up_file  from  './logos/up_file.png';
import up_folder from  './logos/up_folder.png';
import up_vedio from  './logos/up_vedio.png';
import File from './fileupload'
import shared_me from './logos/shared_me.png';
import Footer from './footer'

const sidebar = ()=>{
return(


<div className="sidebar">

<div className="sidebar_icon">


<div className="flx">
  <img src={up_file} alt="up_file" />
  <Link to="/file"><button>File Upload</button></Link>
</div>
  
<div className="flx">
<img src={up_folder} alt="up_folder" />
<Link to="/file"><button>Upload folder</button></Link> 
 </div>

<div className="flx">
<img src={up_vedio} alt="up_vedio" />
<Link to="/file"><button>Upload vedio</button></Link> 
</div>


<div className="flx">
<img src={shared_me} alt="shared_me" />
<Link to="/file"><button>Shared With me</button></Link> 
</div>


</div>








</div>

);

};

export default sidebar;