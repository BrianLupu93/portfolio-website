import React from "react";
import brian from "../images/brian.jpg";

const About = () => {
  return (
    <>
      <div className="py-5 team4">
        <div className="container">
          <div className="row justify-content-center mb-4">
            <div className="col-md-7 text-center">
              <h1 className="mb-3">What about me?</h1>
            </div>
          </div>
          <div div className="row">
            <div className="col">
              <div className="row">
                <div className="col-md-12">
                  <img
                    src={brian}
                    alt="wrapkit"
                    className="img-fluid rounded-circle"
                  />
                </div>
              </div>
            </div>
            <div className="col align-self-center">
              <div className="col ">
                <div className="col-md-12 text-center ">
                  <h3 className="mt-4 font-weight-medium mb-0">Brian Lupu</h3>
                  <h6 className="subtitle mb-3">Front-End Developer</h6>
                  <p>
                    You can relay on our amazing features list and also our
                    customer services will be great experience. You can relay on
                    our amazing features list and also our customer services
                    will be great experience. You can relay on our amazing
                    features list and also our customer services will be great
                    experience. You can relay on our amazing features list and
                    also our customer services will be great experience. You can
                    relay on our amazing features list and also our customer
                    services will be great experience.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
