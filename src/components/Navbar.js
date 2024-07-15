import React from 'react'; 
import '../App.css';
import '../styles/Navbar.css';

function goTo(id) {
  document.getElementById(id).scrollIntoView({behavior: "smooth"});
}

function burgerMenu() {
  var x = document.getElementById("links");
  if (x.style.visibility === "visible") {
    x.style.visibility = "hidden";
    x.style.left = "-100%";
  } else {
    x.style.visibility = "visible";
    x.style.left = "0";
  }
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
            <div className="nav-links" onClick={() => goTo('projects')}>Projets</div>
            <div className="nav-links" onClick={() => goTo('about')}>Profil</div>
          </div>
          
          <div className="nav-menu-mobile">
            <a href="javascript:void(0);" className="burger" onClick={burgerMenu}>
              <img src="images/burger.png" alt="burger" />
            </a>

            <div id="links">
              <div className="nav-links" onClick={() => goTo('projects')}>Projets</div>
              <div className="nav-links" onClick={() => goTo('about')}>Profil</div>
            </div>
          </div>

        </div>
      </nav>
    </>
  )
}

export default Navbar
