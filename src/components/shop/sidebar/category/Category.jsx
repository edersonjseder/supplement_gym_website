import React from "react";
import "./Category.css";
import {
  DivCategoryContent,
  DivCategoryTitle,
} from "../../../../styles/Styles";
import { SupCheckbox } from "../../../checkbox/SupCheckbox";
import { useSelector } from "react-redux";

const Category = ({ handleChange }) => {
  const categories = useSelector((store) => store.categories.categories);

  console.log("Category - categories: ", categories);
  return (
    <div>
      <DivCategoryTitle>
        <h2 className="sidebar-title">Category</h2>
      </DivCategoryTitle>
      <DivCategoryContent>
        {categories.map((category, index) => (
          <SupCheckbox
            key={index}
            handleChange={handleChange}
            checked={false}
            value={category.title}
            title={category.title}
          />
        ))}
      </DivCategoryContent>
    </div>
  );
};

export default Category;
