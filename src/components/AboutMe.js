import React from 'react';
import '../App.css';
import '../styles/AboutMe.css'; 

function AboutMe() {
  return (
    <div id="about" className='section about-container'>
      <div className='portrait'>
        <img src="/images/avatar.jpg" alt="Portrait" />
      </div>
      <div className='description'>
        <div className='title-section'>À propos de moi</div>

        <div className='texte'>
          <p>Je m'appelle Clara, j'ai 20 ans et je suis actuellement étudiante ingénieure en informatique à Polytech Lyon.</p>
          <p>Au cours de mon cursus, j'ai étudié les mathématiques, le développement d'applications, le développement web et la data science. J'ai également appris la gestion de projet, la communication et le travail en équipe.</p>
          <p>J'aime construire des applications belles et efficaces en combinant mes connaissances techniques avec le design. Mon objectif est de produire des projets à la fois intuitifs et évolutifs.</p>
        </div>

      </div>
    </div>
  )
}

export default AboutMe

