import "./projects.scss";
import Carousel from './Carousel/Carousel';

const Projects = () => {
  return (
    <div className="projects">
      <div className="textContainer">
        <h1 className="mainTitle">Mes différents projets</h1>
      </div>
      <Carousel />
    </div>
  )
}

export default Projects
