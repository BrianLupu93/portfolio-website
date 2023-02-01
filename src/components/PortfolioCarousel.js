import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const PortfolioCarousel = ({ items }) => {
  return (
    <Carousel
      className="portfolio-carousel-box"
      showArrows={true}
      showThumbs={false}
      infiniteLoop={true}
      autoPlay={false}
      showStatus={false}
      interval={3000}
    >
      {items?.map((item, i) => {
        return (
          <div className="my-portfolio-carousel" key={i}>
            <h3>{item.title}</h3>
            <img src={item.image} alt="" className="portfolio-image" />

            <div className="carousel-content">
              <a href={item?.link}>
                <span className="portfolio-link">Link: </span> {item.link}
              </a>
              <div className="d-flex justify-content-center mt-3">
                {item.icons.map((icon, i) => {
                  return (
                    <img
                      key={i}
                      src={icon}
                      alt={icon}
                      className="tech-icon mx-2"
                    />
                  );
                })}
              </div>
            </div>
          </div>
        );
      })}
    </Carousel>
  );
};

export default PortfolioCarousel;
