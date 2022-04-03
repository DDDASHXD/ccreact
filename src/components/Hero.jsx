import "../style/hero.scss";
import data from "../assets/text.json";

const Hero = () => {
  return (
    <div className="hero">
      <div className="hero__container">
        <h1 className="hero__title">{data.home[0].title}</h1>
        <span className="hero__subtitle">{data.home[0].subtitle}</span>
        <p className="home__description">{data.home[0].description}</p>
      </div>
    </div>
  );
};

export default Hero;
