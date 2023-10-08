import React from "react";
import "./style.css";

export const MainLanding = () => {
  return (
    <div className="main-landing">
      <div className="overlap-wrapper">
        <div className="overlap">
          <div className="gradient" />
          <img className="halo-mountain" alt="Halo mountain" src="halo-mountain.png" />
          <div className="climate-frame" />
          <div className="rectangle" />
          <div className="team-frame" />
          <div className="div" />
          <div className="rectangle-2" />
          <img className="layer" alt="Layer" src="layer-1.svg" />
          <div className="overlap-group-wrapper">
            <div className="overlap-group">
              <img className="group" alt="Group" src="group.png" />
              <img className="img" alt="Group" src="image.png" />
            </div>
          </div>
          <img className="NASA-logo" alt="Nasa logo" src="NASA-logo.png" />
          <img className="animation" alt="Animation" src="animation.png" />
          <div className="text-wrapper">HALORA</div>
          <div className="text-wrapper-2">TEAM</div>
          <div className="text-wrapper-3">ABOUT</div>
          <div className="text-wrapper-4">CLIMATE</div>
          <div className="text-wrapper-5">SPACE</div>
        </div>
      </div>
    </div>
  );
};
