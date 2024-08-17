import { useState } from "react";
import "./CategoryCheckbox.css";

export const CategoryCheckbox = ({ handleChange, checked, value, title }) => {
  const [isChecked, setIsChecked] = useState(checked);

  const checkHandler = () => {
    setIsChecked(!isChecked);
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
