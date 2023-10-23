import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getDatabase } from "firebase/database";



// Our web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBlsZXqAFCMNeMoYwiOs2KnaGiPc5Sg-Ys",
    authDomain: "wecare-26feb.firebaseapp.com",
    databaseURL: "https://wecare-26feb-default-rtdb.firebaseio.com",
    projectId: "wecare-26feb",
    storageBucket: "wecare-26feb.appspot.com",
    messagingSenderId: "938510372172",
    appId: "1:938510372172:web:481e1c3330f5ba26f693e9"
  };


  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  export const db = getDatabase(app);
  export const storage = getStorage(app);
  export const auth = getAuth(app);