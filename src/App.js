import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navigation/Navbar';
import Footer from './components/Footer';
import Home from './components/Home';
import Quiz from './components/Quiz/Quiz';
import Resources from './components/Resources/Resources';
import Profile from './components/Profile/Profile';
import Login from './components/Profile/Login';
import Register from './components/Profile/Register';
import Edit from './components/Profile/Edit';
import ProtectedRoute from './components/Navigation/ProtectedRoute';
import { AuthProvider } from './AuthContext';

import './style/styles.css';
import './style/AnimatedIconStyles.css'

function App(props) {
  return (
    <Router>
      <AuthProvider>
        <Navbar />
        <div className="content-container">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/quiz" element={<Quiz />} />
            <Route path="/resources" element={<Resources res={props.res}/>} />
            <Route path="/profile" element={<ProtectedRoute component={Profile} redirectTo="/login" />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />}/>
            {/* <Route path="/reset" element={<ForgotPassword/>} /> */}
            <Route path='/edit' element={<Edit/>}/>
          </Routes>
        </div>
        <Footer />
      </AuthProvider>
    </Router>
  );
}

export default App;