import "./portfolio.scss";
import MyCarousel from './myCarousel/MyCarousel';

const Portfolio = () => {
  return (
    <div className="portfolio">
      <div className="textContainer">
        <h1 className="mainTitle">Mes différents projets</h1>
      </div>
      <MyCarousel />
    </div>
  )
}

export default Portfolio
