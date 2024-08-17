import React from "react";
import { GiShoppingCart } from "react-icons/gi";
import Category from "./category/Category";
import Price from "./price/Price";
import "./Sidebar.css";

const Sidebar = ({ handleChange }) => {
  return (
    <div className="sidebar">
      <section className="sec-sidebar">
        <div className="sb-logo-container">
          <h1>
            <GiShoppingCart />
          </h1>
        </div>
        <Category handleChange={handleChange} />
        <Price handleChange={handleChange} />
      </section>
    </div>
  );
};

export default Sidebar;
