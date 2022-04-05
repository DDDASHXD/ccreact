import { Navbar } from "react-bootstrap";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../style/nav.scss";
// import { Navbar, Container } from "react-bootstrap";
// import { BrowserRouter as Link } from "react-router-dom";

const MyNav = () => {
  return (
    <Navbar className="nav fixed-top" expand="lg">
      <figure className="nav__logo">logo</figure>

      <Navbar.Collapse id="basic-navbar-nav">
        <nav>
          <ul>
            <li>
              <a href="/">Home</a>
            </li>

            <li>
              <a href="/">omkring</a>
            </li>

            <li>
              <a href="/">behnadlinger</a>
            </li>

            <li>
              <a href="/">kontakt</a>
            </li>
          </ul>
        </nav>
      </Navbar.Collapse>
      <button className="nav__btn">Bestil tid</button>
    </Navbar>
  );
};

export default MyNav;
