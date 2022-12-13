import React from "react";
import { IconContext } from "react-icons";
import { IoDesktopOutline } from "react-icons/io5";
import { GiPaintRoller } from "react-icons/gi";
import { RxMobile } from "react-icons/rx";
import { RiShoppingCartLine } from "react-icons/ri";

const Services = () => {
  return (
    <div className="services">
      <h1 className="py-5">I can help you with ... </h1>
      <div className="container">
        <div className="row">
          <div className="col-md-3 col-sm-6">
            <div className="box">
              <IconContext.Provider value={{ size: "4em" }}>
                <div className="circle">
                  <GiPaintRoller className="icon" />
                </div>
              </IconContext.Provider>

              <h3>Web Desing</h3>
              <p>Each project design will be unique!</p>
            </div>
          </div>
          {/*  */}
          <div className="col-md-3 col-sm-6">
            <div className="box">
              <IconContext.Provider value={{ size: "4em" }}>
                <div className="circle">
                  <IoDesktopOutline className="icon" />
                </div>
              </IconContext.Provider>
              <h3>Web Development</h3>
              <p>
                The web application will be build with the last proven
                technologies!
              </p>
            </div>
          </div>
          {/*  */}
          <div className="col-md-3 col-sm-6">
            <div className="box">
              <IconContext.Provider value={{ size: "4em" }}>
                <div className="circle">
                  <RxMobile className="icon" />
                </div>
              </IconContext.Provider>
              <h3>Mobile Development</h3>
              <p>Full responsive application or just Mobile App!</p>
            </div>
            {/*  */}
          </div>
          <div className="col-md-3 col-sm-6">
            <div className="box">
              <IconContext.Provider value={{ size: "4em" }}>
                <div className="circle">
                  <RiShoppingCartLine className="icon" />
                </div>
              </IconContext.Provider>
              <h3>E-commerce</h3>
              <p>Complete web-shops!</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
