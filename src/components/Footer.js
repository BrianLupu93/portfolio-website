import React from "react";
import {
  FacebookShareButton,
  FacebookIcon,
  TwitterShareButton,
  TwitterIcon,
  LinkedinShareButton,
  LinkedinIcon,
} from "react-share";

const Footer = () => {
  return (
    <div className="footer">
      <div className="container">
        <div className="row">
          <div className="col-lg-4 col-md-6 col-sm-6">
            <div className="d-flex">
              <p>Timisoara, Romania</p>
            </div>
            <div className="d-flex">
              <a href="+40734253143">+(40)734 253 143 </a>
            </div>
            <div className="d-flex">
              <p>E-mail: brianlupu@gmail.com</p>
            </div>
          </div>
          <div className="col-lg-3 col-md-2 col-sm-6">
            <div className="row">
              <div className="col">
                <a href="#" className="footer-nav">
                  Home
                </a>
                <br />
                <a href="#about" className="footer-nav">
                  About me
                </a>
                <br />
                <a href="#services" className="footer-nav">
                  Services
                </a>
              </div>
              <div className="col">
                <a href="#experience" className="footer-nav">
                  Experience
                </a>
                <br />
                <a href="#portfolio" className="footer-nav">
                  Portfolio
                </a>
                <br />
                <a href="#contact" className="footer-nav">
                  Contact
                </a>
              </div>
            </div>
          </div>
          <div className="col-lg-5 col-md-5 col-sm-6 align-items-center">
            <div className="d-flex justify-content-center">
              <FacebookShareButton>
                <FacebookIcon className="mx-3" size={36} />
              </FacebookShareButton>
              <TwitterShareButton>
                <TwitterIcon className="mx-3" size={36} />
              </TwitterShareButton>
              <LinkedinShareButton
                url={"https://www.linkedin.com/in/brian-lupu-491171194"}
              >
                <LinkedinIcon className="mx-3" size={36} />
              </LinkedinShareButton>
            </div>
            <p className="pt-3 text-center">
              Copyright&copy;
              {new Date().getFullYear()}&nbsp;Brian Lupu Web development
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
