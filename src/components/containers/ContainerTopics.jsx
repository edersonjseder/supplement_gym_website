import React from "react";

const ContainerTopics = (props) => {
  return (
    <div className="home-container-topics">
      <div id="container-topics">{props.children}</div>
    </div>
  );
};

export default ContainerTopics;
