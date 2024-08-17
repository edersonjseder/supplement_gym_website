import React from "react";
import "./Recommended.css";
import { DivRecommended } from "../../../styles/Styles";
import Buttons from "../Buttons";
import { categoriesList } from "../../../data/categoriesList";

const Recommended = ({ handleClick }) => {
  return (
    <div className="recommended">
      <DivRecommended>
        <h2 className="recommended-title">Recommended</h2>
        <div className="recommended-flex">
          {categoriesList.map((category, index) => (
            <Buttons
              key={index}
              onClickHandler={handleClick}
              value={category.value}
              title={category.name}
            />
          ))}
        </div>
      </DivRecommended>
    </div>
  );
};

export default Recommended;
