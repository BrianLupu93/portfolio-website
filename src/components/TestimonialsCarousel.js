import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const TestimonialsCarousel = ({ clients }) => {
  return (
    <Carousel
      showArrows={true}
      showThumbs={false}
      infiniteLoop={true}
      autoPlay={true}
      showStatus={false}
      interval={2000}
    >
      {clients?.map((client) => {
        return (
          <>
            <img src={client.avatar} alt={client.name} />
            <div className="my-carousel">
              <h3>{client.name}</h3>
              <p>{client.body}</p>
            </div>
          </>
        );
      })}
    </Carousel>
  );
};

export default TestimonialsCarousel;
