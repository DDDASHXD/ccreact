import "../style/kontakt.scss";
import { React, useState } from "react";
import Iframe from "react-iframe";

const FORM_ENDPOINT = "";

const Kontakt = () => {
  const [submitted, setSubmitted] = useState(false);
  const handleSubmit = () => {
    setTimeout(() => {
      setSubmitted(true);
    }, 100);
  };

  if (submitted) {
    return (
      <>
        <div className="text-2xl">Tak for beskeden!</div>
        <div className="text-md">We'll be in touch soon.</div>
      </>
    );
  }

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

        <div className="kontakt__form">
          <form
            action={FORM_ENDPOINT}
            onSubmit={handleSubmit}
            method="POST"
            target="_blank"
          >
            <div className="mb-3 pt-0">
              <input
                type="text"
                placeholder="Navn"
                name="name"
                className="px-3 py-3 placeholder-gray-400 text-gray-600 relative bg-white bg-white rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring w-full"
                required
              />
            </div>
            <div className="mb-3 pt-0">
              <input
                type="email"
                placeholder="Email"
                name="email"
                className="px-3 py-3 placeholder-gray-400 text-gray-600 relative bg-white bg-white rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring w-full"
                required
              />
            </div>
            <div className="mb-3 pt-0">
              <textarea
                placeholder="Din besked"
                name="message"
                className="kontakt__input"
                required
              />
            </div>
            <div className="mb-3 pt-0">
              <button
                className="bg-blue-500 text-white active:bg-blue-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                type="submit"
              >
                Send a message
              </button>
            </div>
          </form>
        </div>
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
