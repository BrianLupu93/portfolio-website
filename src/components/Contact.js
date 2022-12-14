import React from "react";

const Contact = () => {
  return (
    <div className="contact" id="contact">
      <div className="text-center">
        <h1>get in touch</h1>
        <p>
          Please fill out the form and tell me how can I help you. I'll contact
          you as soon as posible.
        </p>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-md-6 col-xs-12">
            <div className="text-center">
              <input
                type="text"
                className="form-control"
                placeholder="Name"
                name="name"
              />
              <div className="line"></div>
            </div>

            <div className="text-center">
              <input
                type="text"
                className="form-control"
                placeholder="Phone Number"
                name="phone"
              />
              <div className="line"></div>
            </div>

            <div className="text-center">
              <input
                type="email"
                className="form-control"
                placeholder="E-mail"
                name="email"
              />
              <div className="line"></div>
            </div>

            <div className="text-center">
              <input
                type="text"
                className="form-control"
                placeholder="Subject"
                name="subject"
              />
              <div className="line"></div>
            </div>
          </div>

          <div className="col-md-6 col-xs-12">
            <div className="text-center">
              <textarea
                typeof="text"
                className="form-control"
                placeholder="Please describe shortly your project..."
                name="subject"
              ></textarea>
              <div className="line"></div>
            </div>

            <button className="btn-main-offer contact-btn" type="submit">
              SEND
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
