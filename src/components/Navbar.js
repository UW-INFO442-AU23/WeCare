import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="navbar navbar-default">
      <div className="container-fluid">
        <div className="navbar-header">
          <a className="navbar-brand" href="/">WeCare</a>
        </div>
        <ul className="nav navbar-nav navbar-right">
          <li><Link to="/login">Login</Link></li>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/quiz">Quiz</Link></li>
          <li><Link to="/resources">Resources</Link></li>
          <li><Link to="/profile">Profile</Link></li>
          {/*<li><Link to="/logout">Logout</Link></li>*/}
          

          {/* <li><Link to ="/quizresult1">QuizResult1</Link></li>
          <li><Link to ="/quizresult2">QuizResult2</Link></li> */}
        </ul>
      </div>
    </nav>
  );
}



export default Navbar;
