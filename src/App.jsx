import "./app.scss";
import Hero from "./components/Hero/Hero";
import Navbar from "./components/Navbar/Navbar";
import Contact from "./components/Contact/Contact";
import Portfolio from "./components/Portfolio/Portfolio";
import About from "./components/About/About";
import Parallax from "./components/Parallax/Parallax";
import Skills from "./components/Skills/Skills";

const App = () => {
  return <div>
    <section id="Accueil">
      <Navbar />
      <Hero />
    </section>
    <section id="Skills">
      <Skills />
    </section>
    <section id="Portfolio">
      <Parallax />
    </section>
    <section>
      <Portfolio />
    </section>
    <section>
      <About id ="A propos"/>
    </section>
    <section id="Contact">
      <Contact />
    </section>
  </div>;
};

export default App;
