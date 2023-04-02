
import React, { useEffect, useState } from "react";
import { ref, getDownloadURL } from "firebase/storage";
import { storageRef, listAll } from "../Firebase/base"

function FileDisplay() {
    const [files, setFiles] = useState([]);

    useEffect(() => {
        const userID = "preet123";
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
            })
            .catch((err) => console.log('Error: '+err));
    }, []);

    return (
        <div>
          {files.map((file, index) => (
            <div key={index}>
              <a href={file.url} download={file.name}>
                {file.name}
              </a>
            </div>
          ))}
        </div>
      );
    
}

export default FileDisplay;
