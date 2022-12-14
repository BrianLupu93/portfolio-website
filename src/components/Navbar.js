import React from "react";
import { AiOutlineMenu } from "react-icons/ai";
import logo from "../images/logo.png";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-xl  navbar-light  sticky-top">
      {/* <div className="container"> */}
      <div className="navbar-brand logo">
        <a className="navbar-brand logo" href="#">
          <img className="logo-img" src={logo} alt="logo" />
          <div className="logo-container">
            <p className="logo-name">brian lupu</p>
            <p className="logo-slogan ">web development</p>
          </div>
        </a>
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
            <a className="nav-link" href="#">
              home
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#about">
              about me
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#services">
              services
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#experience">
              experience
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#portfolio">
              portfolio
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#contact">
              contact
            </a>
          </li>
        </ul>
      </div>
      {/* </div> */}
    </nav>
  );
};

export default Navbar;
