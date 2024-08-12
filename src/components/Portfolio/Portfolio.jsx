import "./portfolio.scss";
import MyCarousel from './myCarousel/MyCarousel';
import Carousel from './newCarousel/Carousel';

const Portfolio = () => {
  return (
    <div className="portfolio">
      <div className="textContainer">
        <h1 className="mainTitle">Mes différents projets</h1>
      </div>
      {/* <MyCarousel /> */}
      <Carousel />
    </div>
  )
}

export default Portfolio
