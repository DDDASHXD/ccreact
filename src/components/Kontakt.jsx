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
    <section className="kontakt">
      <Container fluid>
        <Row className="justify-contet-center">
          <Col xs={12} md={6} className="kontakt__container">
            <h2 className="title text-xs-center text-md-center">Kontakt</h2>
            <Row>
              <Col xs={5} md={12}>
                <Row>
                  <Col className="kontakt__info">
                    <a href="/">
                      <i className="bx bx-map bx-tada-hover "></i>
                      <p>Grydhøj 16, 6000 Kolding</p>
                    </a>
                    <a href="/">
                      <i className="bx bx-phone bx-tada-hover"></i>
                      <p>Grydhøj 16, 6000 Kolding</p>
                    </a>
                    <a href="/">
                      <i className="bx bx-envelope bx-tada-hover"></i>
                      <p>Grydhøj 16, 6000 Kolding</p>
                    </a>
                  </Col>
                </Row>
              </Col>

              <Col xs={7} md={12} className="kontakt__form">
                <Form className="form ">
                  <Row>
                    <Col xs={6}>
                      <Form.Group className="mb-3" controlId="formGroupEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" />
                      </Form.Group>
                    </Col>

                    <Col xs={6}>
                      <Form.Group
                        className="mb-3"
                        controlId="formGroupPassword"
                      >
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" />
                      </Form.Group>
                    </Col>

                    <Col xs={6}>
                      <Form.Group className="mb-3" controlId="formGroupEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" />
                      </Form.Group>
                    </Col>

                    <Col xs={6}>
                      <Form.Group
                        className="mb-3"
                        controlId="formGroupPassword"
                      >
                        <Form.Label>Tlf nummer</Form.Label>
                        <Form.Control
                          type="tel"
                          placeholder="Mobile number"
                          {...register("Mobile number", {
                            required: true,
                            minLength: 6,
                            maxLength: 12,
                          })}
                        />
                      </Form.Group>
                    </Col>

                    <Col xs={12}>
                      <Form.Group
                        className="mb-3"
                        controlId="formGroupPassword"
                      >
                        <Form.Label>Password</Form.Label>
                        <Form.Control
                          as="textarea"
                          rows={3}
                          placeholder="Wrie"
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
            </Row>
          </Col>

          <Col xs={12} md={6} className="kontakt__map">
            <Iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2258.3565574705253!2d9.467072416023282!3d55.526158380493285!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x464c9e5359e6d273%3A0xc5f8b0a835dc6087!2sGrydh%C3%B8j%2016%2C%206000%20Kolding!5e0!3m2!1sda!2sdk!4v1649070499669!5m2!1sda!2sdk"
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></Iframe>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
export default Kontakt;
