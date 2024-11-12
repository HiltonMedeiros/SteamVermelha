import React from "react";
import backgroundBorder from "./background-border.svg";
import "./style.css";

export const BunnerGame = () => {
  return (
    <div className="bunner-game">
      <div className="overlap">
        <div className="container">
          <div className="link">
            <div className="overlap-group">
              <div className="gradient" />
            </div>
          </div>
        </div>

        <div className="background">
          <div className="text-wrapper">-74%</div>
        </div>

        <div className="section-button">
          <div className="superscript-r">R$ 12,50</div>
        </div>

        <img
          className="background-border"
          alt="Background border"
          src={backgroundBorder}
        />
      </div>
    </div>
  );
};