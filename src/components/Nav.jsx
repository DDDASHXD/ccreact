import { Navbar } from "react-bootstrap";
import "../style/nav.scss";
// import { Navbar, Container } from "react-bootstrap";
// import { BrowserRouter as Link } from "react-router-dom";

const Nav = () => {
  return (
    <Navbar className="nav" expand="lg">
      <figure className="nav__logo">logo</figure>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <nav>
          <ul>
            <li>
              <a href="">Home</a>
            </li>

            <li>
              <a href="">omkring</a>
            </li>

            <li>
              <a href="">behnadlinger</a>
            </li>

            <li>
              <a href="">kontKT</a>
            </li>
          </ul>
        </nav>
      </Navbar.Collapse>
      <button className="nav__btn"></button>
    </Navbar>
  );
};

export default Nav;
