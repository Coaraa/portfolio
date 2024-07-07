import React from 'react'

function AboutMe() {
  return (
    <div>
      <div className='titre-section'>À propos de moi</div>
      <div className='container'>
        <div className='portrait'>
          <img src="" alt="Portrait" />
        </div>
        <div className='description'>
          <div className='texte'>
            <p>Je m'appelle Clara, j'ai 20 ans et je suis actuellement étudiante ingénieure en informatique à Polytech Lyon.</p>
            <p>Au cours de mon cursus, j'ai étudié les mathématiques, le développement d'applications, le développement web et la data science. J'ai également appris la gestion de projet, la communication et le travail en équipe.</p>
            <p>J'aime construire des applications belles et efficaces en combinant mes connaissances techniques avec le design. Mon objectif est de produire des projets à la fois intuitifs et évolutifs.</p>

          </div>
        </div>
      </div>
    </div>
  )
}

export default AboutMe

