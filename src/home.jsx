import { DistributeVertical } from "react-bootstrap-icons";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import * as Icon from "react-bootstrap-icons";
import logo1 from './logo1.png';
import up_file  from  './logos/up_file.png';
import up_folder from  './logos/up_folder.png';
import up_vedio from  './logos/up_vedio.png';
import shared_me from './logos/shared_me.png';

//import { ExpandMore} from '@mui/icons-material';
import '../src/home.css';
import Navbar1 from "./Navbar1";

function BasicExample() {
  return (
    <div className="main">
   <Navbar1 />
   
   








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


</div>





      
     );
}

export default BasicExample;
