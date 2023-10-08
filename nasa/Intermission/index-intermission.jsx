import React from "react";
import "./style.css";

export const Intermission = () => {
  return (
    <div className="intermission">
      <div className="overlap-wrapper">
        <div className="overlap">
          <img className="ellipse" alt="Ellipse" src="ellipse-1.svg" />
          <div className="test">
            <div className="overlap-group">
              <p className="text-wrapper">You have almost reached the Planet just hold on for a bit longer</p>
              <div className="rectangle" />
            </div>
          </div>
          <div className="div">
            <div className="rectangle-2" />
            <div className="text-wrapper-2">Planet Info</div>
          </div>
        </div>
      </div>
    </div>
  );
};
