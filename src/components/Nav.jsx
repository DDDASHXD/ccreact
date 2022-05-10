import { Navbar, Col } from "react-bootstrap";
import logo from "../assets/logo.svg";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

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
      <figure className="
      col-2 p-0 m-0 ps-1
      col-sm-2  
      col-md-2 ps-md-4  pt-md-0
      col-lg-2  pt-lg-2 pe-lg-5
      col-xl-2 ps-xl-5 pt-xl-0
      ">
        <img src={logo} alt="Coach Kolding " className="w-100 " />
      </figure>
      <Navbar.Toggle className="border-0 pe-2 py-0 my-0 " aria-controls="basic-navbar-nav" />

      <Navbar.Collapse xs={12} id="basic-navbar-nav">
        <Col xs={12} className="" >
          <nav className="px-1 pe-md-5 nav__bg">
            <ul className="justify-content-end d-flex gap-4 gap-md-5 pt-lg-3 pb-1 pb-lg-0">
              <li className="navlink nav-hjem">
                <a href="#nav-hjem">Hjem</a>
              </li>

              <li className="navlink nav-omkring">
                <a href="#nav-omkring">Omkring</a>
              </li>

              <li className="navlink nav-behandlinger">
                <a href="#nav-behandlinger">Behandlinger</a>
              </li>

              <li className="navlink nav-kontakt">
                <a href="#nav-kontakt">Kontakt</a>
              </li>
              <div className="  d-flex justify-content-center d-lg-none">
                <a target="_blank" className=" button nav__btn" href="#bestilling">
                  Bestil tid
                </a>
              </div>
            </ul>

          </nav>
        </Col>



      </Navbar.Collapse>
      <Col xs={1} className=" col-2 d-flex justify-content-center d-none d-lg-block">
        <a target="_blank" className=" button nav__btn" href="#bestilling">
          Bestil tid
        </a>
      </Col>
    </Navbar>
  );
};

export default MyNav;
