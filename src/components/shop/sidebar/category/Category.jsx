import React from "react";
import "./Category.css";
import {
  DivCategoryContent,
  DivCategoryTitle,
} from "../../../../styles/Styles";
import { categoriesList } from "../../../../data/categoriesList";
import { SupCheckbox } from "../../../checkbox/SupCheckbox";

const Category = ({ handleChange }) => {
  return (
    <div>
      <DivCategoryTitle>
        <h2 className="sidebar-title">Category</h2>
      </DivCategoryTitle>
      <DivCategoryContent>
        {categoriesList.map((category, index) => (
          <SupCheckbox
            key={index}
            handleChange={handleChange}
            checked={false}
            value={category.value}
            title={category.name}
          />
        ))}
      </DivCategoryContent>
    </div>
  );
};

export default Category;
