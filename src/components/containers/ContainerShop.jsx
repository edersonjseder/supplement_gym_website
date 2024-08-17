import React from "react";

const ContainerShop = (props) => {
  return (
    <div className="home-container-shop">
      <div id="container-shop">{props.children}</div>
    </div>
  );
};

export default ContainerShop;
