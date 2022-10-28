import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyAS1q7CcWFLCzhNLchzu6d0GZLJIm_yjN4",
    authDomain: "healthwetu.firebaseapp.com",
    projectId: "healthwetu",
    storageBucket: "healthwetu.appspot.com",
    messagingSenderId: "666180444679",
    appId: "1:666180444679:web:8768eca8216ccbbeb7c0a2",
    measurementId: "G-SMG44YKGFD"
  };
  const app = initializeApp(firebaseConfig);
  export const db = getFirestore(app) 
  