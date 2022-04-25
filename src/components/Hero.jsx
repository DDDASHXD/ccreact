import "../style/hero.scss";
import data from "../assets/text.json";
// import { Navbar } from "react-bootstrap";

const Hero = () => {
  return (
    <main className="hero container-fluid">
      <div className="hero__container col-11 col-md-8 col-lg-5">
        <h1>{data.home.title}</h1>
        <span>{data.home.subtitle}</span>
        <p>{data.home.description}</p>
        {/* <a href="">se behandlinger</a> */}
      </div>
    </main>
  );
};

export default Hero;
