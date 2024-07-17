import React from 'react'
import './about.scss'
import { motion } from 'framer-motion'

const variants = {
  initial: {
    y: 500,
    opacity: 0
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      staggerChildren: 0.1
    }
  }
}

const About = () => {
  return (
    <motion.div className="about" variants={variants} initial="initial" whileInView="animate">
      <div className='avatarContainer'>
        <img src="/avatar.png" alt="Avatar" />
      </div>
      <div className='textContainer'>
        <div className='title-section'>À propos de moi</div>

        <div className='text-section'>
          <p>Je m'appelle Clara, j'ai 20 ans et je suis actuellement étudiante ingénieure en informatique à Polytech Lyon.</p>
          <p>Au cours de mon cursus, j'ai étudié les mathématiques, le développement d'applications, le développement web et la data science. J'ai également appris la gestion de projet, la communication et le travail en équipe.</p>
          <p>J'aime construire des applications belles et efficaces en combinant mes connaissances techniques avec le design. Mon objectif est de produire des projets à la fois intuitifs et évolutifs.</p>
        </div>

      </div>

    </motion.div>
  )
}

export default About
