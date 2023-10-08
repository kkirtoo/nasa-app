import React from "react";
import "./style.css";

export const Summer = () => {
  return (
    <div className="summer">
      <div className="overlap-wrapper">
        <div className="overlap">
          <img className="img" alt="Pxfuel" src="pxfuel-4-1.png" />
          <img className="img" alt="Rectangle" src="rectangle-2.png" />
          <img className="rectangle" alt="Rectangle" src="rectangle-3.png" />
          <div className="div" />
          <div className="tabs">
            <img className="line" alt="Line" src="line-1.svg" />
            <div className="overlap-group">
              <div className="mframe" />
              <div className="text-wrapper">Monsoon</div>
            </div>
            <div className="overlap-group-2">
              <div className="wframe" />
              <div className="text-wrapper">Winter</div>
            </div>
            <div className="overlap-2">
              <div className="sframe" />
              <div className="text-wrapper-2">Summer</div>
            </div>
          </div>
          <div className="rectangle-2" />
          <div className="text-wrapper-3">HOME</div>
        </div>
      </div>
    </div>
  );
};
