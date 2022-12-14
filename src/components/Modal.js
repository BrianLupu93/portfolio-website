import React from "react";
import { Link } from "react-router-dom";

const Modal = ({ open, setOpen, items }) => {
  const closeModal = (e) => {
    e.preventDefault();
    setOpen(!open);
  };

  const renderItem = () => {
    let itemClicked;
    items.map((item) => {
      if (item.clicked) {
        itemClicked = item;
      }
      return itemClicked;
    });

    return itemClicked;
  };

  if (!open) return;
  return (
    <>
      <div className="overlay"></div>
      <div className="modal-container">
        <div className="modal-title py-2">
          <h3>{renderItem(items)?.title}</h3>
          <button onClick={closeModal}>X</button>
        </div>
        <div className="modal-body">
          <img
            className="portfolio-image-modal"
            src={renderItem(items)?.image}
            alt="image3"
          />
          <p className="pt-3 ">{renderItem(items)?.description}</p>
          <section>
            <b className="mr-2">Github:</b>
            <a href={renderItem(items)?.link}>{renderItem(items)?.link}</a>
          </section>
        </div>
      </div>
    </>
  );
};

export default Modal;
