import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { initializeApp } from "firebase/app";
import RESOURCE_LIST from '../src/data/resources.json';
import { CharityProvider } from './components/CharityCat';
import Profile from './components/Profile/Profile';
import { Router } from 'react-router-dom';



 const root = ReactDOM.createRoot(document.getElementById('root'));
 root.render(
   <CharityProvider>
   <React.StrictMode>
     <App
     res={RESOURCE_LIST}  />
  </React.StrictMode>

  </CharityProvider>
 );
