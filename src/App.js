//import logo from './logo.svg';
import './App.css';
import Home from './components/home';
import Navbar1 from './components/Navbar1';
import {BrowserRouter,Route, Routes,useNavigate} from 'react-router-dom'
import File from './components/fileupload'
import Login from '../src//components//log';
function App() {
//const navigate= useNavigate();

  return (
    <div className="App">
  
  <BrowserRouter>
  
   <Routes>   
       <Route path='/Navbar1' exact element={<Navbar1 />}></Route>
       <Route path="/" exact element={<Home/>}></Route>
       <Route path="/log" exact element={<Login/>}></Route>
     
    <Route path="/file" exact element={<File/>}></Route>   

    </Routes> 
    </BrowserRouter>
  

    </div>
    );
}

export default App;
