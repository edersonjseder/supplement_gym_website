import React, { useEffect, useState } from "react";
import "./ProductItemsCart.css";
import ContainerProductItemsCart from "../../../containers/ContainerProductItemsCart";
import {
  DivCartItemColumn,
  DivCartItemsColumn,
  DivCartItemsPriceColumn,
  DivCartRow,
  DivSuggestedProductsField,
  SectionProductItemsCart,
  SectionSuggestedProductItemsCart,
  UlSuggestedProducts,
} from "../../../../styles/checkoutStyles";
import { useDispatch, useSelector } from "react-redux";
import { handleToTop, toCurrency } from "../../../../utils/Utils";
import { RiDeleteBin6Line } from "react-icons/ri";
import {
  addToCart,
  changeQuantity,
  removeItemFromCart,
} from "../../../../redux/features/cart";
import { FaCartShopping } from "react-icons/fa6";
import { RiTruckFill } from "react-icons/ri";
import { CgArrowLongRight } from "react-icons/cg";
import {
  getSuggestedProducts,
  suggestedProducts,
} from "../../../../redux/features/productsSlice";
import Product from "../product/Product";
import { useNavigate } from "react-router-dom";

const initialState = {
  zipCode: "",
};

const ProductItemsCart = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [formData, setFormData] = useState(initialState);
  const [total, setTotal] = useState(0);
  const { zipCode } = formData;
  const carts = useSelector((store) => store.cart.items);
  const suggested = useSelector(suggestedProducts);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const login = async (e) => {
    e.preventDefault();
    console.log("formData ", formData);
  };

  const removeItem = (item) => {
    console.log("removeItem - item: ", item);
    dispatch(removeItemFromCart(item));
  };

  const handleAddOne = (item) => {
    dispatch(
      changeQuantity({
        product: item.product,
        quantity: item.quantity + 1,
      })
    );
  };
  const handleRemoveOne = (item) => {
    dispatch(
      changeQuantity({
        product: item.product,
        quantity: item.quantity - 1,
      })
    );
  };

  const handleProceedToCheckout = () => {
    console.log(
      "handleProceedToCheckout - Proceed to Checkout - carts: ",
      carts.length
    );
    if (carts.length > 0) {
      console.log("Proceed to Checkout");
      navigate("/checkout");
    } else {
      console.log("Proceed to Checkout - ELSE");
      document.querySelector(
        ".tooltip-error-message-empty-cart"
      ).style.visibility = "visible";
      document.querySelector(
        ".tooltip-error-message-empty-cart"
      ).style.opacity = 1;
    }
  };

  useEffect(() => {
    const calcTotals = () => {
      let totals = 0;
      carts.forEach(
        (item) => (totals += Number(item.product.newPrice) * item.quantity)
      );
      setTotal(toCurrency(totals));
    };

    document.querySelector(".shopping-cart").style.visibility = "hidden";
    document.querySelector(".shopping-cart-qty-icon").style.visibility =
      "hidden";
    calcTotals();
    dispatch(getSuggestedProducts());
    handleToTop();
  }, [carts, dispatch]);

  return (
    <ContainerProductItemsCart>
      <SectionProductItemsCart>
        <DivCartRow>
          {carts.length > 0 ? (
            <DivCartItemsColumn>
              {carts.map((item, index) => (
                <div key={index} className="products-item-carts">
                  <img
                    className="items-cart-img"
                    src={item.product.img}
                    alt={item.title}
                  />
                  <DivCartItemColumn>
                    <span className="cart-item-title">
                      {item.product.title}
                    </span>
                    <span className="cart-item-price">
                      {toCurrency(item.product.newPrice)}
                    </span>
                    <span className="cart-item-flavor">{`Flavour chosen ${item.product.flavorChosen}`}</span>
                  </DivCartItemColumn>
                  <RiDeleteBin6Line
                    className="cart-item-delete-icon"
                    onClick={() => removeItem(item.product)}
                  />
                  <div className="sidebar-cart-quantity">
                    <button onClick={() => handleRemoveOne(item)}>-</button>
                    <span>{item.quantity}</span>
                    <button onClick={() => handleAddOne(item)}>+</button>
                  </div>
                  <div className="div-cart-item-sum-price">
                    <p className="cart-item-sum-price">{`${toCurrency(
                      Number(item.product.newPrice) * item.quantity
                    )}`}</p>
                  </div>
                </div>
              ))}
              <div className="border-bottom-cart-content">
                <button className="button-item-cart-keep-buying">
                  <FaCartShopping className="btn-product-detail-icon" />
                  Keep Buying
                </button>
              </div>
            </DivCartItemsColumn>
          ) : (
            <DivCartItemsColumn>
              <div className="products-item-carts-empty">
                <FaCartShopping className="btn-product-detail-icon" />
                <span>Your cart is empty</span>
              </div>
            </DivCartItemsColumn>
          )}

          <DivCartItemsPriceColumn>
            <div>
              <form onSubmit={login}>
                <div className="address-item-cart-body">
                  <div className="calc-address-item-cart-content">
                    <div className="address-item-cart-content">
                      <input
                        type="text"
                        name="zipcode"
                        value={zipCode}
                        onChange={handleInputChange}
                        autoFocus
                      />
                      <button type="submit" className="btn-address-item-cart">
                        <RiTruckFill className="icon-address-item-cart-calc-delivery" />
                        Calculate
                      </button>
                    </div>
                  </div>
                </div>
              </form>
              <div className="subtotal-cart-checkout-content">
                <h3 className="checkout-subtotal-text-label">Subtotal:</h3>
                <h3 className="checkout-subtotal-text-amount">{`${total}`}</h3>
              </div>
              <div className="border-top-cart-checkout-content">
                <h3 className="checkout-total-text-label">Total:</h3>
                <h3 className="checkout-total-text-amount">{`${total}`}</h3>
              </div>
              <span className="tooltip-error-message-empty-cart">
                Your cart is empty
              </span>
              <button
                className="button-item-cart-checkout"
                onClick={handleProceedToCheckout}
              >
                Proceed to Checkout
                <CgArrowLongRight />
              </button>
            </div>
          </DivCartItemsPriceColumn>
        </DivCartRow>
      </SectionProductItemsCart>
      {carts.length > 0 ? (
        <SectionSuggestedProductItemsCart>
          <h2 className="cart-related-items-title">Related Products</h2>
          <DivSuggestedProductsField>
            <UlSuggestedProducts id="ul-items">
              {suggested.map((item, index) => (
                <Product key={index} product={item} isFromCart={true} />
              ))}
            </UlSuggestedProducts>
          </DivSuggestedProductsField>
        </SectionSuggestedProductItemsCart>
      ) : (
        <div className="empty-items-cart-div" />
      )}
    </ContainerProductItemsCart>
  );
};

export default ProductItemsCart;
