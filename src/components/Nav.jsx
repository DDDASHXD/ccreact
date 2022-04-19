import { Navbar, Row, Col } from "react-bootstrap";
import logo from "../assets/logo.svg";

import "../style/nav.scss";
// import { Navbar, Container } from "react-bootstrap";
// import { BrowserRouter as Link } from "react-router-dom";

const MyNav = () => {
  return (
    <Navbar fluid className="nav fixed-top p-1 " expand="lg">
      <figure className="col-1">
        <img src={logo} alt="Coach Kolding logo" className="w-100 m-5" />
      </figure>

      <Navbar.Toggle aria-controls="basic-navbar-nav" />

      <Navbar.Collapse id="basic-navbar-nav" className="col-10">
        <nav className="col-10 pe-md-5">
          <ul className="justify-content-end">
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

        <Col className="col-2 d-flex justify-content-center">
          <button className="nav__btn">Bestil tid</button>
        </Col>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default MyNav;
