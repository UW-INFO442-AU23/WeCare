// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage'; 

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
// Your web app's Firebase configuration

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
export const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
export default app;