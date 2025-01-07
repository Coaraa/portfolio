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
    <div className="about">
      <div className="presentation">
        <motion.h2>PORTFOLIO</motion.h2>
        <motion.h1>ÉTUDIANTE INGÉNIEURE EN INFORMATIQUE À POLYTECH LYON</motion.h1>
        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          onClick={() => window.scrollTo({ top: window.innerHeight, behavior: 'smooth' })}
        >
          Découvrez mes projets
        </motion.button>
      </div>
      <div className='aboutContainer'>
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
      </div>
    </div>
  )
}

export default About
