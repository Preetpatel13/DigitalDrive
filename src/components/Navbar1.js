import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
import { Link } from "react-router-dom";
import Logo from './logo.jpg';
function Navbar1({handleLoginClick}) {
    const handleClick = () => {
      handleLoginClick();
    };
  
    return (
      <div className="header">
        <div className="header_logo">
          <img src={Logo} style={{ width: "50px", height: "auto" ,borderRadius: "10%", border: "2px solid rgb(0,98,155)" }} />
                </div>
                <span className="text"  style={{ fontSize:"40px", fontWeight: "bold", color: "rgb(3,141,113)"  }}>DigiDrive</span>
 
          <input className="search" type="text" placeholder="Search in drive" />
  
        <Link to="/log" className="login-link">
            <button className="login-button" onClick={handleClick}>
              Login
            </button>
        </Link>
       </div>
    );
  }
  
  export default Navbar1;
