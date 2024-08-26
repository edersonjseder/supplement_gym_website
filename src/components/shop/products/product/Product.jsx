import React from "react";
import "./Product.css";
import { FaRegHeart } from "react-icons/fa6";
import { FaBasketShopping } from "react-icons/fa6";
import { PiEyeBold } from "react-icons/pi";
import { DivDetailsButton, DivDetailsContent } from "../../../../styles/Styles";
import { Link } from "react-router-dom";
import ReactStars from "react-rating-stars-component";
import { toCurrency } from "../../../../utils/Utils";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../../../../redux/features/cart";

const Product = ({ product, isFromCart }) => {
  const carts = useSelector((store) => store.cart.items);
  const dispatch = useDispatch();
  console.log("Product: ", product);

  const handleAddToCart = () => {
    console.log("Product - Add");
    dispatch(
      addToCart({
        product: product,
        quantity: 1,
      })
    );
  };

  return (
    <li data-category="">
      <Link to={`/product/${product.id}`}>
        <picture>
          <img src={product.img[0]} alt={product.title} />
        </picture>
      </Link>
      <div className="detail">
        <div className="item-icon">
          <button>
            <Link
              to={`/product/${product.id}`}
              className="product-details-link"
            >
              <PiEyeBold />
            </Link>
          </button>
          {!isFromCart ? (
            <div>
              <button>
                <FaRegHeart />
              </button>
              <button onClick={handleAddToCart}>
                <FaBasketShopping />
              </button>
            </div>
          ) : (
            <div>
              <div style={{ margin: "7.9vw 0vw" }} />
            </div>
          )}
        </div>
        <DivDetailsContent>
          <strong>{product.title}</strong>
          <section className="card-reviews">
            <ReactStars
              count={5}
              size={24}
              value={3}
              edit={false}
              activeColor="#ffd700"
            />
            <span className="total-reviews">{product.reviews}</span>
          </section>
        </DivDetailsContent>
        <DivDetailsButton>
          <button className="button-detail-shop" onClick={handleAddToCart}>
            Buy Now
          </button>
        </DivDetailsButton>
      </div>
      <h4>{toCurrency(product.newPrice)}</h4>
    </li>
  );
};

export default Product;
