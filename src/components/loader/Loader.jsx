import React from "react";
import loaderImg from "../../images/loader.gif";
import ReactDOM from "react-dom";
import "./Loader.css";

const Loader = () => {
  return ReactDOM.createPortal(
    <div className="wrapper">
      <div className="loader">
        <img src={loaderImg} alt="Loading..." />
      </div>
    </div>,
    document.getElementById("loader")
  );
};

export const SpinnerImg = () => {
  return (
    <div className="center-all">
      <img className="loader-size" src={loaderImg} alt="Loading..." />
    </div>
  );
};

export default Loader;
