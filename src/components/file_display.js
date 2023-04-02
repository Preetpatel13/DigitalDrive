import React, { useEffect, useState } from "react";
import { ref, getDownloadURL } from "firebase/storage";
import { storageRef, listAll } from "../Firebase/base";
import styled from 'styled-components';
// const InputField = styled.input`
//   padding: 4px;
//   text-align: left;
//   font-size: 16px;
//   `;

function FileDisplay() {
    const [files, setFiles] = useState([]);

    useEffect(() => {
        // const userID = sessionStorage.getItem('uName')
        const userID = 'preet123'
        const listRef = ref(storageRef, userID + "/");
        listAll(listRef)
            .then((res) => {
                const fileData = res.items.map((item) => {
                    return {
                        name: item.name,
                        url: getDownloadURL(item),
                    };
                });
                setFiles(fileData + ' '+ sessionStorage.getItem('uName'));
            })
            .catch((err) => alert('Error: '+err));
    }, []);
if(sessionStorage.getItem('uName')!=' '){
  return (
    <div>
      <ul>
      {files.map((file, index) => (
          <li><a href={file.url} download={file.name}>
            {file.name}
          </a></li>
      ))}
      
      </ul>
    </div>
  );
}else{
  return (alert('Please Login...!'));
}
    
}

export default FileDisplay;
