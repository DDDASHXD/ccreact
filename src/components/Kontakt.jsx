import "../style/kontakt.scss";
import React, { useState } from "react";
import Iframe from "react-iframe";
import { useForm } from "react-hook-form";
import {
    Container,
    Row,
    Col,
    Form,
    ThemeProvider,
    FormText,
} from "react-bootstrap";
//import { yupResolver } from "@hookform/resolvers/yup";
//import * as yup from "yup";

const Kontakt = () => {
    /*const schema = yup.object().shape({
        firstName: yup.string().min(3).required("skriv dit navn"),
        age: yup.number("must be a number").required("is required").positive(),
        //   .min(0, "Du skal være over 0")
        //   .max(22, "du skal være under 23"),
    });
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({ resolver: yupResolver(schema) });

    const onSubmit = (data) => {
        console.log(data);
    };*/

    return (
        <section className="kontakt">
            <div>
                <h2 className="title">Kontakt</h2>

                <div className="contact__info">
                    <a href="/">
                        <i className="bx bx-pin"></i>
                        Grydhøj 16, 6000 Kolding
                    </a>
                    <a href="/">
                        <i className="bx bx-pin"></i>
                        Grydhøj 16, 6000 Kolding
                    </a>
                    <a href="/">
                        <i className="bx bx-pin"></i>
                        Grydhøj 16, 6000 Kolding
                    </a>
                </div>

                {/*<div className="kontakt__form">
                    <Form
                        className="form block-example grid"
                        onSubmit={handleSubmit(onSubmit)}
                    >
                        <Row>
                            <Col xs={6}>
                                <label>Fornavn</label>
                                <input
                                    {...register(
                                        "firstName"
                                        // { required: true, maxLength: 50 }
                                    )}
                                    className="form-control"
                                    id="firstName"
                                    type="firstName"
                                />
                                <FormText color="muted">
                                    {errors.firstName?.message}{" "}
                                </FormText>
                            </Col>
                            <Col xs={6}>
                                <label>Efternavn</label>
                                <input
                                    {...register(
                                        "lastname"
                                        // { required: true, maxLength: 50 }
                                    )}
                                    className="form-control"
                                    id="lastname"
                                    type="lastName"
                                />
                                <FormText color="muted">
                                    {errors.lastName?.message}{" "}
                                </FormText>
                            </Col>
                            <Col xs={6}></Col>
                            <Col xs={6}></Col>
                            <Col xs={12}></Col>
                        </Row>

                        <div className="form-group form-check">
                            <input
                                name="terms"
                                type="checkbox"
                                {...register("terms")}
                                id="terms"
                                classNam
                                e={`form-check-input ${
                                    errors.terms ? "is-invalid" : ""
                                }`}
                            />{" "}
                            <label>Accept Terms & Conditions</label>
                            <div className="invalid-feedback">
                                {errors.terms?.message}
                            </div>
                        </div>

                        <button className="form__btn">Send</button>
                    </Form>
                </div>*/}
            </div>

            <div className="contact__map">
                <Iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2258.3565574705253!2d9.467072416023282!3d55.526158380493285!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x464c9e5359e6d273%3A0xc5f8b0a835dc6087!2sGrydh%C3%B8j%2016%2C%206000%20Kolding!5e0!3m2!1sda!2sdk!4v1649070499669!5m2!1sda!2sdk"
                    allowfullscreen=""
                    loading="lazy"
                    referrerpolicy="no-referrer-when-downgrade"
                ></Iframe>
            </div>
        </section>
    );
};
export default Kontakt;
