import React from "react";

import "./SubNav.css";

import Search from "./search/Search";

const SubNav = ({ search, handleInputChange }) => {
  return (
    <nav className="shop-nav">
      <div className="nav-container">
        <Search value={search} onChange={handleInputChange} />
      </div>
    </nav>
  );
};

export default SubNav;
