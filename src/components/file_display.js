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
    const userID = sessionStorage.getItem('uEmail')
    // const userID = 'preet123'
    const listRef = ref(storageRef, userID + "/");
    listAll(listRef)
      .then((res) => {
        const fileData = res.items.map((item) => {
          return {
            name: item.name,
            url: getDownloadURL(item),
          };
        });
        setFiles(fileData);
        console.log('sessiondata:'+sessionStorage.getItem('uName'))
      })
      .catch((err) => alert('Error: ' + err));
  }, []);
  // if (sessionStorage.getItem('uName') !== null) {
    return (
      <div>
        {files.map((file, index) => (
          <div key={index}><a href={file.url} download={file.name}>
            {file.name}
          </a></div>
        ))}
      </div>
    );
  // } else {
  //   return (

  //     <div>
  //       <script>alert('Please Login...!')</script>
  //       <p>No Files Available / Login </p>
  //     </div>

  //   );
  // }

}

export default FileDisplay;
