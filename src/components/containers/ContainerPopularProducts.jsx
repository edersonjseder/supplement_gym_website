import React from "react";

const ContainerPopularProducts = (props) => {
  return (
    <div className="home-container-popular-products">
      <div id="container-popular-products">{props.children}</div>
    </div>
  );
};

export default ContainerPopularProducts;
