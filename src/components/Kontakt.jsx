import "../style/kontakt.scss";
import React from "react";
import Iframe from "react-iframe";
// import { useForm } from "react-hook-form";
import ContactForm from "./content/Form"
import { Row, Col } from "react-bootstrap";


const Kontakt = () => {

  return (
    <section className="kontakt  section" id="nav-kontakt">
      <Row className="kontakt__container">
        <Col xs={12} md={6}>
          <Row className="justify-contet-center pb-md-4 pt-md-5 m-0">
            <h2 className="kontakt__h2 title  pt-1 pb-0 text-center text-md-start  pb-3 pb-md-3 ps-sm-5">Kontakt</h2>

            <Col xs={12} sm={6} md={12} className="text-center text-sm-start kontakt__info pb-md-3 order-1  pb-0 ps-3  ps-sm-5 ">
              <a href="/">
                <i className="bx bx-map bx-tada-hover "></i>
                <p>Grydhøj 16, 6000 Kolding</p>
              </a>
              <a href="/">
                <i className="bx bx-phone bx-tada-hover"></i>
                <p>32 70 14 94</p>
              </a>
              <a href="/">
                <i className="bx bx-envelope bx-tada-hover"></i>
                <p>info@coachkolding.dk</p>
              </a>
            </Col>


            <Col xs={12} sm={6} className="kontakt__map order-2 d-md-none ">
              <Iframe
                className=" h-100 w-100 pe-1 "
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2258.3565574705253!2d9.467072416023282!3d55.526158380493285!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x464c9e5359e6d273%3A0xc5f8b0a835dc6087!2sGrydh%C3%B8j%2016%2C%206000%20Kolding!5e0!3m2!1sda!2sdk!4v1649070499669!5m2!1sda!2sdk"
                allowFullscreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></Iframe>
            </Col>
            <Col xs={12} sm={12} className=" kontakt__form order-3 order-md-2 p-0  pt-3 m-auto">

              <ContactForm />


            </Col>
          </Row>
        </Col>

        <Col xs={0} md={5} className="d-none d-md-block map-desktop">
          <Iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2258.3565574705253!2d9.467072416023282!3d55.526158380493285!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x464c9e5359e6d273%3A0xc5f8b0a835dc6087!2sGrydh%C3%B8j%2016%2C%206000%20Kolding!5e0!3m2!1sda!2sdk!4v1649070499669!5m2!1sda!2sdk"
            allowFullscreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="map-desktop__iframe w-100 h-75"
          ></Iframe>
        </Col>
      </Row>

    </section >
  );

}
export default Kontakt;
