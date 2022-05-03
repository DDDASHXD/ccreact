import MyNav from "../components/Nav.jsx";
import Hero from "../components/Hero.jsx";
import Omkring from "../components/Omkring.jsx";
import Behandlinger from "../components/Behandlinger.jsx";
import Kontakt from "../components/Kontakt.jsx";
import Footer from "../components/Footer.jsx";
import Quote from "../components/content/Quote.jsx";
import "../style/main.scss";

const Landing = (props) => {
  return (
    <div>
      <MyNav />
      <Hero />
      <Omkring />
      <Behandlinger />
      <Kontakt />
      <Quote />
      <Footer />
    </div>
  );
};

export default Landing;
