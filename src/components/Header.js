import React from "react";
import Typed from "react-typed";

const Header = () => {
  return (
    <div className="header-wraper" id="home">
      <div className="main-info">
        <h1>Design and Development Solutions</h1>
        <Typed
          className="typed-text "
          typeSpeed={40}
          backSpeed={60}
          loop
          strings={["Web Apps", "Mobile Apps", "Custom Design", "E-Commerce"]}
        />

        <a href="#" className="btn-main-offer">
          Contact me
        </a>
      </div>
    </div>
  );
};

export default Header;
