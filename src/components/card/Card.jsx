import React from "react";
import "./Card.css";

const Card = ({ img, title, star, reviews, newPrice, prevPrice }) => {
  return (
    <section className="card-container">
      <section className="card-product">
        <img src={img} alt={title} className="card-product-img" />
      </section>
    </section>
  );
};

export default Card;
