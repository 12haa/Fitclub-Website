import React, { useState } from "react";
import "./Testemonials.css";
import { testimonialsData } from "../data/testimonialsData";
import leftArrow from "../assets/leftArrow.png";
import rightArrow from "../assets/rightArrow.png";
const Testemonials = () => {
  const [selected, setSelected] = useState(0);
  const testimonialsLenght = testimonialsData.length;
  return (
    <div className="Testemonials">
      <div className="left-t">
        <span>Testimonials</span>
        <span className="stroke-text">What They Say</span>
        <span> About Us</span>
        <span>{testimonialsData[selected].review}</span>
        <span style={{ color: "var(--orange" }}>
          {testimonialsData[selected].name}
          <span>{testimonialsData[selected].status}</span>
        </span>
      </div>
      <div className="right-t">
        <div></div>
        <div></div>
        <img src={testimonialsData[selected].image} alt="" />
        <div className="arrows">
          <img
            onClick={() => {
              selected === 0
                ? setSelected(testimonialsLenght - 1)
                : setSelected((prev) => prev - 1);
            }}
            src={leftArrow}
          />
          <img
            onClick={() => {
              selected===testimonialsLenght-1 ? setSelected(0):
              setSelected((prev)=>prev+1
               )
            }}
            src={rightArrow}
          />
        </div>
      </div>
    </div>
  );
};

export default Testemonials;
