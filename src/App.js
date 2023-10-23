import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './components/Home';
import Quiz from './components/Quiz/Quiz';
import Resources from './components/Resources';
import Profile from './components/Profile';
import Login from './components/Login';
import Register from './components/Register';


import './styles.css';


function App(props) {
  return (
    <div className="app-container">
      <Router>
        <Navbar />
        <div className="content-container">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/quiz" element={<Quiz />} />
            <Route path="/resources" element={<Resources res={props.res}/>} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />}/>

  
          </Routes>
        </div>
      </Router>
      <Footer />
    </div>
  );
}


export default App;
