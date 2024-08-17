import React from "react";

const ContainerProductItemsCart = (props) => {
  return (
    <div className="home-container-product-items-cart">
      <div id="container-product-items-cart">{props.children}</div>
    </div>
  );
};

export default ContainerProductItemsCart;
