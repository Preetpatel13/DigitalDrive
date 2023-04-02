import React from 'react';
import {useState,useEffect} from 'react';
import  { storageRef, ref, listAll } from '../Firebase/base.js'
import { getDownloadURL } from 'firebase/storage';

function ListElements(){
  const userID = "preet123"
  const fileRef = ref(storageRef, userID + "/")

  const [files, setFiles] = useState([]);

  useEffect(() => {
    // List all files in the bucket
    listAll(fileRef).then((result) => {
      const promises = result.items.map((item) => getDownloadURL(item));
      return Promise.all(promises);
    }).then((urls) => {
      setFiles(urls);
    }).catch((error) => {
      console.log(error);
    });
  }, []);
  return (
    <div>
      <h1>List of files</h1>
      <ul>
        
        {files.map((url, index) => (
          <li key={index}>
            <a href={url} target="_blank" rel="noopener noreferrer">{/*GetFileIcon*/url}</a>
          </li>
        ))}
      </ul>
    </div>
  );

}

export default ListElements;