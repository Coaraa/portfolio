import "./app.scss";
import Hero from "./components/Hero/Hero";
import Navbar from "./components/Navbar/Navbar";
import Contact from "./components/Contact/Contact";
import Portfolio from "./components/Portfolio/Portfolio";
import About from "./components/About/About";
import Parallax from "./components/Parallax/Parallax";

const App = () => {
  return <div>
    <section id="Home">
      <Navbar />
      <Hero />
    </section>
    <section id="Portfolio">
      <Parallax type="portfolio"/>
    </section>
    <section>
      <Portfolio/>
    </section>
    <section id="À propos">
      <Parallax type="about"/>
    </section>
    <section>
      <About />
    </section>
    <section id="Contact">
      <Contact />
    </section>
  </div>;
};

export default App;
