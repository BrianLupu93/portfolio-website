import React, { useEffect, useState } from "react";
import imgPort1 from "../images/port1.jpg";
import imgPort2 from "../images/port2.jpg";
import imgPort3 from "../images/port3.jpg";
import imgPort4 from "../images/port4.jpg";
import imgPort5 from "../images/port5.jpg";
import imgPort6 from "../images/port6.jpg";
import html from "../images/html.png";
import css from "../images/css.png";
import react from "../images/react.png";
import js from "../images/js.png";
import { BsZoomIn } from "react-icons/bs";
import Modal from "./Modal";

const Portfolio = () => {
  const [openModal, setOpenModal] = useState(false);

  const [portfolio, setPortfolio] = useState();

  useEffect(() => {
    if (!openModal) {
      setPortfolio([
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
    <div className="portfolio-wrapper">
      <div className="container my-5">
        <h1 className="text-uppercase text-center py-2">portfolio</h1>
        <div className="image-box-wrapper  row  justify-content-center ">
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
                  src={item.image}
                  alt={item.title}
                />

                <div className="d-flex justify-content-center mt-3">
                  {item.icons.map((icon) => {
                    return (
                      <img src={icon} alt={icon} className="tech-icon mx-2" />
                    );
                  })}
                </div>
                <div className="overflow"></div>
                <BsZoomIn className="portfolio-icon" />
              </div>
            );
          })}
        </div>
      </div>
      <Modal open={openModal} setOpen={setOpenModal} items={portfolio} />
    </div>
  );
};

export default Portfolio;
