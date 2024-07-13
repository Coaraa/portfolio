import React from 'react';
import '../App.css';

import '../styles/HeroSection.css';

function HeroSection() {
  return (
    <div className='hero-container' id='hero'>
      <div className="main-section">
        <div className="portfolio">PORTFOLIO</div>
        <div className="name">Clara</div>
        <div className="name">Sithidej</div>
        <div className="discovery" onClick={() => document.getElementById('projects').scrollIntoView({behavior: "smooth"})}>
          Découvrir mes projets →
        </div>
      </div>
      <div className="main-portrait">
        <img src="/images/moi.jpg" alt="Portrait" />
      </div>
    </div>
  )
}

export default HeroSection;
