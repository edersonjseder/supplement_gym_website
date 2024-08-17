import React from "react";
import { DivContent } from "../../../../styles/Styles";
import "./Colors.css";
import Input from "../../Input";

const Colors = ({ handleChange }) => {
  return (
    <div className="ml">
      <DivContent>
        <h2 className="sidebar-title color-title">Colors</h2>
        <label htmlFor="" className="sidebar-label-container">
          <input
            onChange={handleChange}
            type="radio"
            value=""
            name="mInColor"
          />
          <span className="checkmark"></span>
          <span className="checkmark-item">All</span>
        </label>
        <Input
          handleChange={handleChange}
          value="black"
          title="Black"
          name="mInColor"
          color="black"
        />
        <Input
          handleChange={handleChange}
          value="blue"
          title="Blue"
          name="mInColor"
          color="Blue"
        />
        <Input
          handleChange={handleChange}
          value="red"
          title="Red"
          name="mInColor"
          color="Red"
        />
        <Input
          handleChange={handleChange}
          value="green"
          title="Green"
          name="mInColor"
          color="Green"
        />
      </DivContent>
    </div>
  );
};

export default Colors;
