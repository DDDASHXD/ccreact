import MyNav from "../components/Nav.jsx";
import Hero from "../components/Hero.jsx";
import Omkring from "../components/Omkring.jsx";
import Behandlinger from "../components/Behandlinger.jsx";
import Kontakt from "../components/Kontakt.jsx";
import Footer from "../components/Footer.jsx";
import Quote from "../components/Quote.jsx";

const Landing = (props) => {
  return (
    <div>
      <MyNav />
      <Hero />
      <Omkring />
      <Behandlinger />
      <Quote />
      <Kontakt />
      <Footer />
    </div>
  );
};

export default Landing;
