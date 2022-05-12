import React, { useState } from "react";
import "../../style/kontakt.scss"
import { Col, Row } from "react-bootstrap";

const FORM_ENDPOINT = ""; // TODO - fill on the later step

const ContactForm = () => {
    const [submitted, setSubmitted] = useState(false);
    const handleSubmit = () => {
        setTimeout(() => {
            setSubmitted(true);
        }, 100);
    };

    if (submitted) {
        return (
            <>
                <div className="text-2xl">Thank you!</div>
                <div className="mb-2 mb-sm-3">We'll be in touch soon.</div>
            </>
        );
    }
    return (
        <form className="form"
            action={FORM_ENDPOINT}
            onSubmit={handleSubmit}
            method="POST"
            target="_blank"
        >

            <Row className="  m-0">
                <Col xs={6} className="mb-2 mb-sm-3 pt-0">
                    <label className="form__label">Fornavn</label>
                    <input
                        type="text"

                        name="firstName"
                        className="form__input"
                        required
                    />
                </Col>
                <Col xs={6} className="mb-2 mb-sm-3 pt-0">
                    <label className="form__label">Efternavn</label>
                    <input
                        type="text"

                        name="lastName"
                        className="form__input"
                        required
                    />
                </Col>
            </Row>
            <Row className="  m-0">
                <Col xs={6} className="mb-2 mb-sm-3 pt-0">
                    <label className="form__label">Email</label>
                    <input
                        type="email"

                        name="email"
                        className="form__input"
                        required
                        pattern="/^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}
                        [a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/"
                    />
                </Col>
                <Col xs={6} className="mb-2 mb-sm-3 pt-0">
                    <label className="form__label">Tlf nummer</label>
                    <input

                        type="number"

                        className="form__input"
                        required
                        id="phone"
                        name="phone"
                        pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"
                    />
                </Col>
            </Row>

            <Col xs={12} className="px-3 mb-3 pt-0">
                <label className="form__label">Besked</label>
                <textarea

                    name="message"
                    className="form__text-area"
                    required
                />
            </Col>

            <div className="ps-3 mb-3 pt-2 pt-md-0">
                <a href="/" className="button form__btn">Send</a>


            </div>


        </form >
    );
};

export default ContactForm;

