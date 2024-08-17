import React, { useEffect, useState } from "react";
import "./PriceSlider.scss";

const PriceSlider = ({ min, max, value, step, onChange }) => {
  const [minValue, setMinValue] = useState(value ? value.min : min);
  const [maxValue, setMaxValue] = useState(value ? value.max : max);

  useEffect(() => {
    if (value) {
      setMinValue(value.min);
      setMaxValue(value.max);
    }
  }, [value]);

  const handleMinChange = (e) => {
    e.preventDefault();
    const newMinVal = Math.min(+e.target.value, maxValue - step);
    if (!value) setMinValue(newMinVal);
    onChange({ min: newMinVal, max: maxValue });
  };

  const handleMaxChange = (e) => {
    e.preventDefault();
    const newMaxVal = Math.max(+e.target.value, minValue + step);
    if (!value) setMaxValue(newMaxVal);
    onChange({ min: minValue, max: newMaxVal });
  };

  const minPos = ((minValue - min) / (max - min)) * 100;
  const maxPos = ((maxValue - min) / (max - min)) * 100;
  return (
    <div className="slider-content">
      <div className="slider-wrapper">
        <div class="input-wrapper">
          <input
            className="input-slider-min"
            type="range"
            value={minValue}
            min={min}
            max={max}
            step={step}
            onChange={handleMinChange}
          />
          <input
            className="input-slider-max"
            type="range"
            value={maxValue}
            min={100}
            max={300}
            step={step}
            onChange={handleMaxChange}
          />

          <div className="slider-control-wrapper">
            <div className="slider-control" style={{ left: `${minPos}%` }} />
            <div class="slider-rail">
              <div
                className="inner-rail"
                style={{ left: `${minPos}%`, right: `${100 - maxPos}%` }}
              />
            </div>
            <div className="slider-control" style={{ left: `${maxPos}%` }} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PriceSlider;
