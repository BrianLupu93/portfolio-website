import React, { useEffect, useState } from "react";
import imgPort1 from "../images/port1.jpg";
import imgPort2 from "../images/port2.jpg";
import imgPort3 from "../images/port3.jpg";
import imgPort4 from "../images/port4.jpg";
import imgPort5 from "../images/port5.jpg";
import imgPort6 from "../images/port6.jpg";
import imgPort7 from "../images/port7.jpg";

import html from "../images/html.png";
import css from "../images/css.png";
import react from "../images/react.png";
import js from "../images/js.png";
import mongo from "../images/mongo.png";
import node from "../images/node.png";
import express from "../images/express.png";
import { BsZoomIn } from "react-icons/bs";
import Modal from "./Modal";

import PortfolioCarousel from "./PortfolioCarousel";

const Portfolio = () => {
  const [openModal, setOpenModal] = useState(false);

  const [portfolio, setPortfolio] = useState();

  useEffect(() => {
    if (!openModal) {
      setPortfolio([
        {
          clicked: false,
          title: "Web-Shop",
          image: imgPort7,
          description:
            "Full-Stack App. I'm working on it, so maybe if you will check it, it will be possible to find functionality that does't work and others bugs. You can test the admin view with EMAIL: admin@email.com PWD: test123. The main focus of the App is the BackEnd, cause of that the FrontEnd design is very poor. When all the functionality will be done, all the data will be migrated on a MongoDB structure.",

          link: "https://brianlupu93.github.io/online-shop",

          icons: [react, node, express, mongo],
        },
        {
          clicked: false,
          title: "Amazone Clone",
          image: imgPort1,
          description:
            "This is just an Amazon fake shop. React is very usefull for this kind of web application. This app contain the registration and sign in method, and the payment. I'm still working on it.",
          link: "https://brianlupu93.github.io/amazon-clone/",
          icons: [html, css, react],
        },
        {
          clicked: false,
          title: "Sticky ToDo App",
          image: imgPort2,
          description:
            "A small ToDo app with a funny sticker. All the notes will be organized on the sticky board. To complete this application, i will use Redux for the state management.",
          link: "https://brianlupu93.github.io/sticky-todo/",
          icons: [html, css, react],
        },
        {
          clicked: false,
          title: "Smart Counter App",
          image: imgPort3,
          description:
            "This small and poor app check the Day.js library for the React JS application.",
          link: "https://brianlupu93.github.io/smart-counter-app/",
          icons: [html, css, react],
        },
        {
          clicked: false,
          title: "www.GRGL-dev.com",
          image: imgPort4,
          description:
            "This is the first test for the GRGL-dev Official web-site, made with React Js.",
          link: "https://grgl-dev.com/",
          icons: [html, css, react],
        },
        {
          clicked: false,
          title: "iPhone calculator",
          image: imgPort5,
          description:
            "iPhone calculator complete app with html, css and JavaScript.",
          link: "https://brianlupu93.github.io/iphone-calculator/",
          icons: [html, css, js],
        },
        {
          clicked: false,
          title: "Dice game",
          image: imgPort6,
          description:
            "Colored JavaScript dice game that allow players to trow the dice one by one. The score will update automatically. When the scofre is 15 ore more, the player will will win the game. ",
          link: "https://brianlupu93.github.io/dice-game/",
          icons: [html, css, js],
        },
      ]);
    }
  }, [openModal]);

  const openModalFrame = (arr, e) => {
    e.preventDefault();
    const clickedTitle = e.currentTarget.getAttribute("value");

    setOpenModal(true);
    const newArr = arr.filter((item) => {
      if (item.title === clickedTitle) {
        item.clicked = !item.clicked;
        return item;
      }
      return item;
    });
    setPortfolio(newArr);
  };

  return (
    <div className="portfolio-wrapper py-5">
      <div>
        <h1 className="text-uppercase text-center py5">portfolio</h1>
        {/* <div className="image-box-wrapper pt-5 ">
          {portfolio?.map((item, i) => {
            return (
              <div
                value={item.title}
                key={i}
                className="portfolio-image-box "
                onClick={(e) => openModalFrame(portfolio, e)}
              >
                <h4 className="text-center portfolio-title">{item.title}</h4>

                <img
                  className="portfolio-image"
                  src={monitor}
                  alt={item.title}
                />

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
                <div className="overflow"></div>
                <BsZoomIn className="portfolio-icon" />
              </div>
            );
          })}

        </div> */}
        <div className="portfolio-content">
          <PortfolioCarousel items={portfolio} />
        </div>
      </div>
      <Modal open={openModal} setOpen={setOpenModal} items={portfolio} />
    </div>
  );
};

export default Portfolio;
