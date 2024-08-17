import React from "react";

const ContainerProductDetails = (props) => {
  return (
    <div className="home-container-product-details">
      <div id="container-product-details">{props.children}</div>
    </div>
  );
};

export default ContainerProductDetails;
