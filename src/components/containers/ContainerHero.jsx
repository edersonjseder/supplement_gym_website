import React from "react";

const ContainerHero = (props) => {
  return (
    <div className="home-container-hero">
      <div id="container-hero">{props.children}</div>
    </div>
  );
};

export default ContainerHero;
