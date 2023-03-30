//import logo from './logo.svg';
import './App.css';
import Contact from './contact'
import Home from './home';
import H from './h';
import Login from '..//src//register/login'
import Navbar1 from './Navbar1';
import './login.css';
import Register from '..//src//register/register';
import {BrowserRouter,Route, Routes,useNavigate} from 'react-router-dom'
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Ourteam from './ourteam';
import File from './fileupload'
function App() {
//const navigate= useNavigate();

  return (
    <div className="App">
  
  <BrowserRouter>
  
   <Routes>   
       <Route path='/Navbar1' exact element={<Navbar1 />}></Route>
       <Route path="/" exact element={<Home/>}></Route>
       <Route path="/login" exact element={<Login/>}></Route>
       
       <Route path="/h" exact element={<H/>}></Route>   
    
    <Route path="/file" exact element={<File/>}></Route>   

    </Routes> 
    </BrowserRouter>
  

    </div>
    );
}

export default App;
