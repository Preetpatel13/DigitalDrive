//import logo from './logo.svg';
import './App.css';
import Home from '../home';
import Login from '..//src//register/login'
import Navbar1 from '../components/Navbar1';
import {BrowserRouter,Route, Routes,useNavigate} from 'react-router-dom'
import File from './fileupload'
function App() {
//const navigate= useNavigate();

  return (
    <div className="App">
  
  <BrowserRouter>
  
   <Routes.StrictMode>   
       <Route path='/Navbar1' exact element={<Navbar1 />}></Route>
       <Route path="/" exact element={<Home/>}></Route>
       <Route path="/login" exact element={<Login/>}></Route>
       
       <Route path="/h" exact element={<H/>}></Route>   
    
    <Route path="/file" exact element={<File/>}></Route>   

    </Routes.StrictMode> 
    </BrowserRouter>
  

    </div>
    );
}

export default App;
