import React from "react";
import brian from "../images/brian.jpeg";

const AboutMe = () => {
  return (
    <div className="container py-5">
      <div className="row">
        <div className="col-lg-6 col-xm-12">
          <div className="photo-wrap mb-5">
            <img className="profile-img" src={brian} alt="brian" />
          </div>
        </div>
        <div className="col-lg-6 col-xm-12">
          <h1 className="about-heading">Who i am </h1>
          <p>
            Nice to meet you, my name is Brian. I graduated the University of
            West in Timisoara, with a degree in Computer Science. I'm a Front
            End Developer, and, because I'm in love with the web development,
            I'm also building up my Back End skills.
            <br /> I think that the main satisfy that push me to grow up ever
            and ever, is that to solve solutions for people problems with the
            delivered software.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
