import React from "react";
import ReactStars from "react-rating-stars-component";
import { Link } from "react-router-dom";

const ProductCard = ({ grid, product }) => {
  console.log("TESTE: - ", grid, product);
  const ratingChanged = (newRating) => {
    console.log(newRating);
  };
  return (
    <>
      {product && (
        <>
          <Link to="/products/:id">
            <div className="card">
              <div className="imgBx">
                <img src={product.image} alt="product" />
              </div>
              <div className="contentBx">
                <h2>{product.title}</h2>
                <div className="price">
                  <h3>Price :</h3>
                  <span>{`$${product.price}`}</span>
                </div>
                <div className="color">
                  <ReactStars
                    count={5}
                    onChange={ratingChanged}
                    size={24}
                    value={product.rank}
                    edit={false}
                    activeColor="#ffd700"
                  />
                </div>
                <button className="card_button">Buy Now</button>
              </div>
            </div>
          </Link>
        </>
      )}
    </>
  );
};

export default ProductCard;
