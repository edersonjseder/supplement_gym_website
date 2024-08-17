import React from "react";
import CategoriesBox from "./CategoriesBox";
import featureImgs from "../../../../data/featureImgs";

function Categories() {
  return (
    <div id="categories">
      <h1>OUR CATEGORIES</h1>
      <hr className="line-below-title" />
      <div className="a-container">
        {featureImgs.map((item, index) => (
          <CategoriesBox key={index} image={item.image} title={item.title} />
        ))}
      </div>
    </div>
  );
}

export default Categories;
