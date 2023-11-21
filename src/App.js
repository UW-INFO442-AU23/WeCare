import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './components/Home';
import Quiz from './components/Quiz/Quiz';
import Resources from './components/Resources';
import Profile from './components/Profile/Profile';
import Login from './components/Profile/Login';
import Register from './components/Profile/Register';
import Edit from './components/Profile/Edit';
import Home2 from './components/Home2';
import { auth } from './f-config';
import { onAuthStateChanged } from 'firebase/auth';

import './style/styles.css';
import './style/AnimatedIconStyles.css'

function App(props) {

  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setIsAuthenticated(!!user);
    });

    return () => unsubscribe();
  }, []);

  return (
    <Router>
      <Navbar />
      <div className="content-container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/quiz" element={<Quiz />} />
          <Route path="/resources" element={<Resources res={props.res}/>} />
          <Route path="/profile" element={isAuthenticated ? <Profile /> : <Login/>} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />}/>
          {/* <Route path="/reset" element={<ForgotPassword/>} /> */}
          <Route path='/edit' element={<Edit/>}/>
          {/* <Route path='/Home2' element={<Home2/>}/> */}
        </Routes>
      </div>
      <Footer />
    </Router>
  );
}


export default App;
