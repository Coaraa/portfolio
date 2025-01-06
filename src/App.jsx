import "./app.scss";
import Hero from "./components/Hero/Hero";
import Navbar from "./components/Navbar/Navbar";
import Contact from "./components/Contact/Contact";
import Projects from "./components/Projects/Projects";
import About from "./components/About/About";
import Technologies from "./components/Technologies/Technologies";

const App = () => {
  return <div>
    <section id="Home">
      <Navbar />
      <Hero />
    </section>
    <section>
      <About id ="About"/>
    </section>
    {/*<section id="Projects">
      <Projects />
    </section>
    <section>
      <Technologies />
    </section>
    <section id="Contact">
      <Contact />
    </section> */}
  </div>;
};

export default App;
