import React from 'react';
import {setUsers,useEffect} from 'react';
//import {setFileUrl} from 'firebase'
import  { app, storageRef, ref, uploadBytes } from './base.js'
function File(){
    const userID = "preet123"
    //const db = app.firestore();

    const onFileChange = async (e) => {
        const file = e.target.files[0];
      //  const storageRef = app.storage().ref();
      const fileRef = ref(storageRef, userID+ "/"  + file.name)
      await uploadBytes(fileRef, file).then((snapshot) => {
                 console.log('Uploaded a blob or file!');
               });
              
    
        //setFileUrl(await fileRef.getDownloadURL());
      };
    
//     const onFileChange = acync () => {
//         const [fileUrl, setFileUrl] = React.useState(null);
//         const [users, setUsers] = React.useState([]);
      

//         const file=e.target.files[0]
// const fileRef = ref(storageRef, userID+ "/"  + file.name)
// const fileRef1 = ref(storageRef, userID+ "/" +"p1/"  + file.name)

// uploadBytes(fileRef, file).then((snapshot) => {
//     console.log('Uploaded a blob or file!');
//   });
  
// uploadBytes(fileRef1).then((snapshot) => {
//     console.log('Uploaded a blob or file!');
//   });
// /*fileRef.put(file).then(()=>{

// console.log("uploaded file successfully",file.name);

// })*/


//     }
    const onSubmit=(e)=>{

 e.preventDefault();



    }
    // useEffect(() => {
    //     const fetchUsers = async () => {
    //       const usersCollection = await db.collection("users").get();
    //       setUsers(
    //         usersCollection.docs.map((doc) => {
    //           return doc.data();
    //         })
    //       );
    //     };
    //     fetchUsers();
    //   }, []);    
    
    return(

        <>
        <form onSubmit={onSubmit}>
<input type="file" onChange={onFileChange} />
<input type="text" name="username" placeholder="Name"/>
<button type="submit">Upload</button>
        </form>
        
        </>

    );
}

export default File;