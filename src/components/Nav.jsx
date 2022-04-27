import { Navbar, Row, Col } from "react-bootstrap";
import logo from "../assets/logo.svg";
import React, { useEffect, useState } from "react";

import "../style/nav.scss";
// import { Navbar, Container } from "react-bootstrap";
// import { BrowserRouter as Link } from "react-router-dom";

const MyNav = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const sections = document.querySelectorAll("section");
    const navLi = document.querySelectorAll(".navlink");

    window.onscroll = () => {
      var current = "";
      var currentScrollPos = window.pageYOffset;

      sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        if (window.pageYOffset >= sectionTop - 300) {
          current = section.getAttribute("id");
        }
      });

      navLi.forEach((li) => {
        li.classList.remove("current");
        if (li.classList.contains(current)) {
          li.classList.add("current");
        }
      });

      if (currentScrollPos > 50) {
        setScrolled(true);
      } else if (currentScrollPos < 50) {
        setScrolled(false);
      }
      let prevScrollpos = currentScrollPos;
    };
  });

  return (
    <Navbar
      fluid="true"
      className={`nav fixed-top p1 ${scrolled ? "scrolled" : ""}`}
      expand="lg"
    >
      <figure className="col-3 col-md-2 col-lg-1 ">
        <img src={logo} alt="Coach Kolding logo" className="w-100 " />
      </figure>
      <div className="a"></div>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />

      <Navbar.Collapse xs={10} id="basic-navbar-nav">
        <nav className="col-10 pe-md-5">
          <ul className="justify-content-end">
            <li className="navlink nav-hjem">
              <a href="/">Hjem</a>
            </li>

            <li className="navlink nav-omkring">
              <a href="/">omkring</a>
            </li>

            <li className="navlink nav-behandlinger">
              <a href="/">behnadlinger</a>
            </li>

            <li className="navlink nav-kontakt">
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
