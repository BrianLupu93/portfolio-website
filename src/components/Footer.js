import React, { useState } from "react";
import { Link } from "react-scroll";
import {
  FacebookShareButton,
  FacebookIcon,
  TwitterShareButton,
  TwitterIcon,
  LinkedinShareButton,
  LinkedinIcon,
} from "react-share";

const Footer = () => {
  const [windowWidth] = useState(window.screen.width);

  return (
    <div className="footer">
      <div className="container">
        <div className="row justify-content-center">
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
          <div className="col-lg-3 col-md-2 col-sm-6 mt-3">
            <div className="row">
              <div className="col">
                <Link
                  to="home"
                  smooth={true}
                  offset={-400}
                  className="footer-nav"
                >
                  Home
                </Link>
                <br />
                <Link
                  to="about"
                  smooth={true}
                  offset={windowWidth > 415 ? -82 : -307}
                  className="footer-nav"
                >
                  About me
                </Link>
                <br />
                <Link
                  to="services"
                  smooth={true}
                  offset={windowWidth > 415 ? 133 : -38}
                  className="footer-nav"
                >
                  Services
                </Link>
              </div>
              <div className="col">
                <Link
                  to="experience"
                  smooth={true}
                  offset={windowWidth > 415 ? -84 : -307}
                  className="footer-nav"
                >
                  Experience
                </Link>
                <br />
                <Link
                  to="portfolio"
                  smooth={true}
                  offset={windowWidth > 415 ? 148 : -84}
                  className="footer-nav"
                >
                  Portfolio
                </Link>
                <br />
                <Link
                  to="contact"
                  offset={windowWidth > 415 ? -80 : -304}
                  smooth={true}
                  className="footer-nav"
                >
                  Contact
                </Link>
              </div>
            </div>
          </div>
          <div className="col-lg-5 col-md-5 col-sm-6 align-items-center mt-4">
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
