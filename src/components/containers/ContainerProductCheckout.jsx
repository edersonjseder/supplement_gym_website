import React from "react";

const ContainerProductCheckout = (props) => {
  return (
    <div className="home-container-product-checkout">
      <div id="container-product-checkout">{props.children}</div>
    </div>
  );
};

export default ContainerProductCheckout;
