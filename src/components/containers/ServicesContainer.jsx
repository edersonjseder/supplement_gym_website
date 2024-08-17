import React from "react";

const ServicesContainer = (props) => {
  return (
    <div className="home-container-services">
      <div id="container-services">{props.children}</div>
    </div>
  );
};

export default ServicesContainer;
