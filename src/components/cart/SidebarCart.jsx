import React from "react";
import { CgCloseO } from "react-icons/cg";
import { DivTitleCart } from "../../styles/Styles";
import "./SidebarCart.css";
import CartItem from "./item/CartItem";
import {
  DivSidebarButtons,
  DivSidebarEmptyItems,
  DivSidebarItems,
} from "../../styles/detailsStyles";
import { BsFillCreditCardFill } from "react-icons/bs";
import { FaCartShopping } from "react-icons/fa6";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const SidebarCart = ({ showSidebar, sidebar }) => {
  const navigate = useNavigate();
  const carts = useSelector((store) => store.cart.items);

  const showCart = () => {
    showSidebar();
    navigate("/show-cart");
  };
  const checkout = () => {
    navigate("/checkout");
  };

  return (
    <div
      id="side-shopping-cart"
      className={
        sidebar ? "shopping-cart-sidebar is-active" : "shopping-cart-sidebar"
      }
    >
      <DivTitleCart>
        <h2>Shopping Cart</h2>
        <span className="sidebar-cart-close-icon" onClick={showSidebar}>
          <CgCloseO />
        </span>
      </DivTitleCart>

      {carts.length > 0 ? (
        <DivSidebarItems>
          {carts.map((item, index) => (
            <CartItem key={index} item={item} />
          ))}
        </DivSidebarItems>
      ) : (
        <DivSidebarEmptyItems>
          <FaCartShopping className="sidebar-shopping-icon" />
          <span className="sidebar-shopping-text">Your cart is empty</span>
        </DivSidebarEmptyItems>
      )}
      <DivSidebarButtons>
        <button onClick={showCart} className="button-sidebar-show-cart">
          <FaCartShopping className="btn-product-detail-icon" />
          Show Cart
        </button>
        <button onClick={checkout} className="button-sidebar-checkout">
          <BsFillCreditCardFill className="btn-product-detail-icon" />
          Checkout
        </button>
      </DivSidebarButtons>
    </div>
  );
};

export default SidebarCart;
