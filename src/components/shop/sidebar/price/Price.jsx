import React, { useState } from "react";
import {
  DivSliderButton,
  DivSliderContent,
  DivSliderPriceDescription,
  DivSliderTitle,
} from "../../../../styles/Styles";
import "./Price.css";
import "react-range-slider-input/dist/style.css";
import Buttons from "../../Buttons";
import { Slider } from "@mui/material";

const Price = ({ handleChange }) => {
  const [value, setValue] = useState([15, 300]);

  console.log("Price: ", value);

  const handleRangeChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className="price-range">
      <DivSliderTitle>
        <h2 className="sidebar-title price-title">Price</h2>
      </DivSliderTitle>
      <DivSliderContent>
        <Slider
          min={15}
          max={300}
          step={5}
          value={value}
          onChange={handleRangeChange}
          valueLabelDisplay="auto"
          style={{ color: "red" }}
        />
        <DivSliderPriceDescription>
          <p className="slide-description">{`$${value[0]} - $${value[1]}`}</p>
        </DivSliderPriceDescription>
        <DivSliderButton>
          <Buttons
            onClickHandler={handleChange}
            value={value[1]}
            title="Filter"
          />
        </DivSliderButton>
      </DivSliderContent>
    </div>
  );
};

export default Price;
