import React from "react";
import { Square } from "../../styles/Styles";
import { Link } from "react-router-dom";

const StepCard = ({ backgroundMenu }) => {
  return (
    <>
      <Square image={backgroundMenu.image}>
        <div className="linkBox">
          <h1>{backgroundMenu.title}</h1>
          <div className="stepsBoxLinks">
            {backgroundMenu.link.map((item, index) => (
              <Link to={"/"} key={index} className="mLink">
                {item.link}
              </Link>
            ))}
          </div>
        </div>
      </Square>
    </>
  );
};

export default StepCard;
