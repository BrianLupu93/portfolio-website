import React, { useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { Link } from "react-scroll";
import logo from "../images/logo.png";

const Navbar = () => {
  const [windowWidth] = useState(window.screen.width);
  console.log(windowWidth);

  return (
    <nav className="navbar navbar-expand-xl  navbar-light  sticky-top">
      {/* <div className="container"> */}
      <div className="navbar-brand logo">
        <Link
          className="navbar-brand logo"
          smooth={true}
          to="home"
          offset={-400}
          duration={100}
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
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <AiOutlineMenu />
      </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav  ml-auto ">
          <li className="nav-item active">
            <Link
              duration={100}
              smooth={true}
              to="home"
              offset={-400}
              className="nav-link"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
            >
              home
            </Link>
          </li>
          <li className="nav-item">
            <Link
              duration={100}
              smooth={true}
              to="about"
              offset={windowWidth > 415 ? -82 : -307}
              className="nav-link"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
            >
              about me
            </Link>
          </li>
          <li className="nav-item">
            <Link
              duration={100}
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              smooth={true}
              to="services"
              offset={windowWidth > 415 ? 133 : -38}
              className="nav-link"
            >
              services
            </Link>
          </li>
          <li className="nav-item">
            <Link
              duration={100}
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              smooth={true}
              to="experience"
              offset={windowWidth > 415 ? -84 : -307}
              className="nav-link"
            >
              experience
            </Link>
          </li>
          <li className="nav-item">
            <Link
              duration={100}
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              smooth={true}
              to="portfolio"
              offset={windowWidth > 415 ? 148 : -84}
              className="nav-link"
            >
              portfolio
            </Link>
          </li>
          <li class duration={100} Name="nav-item">
            <Link
              smooth={true}
              offset={windowWidth > 415 ? -80 : -304}
              to="contact"
              className="nav-link"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
            >
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
