import "../style/kontakt.scss";
import React, { useState } from "react";
import Iframe from "react-iframe";
import { useForm } from "react-hook-form";

import { Row, Col, Form, Container } from "react-bootstrap";
import "../../node_modules/bootstrap/dist/css/bootstrap.css";

const Kontakt = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);
  console.log(errors);

  return (
    <section fluid className="kontakt p-md-5 section" id="nav-kontakt">
      <Row className="justify-contet-center pt-4 pt-md-5">
        <h2 className="title text-center text-md-start">Kontakt</h2>
        {/* <Col xs={12} md={6} className="kontakt__container p-4"> */}
        {/* <Row className="ps-md-5 justify-content-center"> */}
        <Col xs={6} md={6} className="pb-md-5 order-1 px-3 pb-0">
          <Row>
            <Col className="kontakt__info">
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
          </Row>
        </Col>

        <Col xs={12} md={6} className="kontakt__form order-3 order-md-2 px-5">
          <Form className="form">
            <Row>
              <Col xs={6} className="p-0 pe-2">
                <Form.Group className="mb-3" controlId="formGroupEmail">
                  <Form.Label className="ps-1 m-0">Fornavn</Form.Label>
                  <Form.Control type="firstName" />
                </Form.Group>
              </Col>

              <Col xs={6} className="p-0">
                <Form.Group className="mb-3" controlId="formGroupPassword">
                  <Form.Label className="ps-1 m-0">Efternavn</Form.Label>
                  <Form.Control type="lastName" />
                </Form.Group>
              </Col>

              <Col xs={6} className="p-0 pe-2">
                <Form.Group className="mb-3" controlId="formGroupEmail">
                  <Form.Label className="ps-1 m-0">Email address</Form.Label>
                  <Form.Control type="email" />
                </Form.Group>
              </Col>

              <Col xs={6} className="p-0">
                <Form.Group className="mb-3" controlId="formGroupPassword">
                  <Form.Label className="ps-1 m-0">Telefon nummer</Form.Label>
                  <Form.Control
                    type="tel"
                    {...register("Mobile number", {
                      required: true,
                      minLength: 6,
                      maxLength: 12,
                    })}
                  />
                </Form.Group>
              </Col>

              <Col xs={12} className="p-0">
                <Form.Group
                  className="mb-3"
                  controlId="exampleForm.ControlTextarea1"
                >
                  <Form.Label className="ps-1 m-0">Besked</Form.Label>
                  <Form.Control
                    className="text-area"
                    type="text"
                    as="textarea"
                    rows={3}
                    // placeholder="Skriv din besked her ..."
                  />
                </Form.Group>
              </Col>
            </Row>

            {/* <div className="form__row">
                    <div className="col">
                      <label htmlFor="">Fornavn</label>
                      <input type="text" />
                    </div>
                    <div className="col">
                      <label htmlFor="">Fornavn</label>
                      <input type="text" />
                    </div>
                  </div>
                  <div className="form__row">
                    <div className="col">
                      <label htmlFor="">Fornavn</label>
                      <input type="text" />
                    </div>
                    <div className="col">
                      <label htmlFor="">Fornavn</label>
                      <input type="text" />
                    </div>
                  </div>

                  <div className="col">
                    <label htmlFor="">Fornavn</label>
                    <input
                      type="text"
                      placeholder="Skriv din besked her . . . "
                    />
                  </div>

                  <button className="form__btn">Send</button> */}
          </Form>
        </Col>
        {/* </Row> */}
        {/* </Col> */}

        <Col xs={6} md={12} className="kontakt__map order-2 order-md-3">
          <Iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2258.3565574705253!2d9.467072416023282!3d55.526158380493285!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x464c9e5359e6d273%3A0xc5f8b0a835dc6087!2sGrydh%C3%B8j%2016%2C%206000%20Kolding!5e0!3m2!1sda!2sdk!4v1649070499669!5m2!1sda!2sdk"
            allowFullscreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></Iframe>
        </Col>
      </Row>
    </section>
  );
};
export default Kontakt;
