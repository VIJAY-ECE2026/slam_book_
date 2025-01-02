import './App.css';

import Home from './home';
import Contact from './contact';
import About from './about';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './page-content.css'
function App() {
  return (
    <>
      <Router>
        <header>
        <div className="logo">
        <Link to="/" style={{ textDecoration: 'none', color: 'inherit' }}>
    <img src="logo.png" alt="Logo" />
   
    <span>My Website</span>
    </Link>
  </div>
        <nav>
          <ol>
            <li> <Link to="/">Home |</Link></li>
            <li> <Link to="/Aboutus">About Us |</Link></li>
            <li> <Link to="/Contactus">Contact Us</Link></li>
          </ol>
        </nav>
        
        </header>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Aboutus" element={<About />} />
          <Route path="/Contactus" element={<Contact />} />
         
        </Routes>
      </Router>
    </>
  );
}

export default App;