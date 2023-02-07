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
              <p>91788, Pappenheim, Deutschland</p>
            </div>
            <div className="d-flex">
              <a href="+491771859194">+(49) 1771859194 </a>
            </div>
            <div className="d-flex">
              <p>E-mail: brianlupu@gmail.com</p>
            </div>
          </div>
          <div className="col-lg-3 col-md-2 col-sm-6 mt-3">
            <div className="row">
              <div className="col">
                <Link
                  duration={100}
                  to="home"
                  smooth={true}
                  offset={-400}
                  className="footer-nav"
                >
                  Home
                </Link>
                <br />
                <Link
                  duration={100}
                  to="about"
                  smooth={true}
                  offset={windowWidth > 415 ? -82 : -40}
                  className="footer-nav"
                >
                  About me
                </Link>
                <br />
                <Link
                  duration={100}
                  to="services"
                  smooth={true}
                  offset={windowWidth > 415 ? 133 : 190}
                  className="footer-nav"
                >
                  Services
                </Link>
              </div>
              <div className="col">
                <Link
                  duration={100}
                  to="experience"
                  smooth={true}
                  offset={windowWidth > 415 ? -84 : -70}
                  className="footer-nav"
                >
                  Experience
                </Link>
                <br />
                <Link
                  duration={100}
                  to="portfolio"
                  smooth={true}
                  offset={windowWidth > 415 ? 172 : 167}
                  className="footer-nav"
                >
                  Portfolio
                </Link>
                <br />
                <Link
                  duration={100}
                  to="contact"
                  offset={windowWidth > 415 ? -80 : -77}
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
