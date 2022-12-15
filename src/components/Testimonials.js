import React from "react";
import TestimonialsCarousel from "./TestimonialsCarousel";
import david from "../images/david.png";
import christian from "../images/christian.png";
import jessica from "../images/jessica.png";
import erika from "../images/erika.png";

const Testimonials = () => {
  const testimonials = [
    {
      avatar: david,
      name: "David Lee",
      body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus optio necessitatibus deleniti impedit rerum! Tempore cum veniam adipisci natus doloremque itaque veritatis officiis nulla labore, consequatur quas, a laborum assumenda",
    },
    {
      avatar: jessica,
      name: "Jessica Foo",
      body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus optio necessitatibus deleniti impedit rerum! Tempore cum veniam adipisci natus doloremque itaque veritatis officiis nulla labore, consequatur quas, a laborum assumenda",
    },
    {
      avatar: christian,
      name: "Christian Bee",
      body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus optio necessitatibus deleniti impedit rerum! Tempore cum veniam adipisci natus doloremque itaque veritatis officiis nulla labore, consequatur quas, a laborum assumenda",
    },
    {
      avatar: erika,
      name: "Erika Mee",
      body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus optio necessitatibus deleniti impedit rerum! Tempore cum veniam adipisci natus doloremque itaque veritatis officiis nulla labore, consequatur quas, a laborum assumenda",
    },
  ];

  return (
    <div className="testimonials py-5">
      <h1 className="py-5">people testimonials</h1>
      <div className="container ">
        <div className="testimonial-container">
          <TestimonialsCarousel clients={testimonials} />
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
