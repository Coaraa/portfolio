import React from 'react';
import HeroSection from '../components/HeroSection';
import AboutMe from '../components/AboutMe';
import Projects from '../components/Projects';
import Footer from '../components/Footer';

function Home() {
  return (
    <>
      <HeroSection />
      <Projects />
      <AboutMe />
      <Footer />
    </>
  )
}

export default Home
