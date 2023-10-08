import React from "react";
import "./style.css";

export const Snow = () => {
  return (
    <div className="snow">
      <div className="overlap-wrapper">
        <div className="overlap">
          <img className="winter-is-coming" alt="Winter is coming" src="winter-is-coming.png" />
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
        </div>
      </div>
    </div>
  );
};
