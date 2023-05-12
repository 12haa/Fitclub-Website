import React from "react";
import "./Programs.css";
import { programsData } from "../data/programsData";
import RightArrow from "../assets/rightArrow.png";
const Programs = () => {
  return (
    <div className="Programs" id="programs">
      {/* Header */}
      <div className="programs-header">
        <span className="stroke-text"> Explore Our</span>
        <span>Programs</span>
        <span className="stroke-text">To Shape</span>
      </div>
      <div className="program-catagories">
        {programsData.map((program) => (
          <div className="category">
            {program.image}
            <span>{program.heading}</span>
            <span>{program.details}</span>
            <div className="join-now">
              <span>Join Now</span>
              <img src={RightArrow} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Programs;
