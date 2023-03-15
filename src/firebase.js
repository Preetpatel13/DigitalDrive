import firebase from 'firebase/compat/app';

import 'firebase/compat/auth';
import 'firebase/compat/firestore';

import 'firebase/compat/storage';

var firebaseApp = firebase.initializeApp({
    
    apiKey: "AIzaSyAm5osRblaSfHPKzF6ysSj_-iLFypCaaZg",
    authDomain: "drive-3d730.firebaseapp.com",
    databaseURL: "https://drive-3d730-default-rtdb.firebaseio.com",
    projectId: "drive-3d730",
    storageBucket: "drive-3d730.appspot.com",
    messagingSenderId: "663287757317",
    appId: "1:663287757317:web:3f597052af98921c5ffa6c"
  
});

var db = firebaseApp.firestore();
var storage = firebaseApp.storage();

export { db ,storage};