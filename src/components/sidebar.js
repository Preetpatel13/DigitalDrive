
import { React , useState} from "react";
import { Link, Route, Routes } from 'react-router-dom';
import './sidebar.css';
import Contact from "./contact";
import up_file from './logos/up_file.gif';
import up_folder from './logos/up_folder.png';
import FileDisplay from './file_display';
import File from './fileupload'
import shared_me from './logos/shared_me.png';
import mygif from './mygif.gif'

const sidebar = () => {
  var uName = sessionStorage.getItem('uName');
  
  return (
    <div className="sidebar">
      <div class="hell">
        <h2 class="pree">Hii {uName}! Welcome To <span class="sp"> Digital Drive</span></h2>
        <p class="hi1">now you can upload you files easily and safely access very safely</p>

        <div className="flx">
          <img src={up_file} alt="up_file" />
          <Link to="/file"><button>File Upload</button></Link>
        </div>

        <div className="flx">
          <img src={up_folder} alt="up_folder" />
          {/* <Link to="/FilePreview"><button onClick={<FileDisplay />}>Show folder</button></Link> */}
          <h3 color="#00629b">Uploaded Files:</h3>
          <FileDisplay />
          
        </div>

      </div>
      <div class="gi">
        <img src={mygif} />
      </div>






    </div>

  );

};

export default sidebar;