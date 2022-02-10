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
import Typing from './components/TypingTest';
import About from './components/About';
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
              <li><Link to="/" className="link">Home</Link></li>
              <li><Link to="/typing" className="link">Typing Test</Link></li>
              <li>Contact Us</li>
              <li><Link to="/about" className="link">About</Link></li>
            </ul>
          </div>
          <div className="contactUs">
            <button className="btn-contact">Contact Us</button>
          </div>
        </header>
        <Routes>
          <Route exact="true" path="/" element={<Home />}></Route>
          <Route path="/typing" element={<Typing />}></Route>
          <Route path="/about" element={<About />}></Route>

        </Routes>
      </Router>
    </div >

  );
}
export default App;
