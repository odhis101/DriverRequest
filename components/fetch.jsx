import { initializeApp } from "firebase/app";
import firebase from 'firebase/compat/app';
import 'firebase/firestore';
import 'firebase/compat/firestore';


const firebaseConfig = {
    apiKey: "AIzaSyAS1q7CcWFLCzhNLchzu6d0GZLJIm_yjN4",
    authDomain: "healthwetu.firebaseapp.com",
    projectId: "healthwetu",
    storageBucket: "healthwetu.appspot.com",
    messagingSenderId: "666180444679",
    appId: "1:666180444679:web:8768eca8216ccbbeb7c0a2",
    measurementId: "G-SMG44YKGFD"
  };

    firebase.initializeApp(firebaseConfig);
    const db = firebase.firestore();
 export {firebase}
  