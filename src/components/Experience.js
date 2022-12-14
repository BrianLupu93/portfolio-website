import React from "react";

const Experience = () => {
  return (
    <div className="experience" id="experience">
      <div className="d-flex justify-content-center my-5">
        <h1>experience</h1>
      </div>
      <div className="container experience-wrapper">
        <div className="timeline-block timeline-block-right">
          <div className="marker"></div>
          <div className="timeline-content">
            <h3>2017-2020</h3>
            <p>
              West University.
              <br /> Degree in Computer Science
            </p>
          </div>
        </div>
        {/*  */}
        <div className="timeline-block timeline-block-left">
          <div className="marker"></div>

          <div className="timeline-content">
            <h3>2020-2021</h3>
            <p>System Administrator at Continental</p>
          </div>
        </div>

        {/*  */}
        <div className="timeline-block timeline-block-right">
          <div className="marker"> </div>
          <div className="timeline-content">
            <h3>2021-2022</h3>
            <p>
              Personal development in the Web-Dev field.
              <br />
              Front-End Internship at GRGL-development
            </p>
          </div>
        </div>
        {/*  */}
        <div className="timeline-block timeline-block-left">
          <div className="marker"></div>
          <div className="timeline-content">
            <h3>2022</h3>
            <p>
              Front-end developer at GRGL-development
              <br />
              Front-End Freelancer <br />
              Back End Bootcamp
            </p>{" "}
          </div>
        </div>
        {/*  */}
      </div>
    </div>
  );
};

export default Experience;
