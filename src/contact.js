import React, { useState, useEffect } from "react";
import "../src";
import { db,storage } from "./firebase";
import { getStorage, ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";

const Contact = () => {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
 const [image, setImage] = useState("");
  const [loader, setLoader] = useState(false);
  
//   useEffect(() => {

// const uploadFile = ()=>{

//   const name =new Date().getTime() + file.name;
// const storageRef = ref(storage,file.name);
// const uploadTask = uploadBytesResumable(storageRef, file, metadata);

// // Listen for state changes, errors, and completion of the upload.
// uploadTask.on('state_changed',
//   (snapshot) => {
//     // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
//     const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
//     console.log('Upload is ' + progress + '% done');
//     switch (snapshot.state) {
//       case 'paused':
//         console.log('Upload is paused');
//         break;
//       case 'running':
//         console.log('Upload is running');
//         break;
//     }
//   }, 
//   (error) => {
//     switch (error.code) {
//       case 'storage/unauthorized':
//         break;
//       case 'storage/canceled':
//         break;
//       case 'storage/unknown':
//         break;
//     }
//   }, 
//   () => {
//     getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
    
//       console.log('File available at', downloadURL);
//     });
//   }
// );





// }
// file && uploadFile();

//   },[file])
 
// const storage = getStorage();

// // Create the file metadata 
// /** @type {any} */
// const metadata = {
//   contentType: 'image/jpeg'
// };

// // Upload file and metadata to the object 'images/mountains.jpg'
// const storageRef = ref(storage, 'images/' + file.name);
// const uploadTask = uploadBytesResumable(storageRef, file, metadata);

// // Listen for state changes, errors, and completion of the upload.
// uploadTask.on('state_changed',
//   (snapshot) => {
//     // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
//     const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
//     console.log('Upload is ' + progress + '% done');
//     switch (snapshot.state) {
//       case 'paused':
//         console.log('Upload is paused');
//         break;
//       case 'running':
//         console.log('Upload is running');
//         break;
//     }
//   }, 
//   (error) => {
//     switch (error.code) {
//       case 'storage/unauthorized':
//         break;
//       case 'storage/canceled':
//         break;
//       case 'storage/unknown':
//         break;
//     }
//   }, 
//   () => {
//     getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
//       console.log('File available at', downloadURL);
//     });
//   }
// );


  const handleSubmit = (e) => {
    e.preventDefault();
    setLoader(true);

    db.collection("contacts")
      .add({
        name: name,
        email: email,
        message: message,
      })
      .then(() => {
        setLoader(false);
        alert("Your message has been submitted👍");
      })
      .catch((error) => {
        alert(error.message);
        setLoader(false);
      });

    setName("");
    setEmail("");
    setMessage("");
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <h1>Contact Us 🤳</h1>

      <label>Name</label>
      <input
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <label>Email</label>
      <input
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <label>Message</label>
      <textarea
        placeholder="Message"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      ></textarea>

{/*  
<input type="file" value={file} onChange={
        e => setImage(e.target.files[0])
    } >
        </input> */}

       <button
        type="submit"
        style={{ background: loader ? "#ccc" : " rgb(2, 2, 110)" }}
      >
        Submit
      </button> 
    </form>
  );
};

export default Contact;