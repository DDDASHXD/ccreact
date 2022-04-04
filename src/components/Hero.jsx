import "../style/hero.scss";
import data from "../assets/text.json";

const Hero = () => {
  return (
    <main className="hero">
      <div className="hero__container">
        <h1>{data.home[0].title}</h1>
        <span>{data.home[0].subtitle}</span>
        <p>{data.home[0].description}</p>
      </div>
    </main>
  );
};

export default Hero;
