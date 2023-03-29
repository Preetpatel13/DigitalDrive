import React from 'react';
import {setUsers,useEffect} from 'react';
import  { app, storageRef, ref, listAll } from './base.js'

function ListElements(){
    const userID = "preet123"
    const fileRef = ref(storageRef, userID+ "/")
    listAll(fileRef).then((res) => {
        res.prefixes.forEach((folderRef) => {
          // All the prefixes under listRef.
          // You may call listAll() recursively on them.
        });
        res.items.forEach((itemRef) => {
          // All the items under listRef.
        });
      }).catch((error) => {
        // Uh-oh, an error occurred!
      });
      return(
        <div className='listElements'>
            <h4>{userID}</h4>
        </div>
      );
}
export default ListElements;