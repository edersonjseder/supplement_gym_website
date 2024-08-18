import { useState } from "react";
import "./SupCheckbox.css";

export const SupCheckbox = ({ handleChange, checked, value, title }) => {
  const [isChecked, setIsChecked] = useState(checked);

  console.log("supCheckbox checked: ", checked);
  console.log("supCheckbox value: ", value);

  const checkHandler = (e) => {
    console.log("supCheckbox e.target.checked: ", e.target.checked);
    setIsChecked(e.target.checked);
    handleChange(!isChecked ? value : "");
  };

  return (
    <div className="checkbox-label-content">
      <input
        type="checkbox"
        id="checkbox"
        checked={isChecked}
        value={value}
        onChange={checkHandler}
        className={isChecked ? "checked" : ""}
      />
      <label className="checkmark-item" htmlFor="checkbox">
        {title}
      </label>
    </div>
  );
};
