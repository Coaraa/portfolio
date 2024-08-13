import "./portfolio.scss";
import Carousel from './Carousel/Carousel';

const Portfolio = () => {
  return (
    <div className="portfolio">
      <div className="textContainer">
        <h1 className="mainTitle">Mes différents projets</h1>
      </div>
      <Carousel />
    </div>
  )
}

export default Portfolio
