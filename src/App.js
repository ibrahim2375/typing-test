import React, { useRef } from 'react';
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
import ContactPage from './components/ContactPopUp';
// import MenuIcon from '@mui/icons-material/Menu';
function App() {
  const divRef = useRef();
  // const links = useRef();
  // const showList = () => {
  // if (window.innerWidth <= 480) {
  //   divRef.current.style.display === 'block' ? divRef.current.style.display = 'none' : divRef.current.style.display = 'block';
  // }
  // }
  // useEffect(() => {
  //   if (window.innerWidth <= 480) {
  //     window.onscroll = () => {
  //       divRef.current.style.display = 'none';
  //     }

  //   }

  // }, [])
  // function check() {
  //   links.current.foreach(function (link) {
  //     link.onClick(() => {
  //       link.style.color = 'red';
  //     })
  //   })
  // }
  return (
    <div className="App" >
      <Router>
        <header>
          <div className="logo">
            <img src={logo} alt="Logo" name="logo" />
          </div>
          {/* <MenuIcon className="menu" onClick={showList} /> */}
          <ul ref={divRef}>
            <li><Link to="/" className="link" >Home</Link></li>
            <li><Link to="/typing" className="link">Typing Test</Link></li>
            <li><Link to="/about" className="link">About</Link></li>
          </ul>
          <div className="contactUs">
            <Link to="/contact" className="btn-contact">Contact Us</Link>
          </div>
        </header>
        <Routes>
          <Route exact path="/" element={<Home />}></Route>
          <Route path="/typing" element={<Typing />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/contact" element={<ContactPage />}></Route>
        </Routes>
      </Router>
    </div>

  );
}
export default App;
