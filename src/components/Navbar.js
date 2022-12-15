import React, { useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { Link } from "react-scroll";
import logo from "../images/logo.png";

const Navbar = () => {
  const [windowWidth] = useState(window.screen.width);

  return (
    <nav className="navbar navbar-expand-xl  navbar-light  sticky-top">
      {/* <div className="container"> */}
      <div className="navbar-brand logo">
        <Link
          className="navbar-brand logo"
          smooth={true}
          to="home"
          offset={-100}
        >
          <img className="logo-img" src={logo} alt="logo" />
          <div className="logo-container">
            <p className="logo-name">brian lupu</p>
            <p className="logo-slogan ">web development</p>
          </div>
        </Link>
      </div>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <AiOutlineMenu />
      </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav  ml-auto ">
          <li className="nav-item active">
            <Link smooth={true} to="home" offset={-100} className="nav-link">
              home
            </Link>
          </li>
          <li className="nav-item">
            <Link smooth={true} to="about" offset={-82} className="nav-link">
              about me
            </Link>
          </li>
          <li className="nav-item">
            <Link
              smooth={true}
              to="services"
              offset={windowWidth > 400 ? 158 : 190}
              className="nav-link"
            >
              services
            </Link>
          </li>
          <li className="nav-item">
            <Link
              smooth={true}
              to="experience"
              offset={-82}
              className="nav-link"
            >
              experience
            </Link>
          </li>
          <li className="nav-item">
            <Link
              smooth={true}
              to="portfolio"
              offset={windowWidth > 360 ? 148 : 172}
              className="nav-link"
            >
              portfolio
            </Link>
          </li>
          <li className="nav-item">
            <Link smooth={true} offset={-80} to="contact" className="nav-link">
              contact
            </Link>
          </li>
        </ul>
      </div>
      {/* </div> */}
    </nav>
  );
};

export default Navbar;
