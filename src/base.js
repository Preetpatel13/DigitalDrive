import { initializeApp } from 'firebase/app';

//import firebase from 'firebase';
//import firebase from './firebase';
//import 'firebase/compat/auth';
//import 'firebase/compat/firestore';
import 'firebase/compat/storage';
//port { getApp } from "firebase/app";
import { getStorage, ref, uploadBytes } from  'firebase/storage';
import {getAuth} from 'firebase/auth';
const firebaseConfig = {

    
    apiKey: "AIzaSyAm5osRblaSfHPKzF6ysSj_-iLFypCaaZg",
    authDomain: "drive-3d730.firebaseapp.com",
    databaseURL: "https://drive-3d730-default-rtdb.firebaseio.com",
    projectId: "drive-3d730",
    storageBucket: "drive-3d730.appspot.com",
    messagingSenderId: "663287757317",
    appId: "1:663287757317:web:3f597052af98921c5ffa6c"
  
};

const app = initializeApp(firebaseConfig);
const authentication= getAuth(app);

const storage = getStorage();
const storageRef = ref(storage);

export  {app,storage, storageRef, ref, uploadBytes,authentication}


//var db = firebaseApp.firestore();
//export const ;
//const storage = getStorage(app);

// Get a non-default Storage bucket
//const firebaseApp = getApp();
//const storage = getStorage(firebaseApp, "gs://my-custom-bucket");

//export default app;