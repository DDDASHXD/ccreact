import React, { useState } from "react";
import "../../style/kontakt.scss"

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
                <div className="text-md">We'll be in touch soon.</div>
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
            <div className="mb-3 pt-0">
                <input
                    type="text"
                    placeholder="Your name"
                    name="firstName"
                    className="input "
                    required
                />
            </div>
            <div className="mb-3 pt-0">
                <input
                    type="text"
                    placeholder="Your name"
                    name="lastName"
                    className="input "
                    required
                />
            </div>
            <div className="mb-3 pt-0">
                <input
                    type="email"
                    placeholder="Email"
                    name="email"
                    className="input"
                    required
                    pattern="/^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}
                        [a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/"
                />
            </div>
            <div className="mb-3 pt-0">
                <label htmlFor=""></label>
                <input

                    type="number"
                    placeholder="tel"
                    className="input"
                    required
                    id="phone"
                    name="phone"
                    pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"
                />
            </div>
            <div className="mb-3 pt-0">
                <textarea
                    placeholder="Your message"
                    name="message"
                    className="text-area"
                    required
                />
            </div>
            <div className="mb-3 pt-0">
                <button
                    className="form__btn"
                    type="submit"
                >
                    Send a message
                </button>
            </div>
        </form>
    );
};

export default ContactForm;

