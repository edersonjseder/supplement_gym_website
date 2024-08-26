import React from "react";
import "./Recommended.css";
import { DivRecommended } from "../../../styles/Styles";
import Buttons from "../Buttons";
import { useSelector } from "react-redux";

const Recommended = ({ handleClick }) => {
  const { categories } = useSelector((state) => state.categories);
  return (
    <div className="recommended">
      <DivRecommended>
        <h2 className="recommended-title">Recommended</h2>
        <div className="recommended-flex">
          {categories.map((category, index) => (
            <Buttons
              key={index}
              onClickHandler={handleClick}
              value={category.title}
              title={category.title}
            />
          ))}
        </div>
      </DivRecommended>
    </div>
  );
};

export default Recommended;
