import React from "react";
import "./Buttons.css";

const Buttons = ({ onClickHandler, value, title }) => {
  return (
    <button onClick={onClickHandler} value={value} className="button-shop">
      {title}
    </button>
  );
};

export default Buttons;
