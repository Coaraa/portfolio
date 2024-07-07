import React from 'react'; 
import '../App.css';
import '../styles/Navbar.css';

function Navbar() {
  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          <a href="/" className="navbar-logo">
            <img src="images/logo.png" alt="logo" />
          </a>
          <div className="brand">
            <div className='brand-name'>Clara</div>
            <span className="brand-name">Sithidej</span>
          </div>
          <div className="nav-menu">
            <div className="nav-item">
              <a href="/" className="nav-links">Profil</a>
            </div>
            <div className="nav-item">
              <a href="/" className="nav-links">Portfolio</a>
            </div>
          </div>
        </div>
      </nav>
    </>
  )
}

export default Navbar
