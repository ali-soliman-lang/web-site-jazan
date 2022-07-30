import React, { useEffect, useRef, useState } from "react";
import { Fragment } from "react";
import "./ContactUs.css";

const ContactUs = () => {
  const inputMessage = useRef(null);
  const inputEmail = useRef(null);
  const inputFirstName = useRef(null);
  const inputSecondName = useRef(null);
  const inputPhone = useRef(null);
  const [counterLetter, setCounterLetter] = useState(0);

  const handleInputMessage = (e) => {
    setCounterLetter(inputMessage.current.value.length);
    if (inputMessage.current.value.length >= 1000 && e.key !== "Backspace")
      e.preventDefault();
  };

  const fetchDataForm = async () => {
    const data = await fetch("https://marsad.almofawter.net/api/Contacts", {
      method: "POST",
      headers: {
        accept: "application/json",
        "Content-type": "application/json",
      },
      body: JSON.stringify({
        name: inputFirstName.current.value,
        email: inputEmail.current.value,
        phone: inputPhone.current.value,
        message: inputMessage.current.value,
      }),
    });
    const res = await data.json();
    return res;
  };
  const formHandler = (e) => {
    e.preventDefault();
    fetchDataForm();
  };
  return (
    <Fragment>
      <div className="img-container">
        <div className="white-box">
          <section className="contact-us">
            <div className="container">
              <div className="row">
                <div className="col-md-6">
                  <div className="map-box">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d122161.0604080395!2d42.51841685392764!3d16.89897389963784!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1607e2973d13a0bb%3A0x35737d6f29786cf2!2sJazan%20Saudi%20Arabia!5e0!3m2!1sen!2seg!4v1658315688117!5m2!1sen!2seg"
                      width={350}
                      height={350}
                      title="jazan location"
                      allowFullScreen=""
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                    ></iframe>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-box">
                    <form onSubmit={formHandler}>
                      <div className="mb-3">
                        <label className="form-label">
                          الاسم
                          <span className="star-icon">*</span>
                        </label>
                        <div className="inputs-row">
                          <div className="first-name">
                            <input
                              type="text"
                              className="form-control"
                              id="FirstName"
                              ref={inputFirstName}
                            />
                            <label htmlFor="FirstName" className="form-label">
                              الاول
                            </label>
                          </div>
                          <div className="last-name">
                            <input
                              type="text"
                              className="form-control"
                              id="LastName"
                              ref={inputSecondName}
                            />
                            <label htmlFor="LastName" className="form-label">
                              الاخير
                            </label>
                          </div>
                        </div>
                      </div>
                      <div className="mb-3">
                        <div className="inputs-row">
                          <div className="email-input">
                            <label
                              htmlFor="email-input-id"
                              className="form-label"
                            >
                              البريد الالكترونى
                              <span className="star-icon">*</span>
                            </label>
                            <input
                              type="email"
                              className="form-control"
                              ref={inputEmail}
                            />
                          </div>
                          <div className="number-phone">
                            <label htmlFor="email-input" className="form-label">
                              رقم الهاتف
                              <span className="star-icon">*</span>
                            </label>
                            <input
                              type="text"
                              className="form-control"
                              ref={inputPhone}
                            />
                          </div>
                        </div>
                      </div>
                      <div className="mb-3">
                        <label htmlFor="textarea-id" className="form-label">
                          استفسارك
                          <span className="star-icon">*</span>
                        </label>
                        <textarea
                          className="form-control"
                          rows="6"
                          cols="50"
                          id="textarea-id"
                          placeholder="بحد اقصى 1000 حرف"
                          ref={inputMessage}
                          onKeyUp={(e) => handleInputMessage(e)}
                          onKeyDown={(e) => handleInputMessage(e)}
                        ></textarea>
                        <div className="counter-text">
                          {counterLetter} من 1000 حرف كحد أقصى
                        </div>
                      </div>
                      <button
                        type="submit"
                        className="btn btn-primary submit-btn"
                      >
                        ارسال
                      </button>
                    </form>
                  </div>
                </div>
              </div>
              <ul className="social-media">
                <li>
                  <a href="/">
                    <i className="fa-brands fa-facebook"></i>
                  </a>
                </li>
                <li>
                  <a href="/">
                    <i className="fa-brands fa-twitter"></i>
                  </a>
                </li>
                <li>
                  <a href="/">
                    <i className="fa-brands fa-youtube"></i>
                  </a>
                </li>
                <li>
                  <a href="/">
                    <i className="fa-brands fa-whatsapp"></i>
                  </a>
                </li>
              </ul>
            </div>
          </section>
        </div>
      </div>
    </Fragment>
  );
};

export default ContactUs;
