import React from "react";
import { DivCircleAbout } from "../../styles/Styles";
import "./Circle.css";

const Circle = ({ colourRight, colourTop, colourBottom, colourLeft, info }) => {
  return (
    <DivCircleAbout
      colorRight={colourRight}
      colorTop={colourTop}
      colorBottom={colourBottom}
      colorLeft={colourLeft}
    >
      <h1 className="about-data-info">{info}</h1>
    </DivCircleAbout>
  );
};

export default Circle;
