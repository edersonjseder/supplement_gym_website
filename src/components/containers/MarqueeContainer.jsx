import React from "react";

const MarqueeContainer = (props) => {
  return (
    <div className="home-container-marquee">
      <div id="container-marquee">{props.children}</div>
    </div>
  );
};

export default MarqueeContainer;
