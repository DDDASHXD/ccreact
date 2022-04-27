import { Navbar, Row, Col } from "react-bootstrap";
import logo from "../assets/logo.svg";

import "../style/nav.scss";
// import { Navbar, Container } from "react-bootstrap";
// import { BrowserRouter as Link } from "react-router-dom";

const MyNav = () => {
  return (
    <Navbar  className="nav fluid fixed-top p-1 " expand="lg">
      <figure className="col-3 col-md-2 col-lg-1  ps-3">
        <img src={logo} alt="Coach Kolding logo" className="w-100 " />
      </figure>

      <Navbar.Toggle aria-controls="basic-navbar-nav" />

      <Navbar.Collapse xs={10} id="basic-navbar-nav">
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
