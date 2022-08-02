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
    <nav
      className={`nav  navbar navbar-expand-lg fixed-top p1     ${scrolled ? "scrolled" : ""}`}
    >
      <div className=" container-fluid px-0">
        <figure
          className="
          col-2 p-0 m-0 ps-1
          col-sm-2  
          col-md-2 ps-md-4  pt-md-0
          col-lg-2  pt-lg-2 pe-lg-5
          col-xl-2 ps-xl-5 pt-xl-0
          "
        >
          <img src={logo} alt="Coach Kolding " className="w-100 " />
        </figure>
        <div className="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <i className='bx bx-menu burger'></i>
        </div>

        <div className="mobile-menu collapse navbar-collapse " id="navbarNav">
          <div className="gap-lg-5 nav__container justify-content-end">
            <ul className="navbar-nav pb-3
   justify-content-end d-flex pt-lg-3 gap-lg-5 pb-lg-1 pb-lg-3
           ">

              <li className="nav-item  navlink nav-hjem">
                <a className="nav-link" href="#nav-hjem">Hjem</a>
              </li>

              <li className="nav-item navlink nav-omkring">
                <a className="nav-link" href="#nav-omkring">Omkring</a>
              </li>

              <li className="nav-item navlink nav-behandlinger">
                <a className="nav-link" href="#nav-behandlinger">Behandlinger</a>
              </li>

              <li className="nav-item navlink nav-kontakt">
                <a className="nav-link" href="#nav-kontakt">Kontakt</a>
              </li>

            </ul>

            <div

              className=" d-flex justify-content-center "
            >
              <a target="_blank" className=" button nav__btn" href="/bestilling">
                Bestil tid
              </a>
            </div>
          </div>
          {/* <div className=" mx-auto mx-lg-0"> */}

        </div>
        {/* </div> */}
      </div>

    </nav >
  );
};

export default MyNav;
