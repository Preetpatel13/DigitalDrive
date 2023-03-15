import React from 'react';
import './App.css';
import {db,storage} from './firebase'

function App() {
  const onChange = (e) => {
    const file = e.target.files[0];
    const storageRef = db.storage().ref()
    const fileRef = storageRef.child(file.name)
    fileRef.put(file).then(() => {
      console.log("Uploaded a file")
    })
  }

  return (
    <input type="file" onChange={onChange}/>
  );
}

export default App;