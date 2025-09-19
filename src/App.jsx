import { useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route, 
  Link
} from 'react-router-dom';
import './App.css'
import Home from './Home';
import About from "./About";
import Contact from "./Contact";

function App() {

  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const closeMenu = () => setMenuOpen(false);

  return <Router>
    <nav className="navbar">

      <Link to="/" className="logo" onClick={closeMenu}>mini <span className="color">PC</span>
      </Link>

      <div id="burger-menu" className={menuOpen ? 'open' : ''} onClick={toggleMenu}>
          <span></span>
          <span></span>
          <span></span>
      </div>
      <div id="menu" className={menuOpen ? 'open' : ''}>
          <ul>
            <li><Link to="/" className="active" onClick={closeMenu}>home</Link></li>
            <li><Link to="/about" onClick={closeMenu}>about</Link></li>
            <li><Link to="/contact" onClick={closeMenu}>contact us</Link></li>
          </ul>
        </div>
    </nav>

    <Routes>
      <Route path = "/" element = {<Home />} />
      <Route path = "/about" element = {<About />} />
      <Route path = "/contact" element = {<Contact />} />
    </Routes>
  </Router>
}

export default App;
