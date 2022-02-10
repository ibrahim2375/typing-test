import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import './App.css';
import logo from './img/logo.png';
import Home from './components/Home.js';
function App() {
  return (
    <div className="App">
      <Router>
        <header>
          <div className="logo">
            <img src={logo} alt="Logo" name="logo" />
          </div>
          <div className="links">
            <ul>
              <li><Link to="/">Home</Link></li>
              <li>Typing Test</li>
              <li>Contact Us</li>
              <li>About</li>
            </ul>
          </div>
          <div className="contactUs">
            <button className="btn-contact">Contact Us</button>
          </div>
        </header>
        <Routes>
          <Route path="/" element={<Home />}></Route>
        </Routes>
      </Router>
    </div >

  );
}
export default App;
