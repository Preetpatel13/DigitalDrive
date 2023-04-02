import { initializeApp } from 'firebase/app';

//import firebase from 'firebase';
//import firebase from './firebase';
//import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import 'firebase/compat/storage';
//port { getApp } from "firebase/app";
import { getStorage, ref, uploadBytes, listAll } from 'firebase/storage';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
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
const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage();
const storageRef = ref(storage);

export { app, storage, storageRef, ref, uploadBytes, auth, listAll, db }