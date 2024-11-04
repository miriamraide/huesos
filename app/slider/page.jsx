"use client";

import { FaArrowRightLong, FaArrowLeftLong } from "react-icons/fa6";
import { barkDB } from "./db";
import { useState } from "react";
import Products from "../Products";

import "./slider.css";

const Slider = () => {
  const [items, setItems] = useState(barkDB);

  const handleNext = () => {
    setItems((prevItems) => [...prevItems.slice(1), prevItems[0]]);
  };

  const handlePrev = () => {
    setItems((prevItems) => [
      prevItems[prevItems.length - 1],
      ...prevItems.slice(0, -1),
    ]);
  };

  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsContact(!isOpen);
  };

  return (
    <>
      <h1 className=" text-orange-600 py-4 sm:p-6 md:flex md:justify-between md:items-center text-center text-3xl font-bold bg-blue-400 ">
        {" "}
        BARKery Favoritos...
      </h1>
      <div className="container">
        <div className="slide">
          {items.map((item, index) => (
            <div
              key={index}
              className="item"
              style={{ backgroundImage: `url(${item.image})` }}
            >
              <div className="content">
                <h2 className="name">
                  {item.name} - ${item.price}
                </h2>
                <p className="description">{item.description}</p>
                <button
                  onClick={() => {
                    setIsOpen(!isOpen) && <Products />;
                  }}
                  className=" p-5 rounded-xl"
                >
                  Más por ver...
                </button>
              </div>
            </div>
          ))}
        </div>
        <div className="button">
          <button onClick={handlePrev}>
            <FaArrowLeftLong size={30} />
          </button>
          <button onClick={handleNext}>
            <FaArrowRightLong size={30} />
          </button>
        </div>
      </div>
    </>
  );
};
export default Slider;
