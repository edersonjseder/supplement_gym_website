import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./ProductDetails.css";
import ContainerProductDetails from "../../../containers/ContainerProductDetails";
import {
  DivButtons,
  DivColumn,
  DivLine,
  DivRow,
  SectionDescriptionDetails,
  SectionDetails,
} from "../../../../styles/detailsStyles";
import { useDispatch, useSelector } from "react-redux";
import ReactStars from "react-rating-stars-component";
import { getProduct } from "../../../../redux/features/productsSlice";
import { AiOutlineHeart } from "react-icons/ai";
import { FaCheck } from "react-icons/fa6";
import { toCurrency } from "../../../../utils/Utils";
import { BsFillCreditCardFill } from "react-icons/bs";
import { FaCartShopping } from "react-icons/fa6";
import { RiTruckFill } from "react-icons/ri";
import CalculateDeliveryModal from "./modal/CalculateDeliveryModal";
import Accordion from "../../../accordion/Accordion";
import { addToCart } from "../../../../redux/features/cart";

const ProductDetails = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { product, isError, message } = useSelector((state) => state.products);
  const [productQty, setProductQty] = useState(1);
  const [showCalcDelivery, setShowCalcDelivery] = useState(false);
  const [flavour, setFlavour] = useState("");

  const handleCloseCalcDelivery = () => setShowCalcDelivery(false);
  const handleShowCalcDelivery = () => setShowCalcDelivery(true);

  console.log("ProductDetails - params: ", id);
  console.log("ProductDetails: ", product);

  const onFlavourChange = (ev) => {
    console.log(
      'document.querySelector(".tooltip-error-message-add-to-cart"): ',
      document.querySelector(".tooltip-error-message-add-to-cart").style
        .visibility
    );
    console.log(
      'document.querySelector(".tooltip-error-message-buy-now"): ',
      document.querySelector(".tooltip-error-message-buy-now").style.visibility
    );
    if (
      document.querySelector(".tooltip-error-message-add-to-cart").style
        .visibility !== "hidden"
    ) {
      console.log("ProductDetails - IF - onFlavourChange");
      document.querySelector(
        ".tooltip-error-message-add-to-cart"
      ).style.visibility = "hidden";
    } else {
      console.log("ProductDetails - ELSE IF - onFlavourChange");
      document.querySelector(
        ".tooltip-error-message-buy-now"
      ).style.visibility = "hidden";
    }
    setFlavour(ev.target.value);
  };

  const handleAddToCart = () => {
    console.log("ProductDetails - handleAddToCart - flavour: ", flavour);
    console.log(
      "ProductDetails - handleAddToCart - flavour??: ",
      flavour !== ""
    );
    if (flavour !== "") {
      dispatch(
        addToCart({
          product: { ...product, flavorChosen: flavour },
          quantity: productQty,
        })
      );
    } else {
      document.querySelector(
        ".tooltip-error-message-add-to-cart"
      ).style.visibility = "visible";
      document.querySelector(
        ".tooltip-error-message-add-to-cart"
      ).style.opacity = 1;
      if (
        document.querySelector(".tooltip-error-message-buy-now").style
          .visibility === "visible"
      ) {
        document.querySelector(
          ".tooltip-error-message-buy-now"
        ).style.visibility = "hidden";
      }
    }
  };

  const handleBuyNow = () => {
    if (flavour !== "") {
      console.log("Proceed to Checkout");
    } else {
      document.querySelector(
        ".tooltip-error-message-buy-now"
      ).style.visibility = "visible";
      document.querySelector(
        ".tooltip-error-message-buy-now"
      ).style.opacity = 1;
      if (
        document.querySelector(".tooltip-error-message-add-to-cart").style
          .visibility === "visible"
      ) {
        document.querySelector(
          ".tooltip-error-message-add-to-cart"
        ).style.visibility = "hidden";
      }
    }
  };

  useEffect(() => {
    console.log("ProductDetails - useEffect");
    dispatch(getProduct(id));
  }, [isError, message, dispatch, id]);

  return (
    <>
      <ContainerProductDetails>
        <SectionDetails>
          <DivRow>
            <DivColumn>
              <div className="product-images-details">
                <div className="main-product-image">
                  {product?.img ? (
                    <img src={product.img} alt={product?.title} />
                  ) : (
                    <p>No Image set for this product</p>
                  )}
                </div>
                <div className="other-product-images">
                  <div>
                    <img src={product?.img} className="img-fluid" alt="Watch" />
                  </div>
                  <div>
                    <img src={product?.img} className="img-fluid" alt="Watch" />
                  </div>
                  <div>
                    <img src={product?.img} className="img-fluid" alt="Watch" />
                  </div>
                  <div>
                    <img src={product?.img} className="img-fluid" alt="Watch" />
                  </div>
                </div>
              </div>
            </DivColumn>
            <DivColumn>
              <div className="main-product-details">
                <div className="border-bottom-title">
                  <h3 className="title">{product?.title}</h3>
                </div>
                <div className="border-bottom-content1">
                  <div className="det-reviews">
                    <ReactStars
                      count={5}
                      size={24}
                      value={3}
                      edit={false}
                      activeColor="#ffd700"
                    />
                    <p className="t-review">{product?.reviews}</p>
                  </div>
                  {true ? (
                    <span className="in-stock">
                      <FaCheck className="in-stock-check" />
                      In Stock. Fast Delivery
                    </span>
                  ) : (
                    <span className="not-in-stock">
                      <FaCheck className="not-in-stock-check" />
                      Not In Stock.
                    </span>
                  )}
                </div>
                <div className="border-bottom-content1">
                  <DivLine>
                    <h3 className="product-heading">Choose flavour:</h3>

                    <div className="radio-flavours-btns">
                      {product?.flavours.length > 0 &&
                        product?.flavours.map((item, index) => (
                          <label key={index} className="flavour-radio">
                            <input
                              type="radio"
                              name="radio"
                              value={item.flavor}
                              checked={flavour === item.flavor}
                              onChange={(e) => onFlavourChange(e)}
                            />
                            <span className="radio-flavour-btn">
                              <FaCheck className="radio-check" />
                              <div className="flavour-icons">
                                <img
                                  src={item.icon}
                                  alt="cacau"
                                  className="flavour-icon-img"
                                />
                                <h3>{item.flavor}</h3>
                              </div>
                            </span>
                          </label>
                        ))}
                    </div>
                  </DivLine>
                  <p className="price">{toCurrency(product?.newPrice)}</p>
                </div>
                <div className="border-bottom-content2">
                  <DivLine>
                    <h3 className="product-heading">Quantity:</h3>

                    <div className="input-quantity-container">
                      <div className="input-container">
                        <input type="range" min="0" max="100" value="100" />
                        <div className="quantity-input">
                          <button
                            className="quantity-prev"
                            onClick={() => setProductQty(productQty - 1)}
                            disabled={productQty === 0}
                          >
                            -
                          </button>
                          <div id="quantity-box">
                            <div>
                              <span>{productQty}</span>
                            </div>
                          </div>
                          <button
                            className="quantity-next"
                            onClick={() => setProductQty(productQty + 1)}
                          >
                            +
                          </button>
                        </div>
                      </div>
                      <DivButtons>
                        <span className="tooltip-error-message-add-to-cart">
                          Please select a flavor
                        </span>
                        <button
                          className="button-product-details"
                          onClick={handleAddToCart}
                        >
                          <FaCartShopping className="btn-product-detail-icon" />
                          Add to Cart
                        </button>

                        <span className="tooltip-error-message-buy-now">
                          Please select a flavor
                        </span>
                        <button
                          className="button-product-details"
                          onClick={handleBuyNow}
                        >
                          <BsFillCreditCardFill className="btn-product-detail-icon" />
                          Buy Now
                        </button>
                      </DivButtons>
                    </div>
                  </DivLine>
                  <DivLine>
                    <div>
                      <button className="btn-product-link">
                        <AiOutlineHeart className="product-heart" /> Add to
                        Wishlist
                      </button>
                    </div>
                  </DivLine>
                  <DivLine>
                    <button
                      className="btn-product-link"
                      onClick={handleShowCalcDelivery}
                    >
                      <RiTruckFill className="product-delivery" />
                      Calculate Delivery
                    </button>
                  </DivLine>
                  <DivLine>
                    <h3 className="product-heading">Shipping & Returns:</h3>
                    <p className="product-data">
                      Free shipping and returns available on all orders!
                      <br />
                      We ship all US domestic orders within{" "}
                      <b>5-10 business days!</b>
                    </p>
                  </DivLine>
                </div>
              </div>
            </DivColumn>
          </DivRow>
        </SectionDetails>
        <SectionDescriptionDetails>
          <div className="main-product-details-middle">
            <Accordion />
          </div>
        </SectionDescriptionDetails>
      </ContainerProductDetails>
      <CalculateDeliveryModal
        show={showCalcDelivery}
        handleClose={handleCloseCalcDelivery}
      />
    </>
  );
};

export default ProductDetails;
