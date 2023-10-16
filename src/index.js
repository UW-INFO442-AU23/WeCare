import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBlsZXqAFCMNeMoYwiOs2KnaGiPc5Sg-Ys",
  authDomain: "wecare-26feb.firebaseapp.com",
  projectId: "wecare-26feb",
  storageBucket: "wecare-26feb.appspot.com",
  messagingSenderId: "938510372172",
  appId: "1:938510372172:web:481e1c3330f5ba26f693e9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);