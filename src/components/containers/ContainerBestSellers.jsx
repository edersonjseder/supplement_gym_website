import React from "react";

const ContainerBestSellers = (props) => {
  return (
    <div className="home-container-best-sellers">
      <div id="container-best-sellers">{props.children}</div>
    </div>
  );
};

export default ContainerBestSellers;
