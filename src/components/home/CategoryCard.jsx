import React from "react";

const CategoryCard = (props) => {
  return (
    <div className="tBody">
      <div className="centeri">
        <div className="cCard">
          <img src={props.image} className="foto" alt="category" />
          <header>
            <h1>{props.title}</h1>
          </header>
        </div>
      </div>
    </div>
  );
};

export default CategoryCard;
