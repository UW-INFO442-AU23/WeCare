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
// import QuizResult1 from './components/Quiz/QuizResult1'
// import QuizResult2 from './components/Quiz/QuizResult2'

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
            {/* <Route path="/quizresult1" element={<QuizResult1 /> } />
            <Route path="/quizresult2" element={<QuizResult2 /> } /> */}
          </Routes>
        </div>
      </Router>
      <Footer />
    </div>
  );
}


export default App;
