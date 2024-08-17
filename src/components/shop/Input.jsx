import React from "react";

const Input = ({ handleChange, value, title, name, color }) => {
  return (
    <label htmlFor="" className="sidebar-label-container">
      <input onChange={handleChange} type="radio" value={value} name={name} />
      <span className="checkmark" style={{ backgroundColor: color }}></span>
      <span className="checkmark-item">{title}</span>
    </label>
  );
};

export default Input;
