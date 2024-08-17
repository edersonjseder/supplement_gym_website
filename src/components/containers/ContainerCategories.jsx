import React from "react";

const ContainerCategories = (props) => {
  return (
    <div className="home-container-categories">
      <div id="container-categories">{props.children}</div>
    </div>
  );
};

export default ContainerCategories;
