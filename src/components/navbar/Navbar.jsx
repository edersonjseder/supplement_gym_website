import React, { useEffect, useState } from "react";
import { Link as PathLink } from "react-router-dom";
import logo from "../../images/logo.png";
import { MdOutlineShoppingCartCheckout } from "react-icons/md";
import { FiHeart } from "react-icons/fi";
import { AiOutlineUserAdd } from "react-icons/ai";
import { DivCart } from "../../styles/Styles";
import SidebarCart from "../cart/SidebarCart";
import { useSelector } from "react-redux";
import "./Navbar.css";

function Navbar() {
  const [nav, setNav] = useState();
  const [sidebar, setSidebar] = useState(false);
  const [totalQuantity, setTotalQuantity] = useState(0);

  const carts = useSelector((store) => store.cart.items);

  const changeBackground = () => {
    if (window.scrollY >= 50) {
      setNav(true);
    } else {
      setNav(false);
    }
  };

  const showSidebar = () => setSidebar(!sidebar);

  window.addEventListener("scroll", changeBackground);

  useEffect(() => {
    let total = 0;
    carts.forEach((item) => (total += item.quantity));
    setTotalQuantity(total);
    console.log("Navbar - useEffect - totalQuantity:", totalQuantity);
    if (totalQuantity > 0) {
      document.querySelector(".shopping-cart-qty-icon").style.visibility =
        "visible";
    } else {
      document.querySelector(".shopping-cart-qty-icon").style.visibility =
        "hidden";
    }
  }, [carts, totalQuantity]);
  return (
    <nav className={nav ? "nav active" : "nav"}>
      <PathLink to="/" className="logo">
        <img src={logo} alt="logo" />
      </PathLink>
      <input type="checkbox" id="menu-btn" className="menu-btn" />
      <label htmlFor="menu-btn" className="menu-icon">
        <span className="nav-icon"></span>
      </label>
      <ul className="menu">
        <li>
          <PathLink className="home" to="/">
            Home
          </PathLink>
        </li>
        <li>
          <PathLink className="shop" to="/shop">
            Shop
          </PathLink>
        </li>
        <li>
          <PathLink className="special-offer" to="/special-offer">
            Special Offer
          </PathLink>
        </li>
        <li>
          <PathLink className="combos" to="/combo">
            Combos
          </PathLink>
        </li>
        <li>
          <PathLink className="accessories" to="/accessories">
            Accessories
          </PathLink>
        </li>
        <li>
          <PathLink className="about" to="/about">
            Clothes
          </PathLink>
        </li>
        <li onClick={showSidebar}>
          <DivCart>
            <PathLink className="shopping-cart" to="#">
              <MdOutlineShoppingCartCheckout className="nav-icons" />
              <span className="shopping-cart-qty-icon">{totalQuantity}</span>
            </PathLink>
            <PathLink className="nav-favourites" to="/favourites">
              <FiHeart className="nav-icons" />
            </PathLink>
            <PathLink className="nav-add-user" to="/user-add">
              <AiOutlineUserAdd className="nav-icons" />
            </PathLink>
          </DivCart>
        </li>
      </ul>
      <SidebarCart showSidebar={showSidebar} sidebar={sidebar} />
    </nav>
  );
}

export default Navbar;
