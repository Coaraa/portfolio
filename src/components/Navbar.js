import React from 'react'; 
import '../App.css';
import '../styles/Navbar.css';

function goTo(id) {
  document.getElementById(id).scrollIntoView({behavior: "smooth"});
}

function Navbar() {
  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          <a href="/" className="navbar-logo">
            <img src="images/logo.png" alt="logo" />
          </a>
          
          <a href="/" className="brand">
            <div className='brand-name'>Clara</div>
            <span className="brand-name">Sithidej</span>
          </a>
          
          <div className="nav-menu">
            <div className="nav-item">
              <div className="nav-links" onClick={() => goTo('projects')}>Projets</div>
            </div>
            <div className="nav-item">
              <div className="nav-links" onClick={() => goTo('about')}>Profil</div>
            </div>
            
          </div>
        </div>
      </nav>
    </>
  )
}

export default Navbar
