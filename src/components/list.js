import React from 'react';
import {setUsers,useEffect} from 'react';
import  { app, storageRef, ref, listAll } from '../Firebase/base.js'

function ListElements(){
    const userID = "preet123"
    const fileRef = ref(storageRef, userID+ "/")
    listAll(fileRef).then(function(listResult) {
      listResult.items.forEach(function(itemRef) {
        // Do something with the item reference
        // itemRef.getMetadata()
        // .then(function(metadata) {
        //   // Do something with the metadata
        //   console.log(metadata);
        // })
        // .catch(function(error) {
        //   console.log('Error fetching metadata:', error);
        // });

        itemRef.getDownloadURL()
        .then(function(url) {
          // Do something with the download URL
          console.log(url);
        })
        .catch(function(error) {
          console.log('Error fetching download URL:', error);
        });
        
      });
    })
    .catch(function(error) {
      console.log('Error fetching data:', error);
    });
}
export default ListElements;