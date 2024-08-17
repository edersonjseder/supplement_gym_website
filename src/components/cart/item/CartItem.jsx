import React from "react";
import "./CartItem.css";
import { useDispatch } from "react-redux";
import { changeQuantity } from "../../../redux/features/cart";

const CartItem = ({ item }) => {
  const dispatch = useDispatch();
  console.log("CartItem - item: ", item);

  const handlePlusQuantity = () => {
    dispatch(
      changeQuantity({
        product: item.product,
        quantity: item.quantity + 1,
      })
    );
  };
  const handleMinusQuantity = () => {
    dispatch(
      changeQuantity({
        product: item.product,
        quantity: item.quantity - 1,
      })
    );
  };
  return (
    <div className="sidebar-cart-item">
      <img src={item.product.img} alt={item.product.title} className="" />
      <h3>{item.product.title}</h3>
      <p>{`$${Number(item.product.newPrice) * item.quantity}`}</p>
      <div className="sidebar-cart-quantity">
        <button onClick={handleMinusQuantity}>-</button>
        <span>{item.quantity}</span>
        <button onClick={handlePlusQuantity}>+</button>
      </div>
    </div>
  );
};

export default CartItem;
