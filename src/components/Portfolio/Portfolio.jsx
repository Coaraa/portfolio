import "./portfolio.scss";
import MyCarousel from './myCarousel/MyCarousel';

const Portfolio = () => {
  return (
    <div className="portfolio">
      <div className="textContrainer">
        <h1 className="mainTitle">Présentation de mes différents projets</h1>
      </div>
      <MyCarousel />
    </div>
  )
}

export default Portfolio
