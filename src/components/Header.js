import React, { useState } from "react";
import Typed from "react-typed";
import { Link } from "react-scroll";
import Snowfall from "react-snowfall";
import "react-bootstrap-range-slider/dist/react-bootstrap-range-slider.css";

const Header = () => {
  const [windowWidth] = useState(window.screen.width);

  return (
    <div className="header-wraper" id="home">
      <div>
        <Snowfall />
      </div>
      <div className="main-info">
        <h1>Design and Development Solutions</h1>
        <Typed
          className="typed-text "
          typeSpeed={40}
          backSpeed={60}
          loop
          strings={["Web Apps", "Mobile Apps", "Custom Design", "E-Commerce"]}
        />

        <Link
          className="btn-main-offer"
          duration={100}
          smooth={true}
          offset={windowWidth > 415 ? -80 : -80}
          to="contact"
        >
          Contact me
        </Link>
      </div>
    </div>
  );
};

export default Header;
