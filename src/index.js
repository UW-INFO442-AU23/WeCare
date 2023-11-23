import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import RESOURCE_LIST from '../src/data/resources.json';

 const root = ReactDOM.createRoot(document.getElementById('root'));
 root.render(
   <React.StrictMode>
     <App
     res={RESOURCE_LIST}  />
  </React.StrictMode>
 );
