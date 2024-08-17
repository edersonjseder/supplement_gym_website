import React, { useState } from "react";
import ContainerProductCheckout from "../../../containers/ContainerProductCheckout";
import {
  DivCartItemColumn,
  DivCartItemsColumn,
  DivCartRow,
  DivCheckoutColumn,
  DivCheckoutDataColumn,
  DivCheckoutIconRow,
  DivCheckoutItemColumn,
  DivCheckoutItemsColumn,
  DivCheckoutPriceColumn,
  DivCheckoutProductsRow,
  DivCheckoutRowButton,
  DivInputNameRow,
  DivInputRowTitle,
  DivInputTesteRow,
  DivRow,
  DivRowButton,
  DivRowContinueButton,
  SectionProductCheckout,
} from "../../../../styles/checkoutStyles";
import "./ProductCheckout.css";
import { FaCheck } from "react-icons/fa6";
import { ImPriceTags } from "react-icons/im";
import { FaArrowLeftLong } from "react-icons/fa6";
import { useDispatch, useSelector } from "react-redux";
import { toCurrency } from "../../../../utils/Utils";
import { CALC_TOTAL_VALUE } from "../../../../redux/features/cart";

const initialState = {
  firstName: "",
  lastName: "",
  companyName: "",
  country: "",
  address: "",
  complement: "",
  city: "",
  state: "",
  zipCode: "",
  phone: "",
  email: "",
  orderNotes: "",
  paymentType: "",
  shipmentType: "sedex",
};

const ProductCheckout = () => {
  const formData = new FormData();
  const [billingDetails, setBillingDetails] = useState(initialState);
  const [showUserDataFields, setShowUserDataFields] = useState(false);
  const [showShippingFields, setShowShippingFields] = useState(false);
  const [showShippingTypeFields, setShowShippingTypeFields] = useState(false);
  const [showPayerFields, setShowPayerFields] = useState(false);
  const [showPaymentType, setShowPaymentType] = useState(false);
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [shipType, setShipType] = useState("");
  const carts = useSelector((store) => store.cart.items);
  const checkTotal = useSelector((store) => store.cart.totalValues);
  const dispatch = useDispatch();

  dispatch(CALC_TOTAL_VALUE(carts));

  const {
    firstName,
    lastName,
    companyName,
    country,
    address,
    complement,
    city,
    state,
    zipCode,
    phone,
    email,
    orderNotes,
    paymentType,
    shipmentType,
  } = billingDetails;

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setBillingDetails({ ...billingDetails, [name]: value });
  };

  const continueUserData = (e) => {
    e.preventDefault();
    setShowUserDataFields(true);
  };

  const continueShipping = (e) => {
    e.preventDefault();
    setShowShippingFields(true);
  };

  const continueShipType = (e) => {
    e.preventDefault();
    setShowShippingTypeFields(true);
  };

  const continuePayer = (e) => {
    e.preventDefault();
    setShowPayerFields(true);
  };

  const continuePaymentType = (e) => {
    e.preventDefault();
    setShowPaymentType(true);
  };

  const continueConfirmation = (e) => {
    e.preventDefault();
    setShowConfirmation(true);
  };

  const onShippmentTypeChange = (ev) => {
    console.log("onShippmentTypeChange - ev.target.value: ", ev.target.value);
    setShipType(ev.target.value);
  };

  const proceedNext = (e) => {
    e.preventDefault();
    console.log("Proceed");
  };

  const addCupon = (e) => {
    e.preventDefault();
    console.log("addCupon");
  };

  const saveIt = (e) => {
    e.preventDefault();
    formData.append("firstName", firstName);
    formData.append("lastName", lastName);
    formData.append("companyName", companyName);
    formData.append("country", country);
    formData.append("address", address);
    formData.append("complement", complement);
    formData.append("city", city);
    formData.append("state", state);
    formData.append("zipCode", zipCode);
    formData.append("phone", phone);
    formData.append("email", email);
    formData.append("orderNotes", orderNotes);
    formData.append("paymentType", paymentType);
    formData.append("shipmentType", shipmentType);

    console.log("Data: ", ...formData);
  };
  return (
    <ContainerProductCheckout>
      <SectionProductCheckout>
        <DivCheckoutProductsRow>
          <form onSubmit={saveIt}>
            <DivCartRow>
              <DivCheckoutColumn>
                <DivCartRow>
                  <div
                    className="shipping-topic-square"
                    onClick={(e) => continueUserData(e)}
                  >
                    <DivCheckoutDataColumn>
                      <DivInputRowTitle>
                        <span className="product-checkout-icon">1</span>
                        <h1 className="billing-details-title">User data</h1>
                      </DivInputRowTitle>
                      {showUserDataFields && (
                        <DivRow>
                          <DivInputTesteRow>
                            <input
                              type="email"
                              name="email"
                              value={email}
                              className={`form-input ${
                                showUserDataFields ? "disabled" : ""
                              }`}
                              placeholder=" "
                              onChange={handleInputChange}
                              disabled={showUserDataFields}
                            />
                            <div className="cut cut-short"></div>
                            <label for="email" className="placeholder">
                              Email
                            </label>
                          </DivInputTesteRow>
                          <DivInputNameRow>
                            <DivInputTesteRow>
                              <input
                                type="text"
                                name="firstName"
                                value={firstName}
                                className="form-input"
                                placeholder=" "
                                onChange={handleInputChange}
                              />
                              <div className="cut"></div>
                              <label for="firstName" className="placeholder">
                                First Name
                              </label>
                            </DivInputTesteRow>
                            <DivInputTesteRow>
                              <input
                                type="text"
                                name="lastName"
                                value={firstName}
                                className="form-input"
                                placeholder=" "
                                onChange={handleInputChange}
                              />
                              <div className="cut"></div>
                              <label for="lastName" className="placeholder">
                                Last Name
                              </label>
                            </DivInputTesteRow>
                          </DivInputNameRow>
                          <DivInputTesteRow>
                            <input
                              type="text"
                              name="phone"
                              value={phone}
                              className="form-input"
                              placeholder=" "
                              onChange={handleInputChange}
                            />
                            <div className="cut cut-short"></div>
                            <label for="phone" className="placeholder">
                              Phone
                            </label>
                          </DivInputTesteRow>
                          <DivRowContinueButton>
                            <button
                              className="button-row-continue"
                              onClick={(e) => proceedNext(e)}
                            >
                              Continue
                            </button>
                          </DivRowContinueButton>
                        </DivRow>
                      )}
                    </DivCheckoutDataColumn>
                  </div>
                </DivCartRow>

                <DivCartRow>
                  <div
                    className="shipping-topic-square"
                    onClick={(e) => continueShipping(e)}
                  >
                    <DivCheckoutDataColumn>
                      <DivInputRowTitle>
                        <span className="product-checkout-icon">2</span>
                        <h1 className="billing-details-title">
                          Shipping Address
                        </h1>
                      </DivInputRowTitle>
                      {showShippingFields && (
                        <DivRow>
                          <DivInputTesteRow>
                            <input
                              type="text"
                              name="zipCode"
                              value={zipCode}
                              className="form-input"
                              placeholder=" "
                              onChange={handleInputChange}
                            />
                            <div className="cut"></div>
                            <label for="zipCode" className="placeholder">
                              Zip Code
                            </label>
                          </DivInputTesteRow>
                          <DivInputNameRow>
                            <DivInputTesteRow>
                              <input
                                type="text"
                                name="state"
                                value={state}
                                className="form-input"
                                placeholder=" "
                                onChange={handleInputChange}
                              />
                              <div className="cut cut-short"></div>
                              <label for="state" className="placeholder">
                                State
                              </label>
                            </DivInputTesteRow>
                            <DivInputTesteRow>
                              <input
                                type="text"
                                name="city"
                                value={city}
                                className="form-input"
                                placeholder=" "
                                onChange={handleInputChange}
                              />
                              <div className="cut cut-short"></div>
                              <label for="city" className="placeholder">
                                City
                              </label>
                            </DivInputTesteRow>
                          </DivInputNameRow>
                          <DivInputTesteRow>
                            <input
                              type="text"
                              name="address"
                              value={address}
                              className="form-input"
                              placeholder=" "
                              onChange={handleInputChange}
                            />
                            <div className="cut"></div>
                            <label for="address" className="placeholder">
                              Address
                            </label>
                          </DivInputTesteRow>
                          <DivInputTesteRow>
                            <textarea
                              rows="6"
                              name="orderNotes"
                              value={orderNotes}
                              className="form-input"
                              placeholder=" "
                              onChange={handleInputChange}
                            />
                            <div className="cut"></div>
                            <label for="orderNotes" className="placeholder">
                              Order Notes
                            </label>
                          </DivInputTesteRow>
                        </DivRow>
                      )}
                    </DivCheckoutDataColumn>
                  </div>
                </DivCartRow>

                <DivCartRow>
                  <div
                    className="shipping-topic-square"
                    onClick={(e) => continueShipType(e)}
                  >
                    <DivCheckoutDataColumn>
                      <DivInputRowTitle>
                        <span className="product-checkout-icon">3</span>
                        <h1 className="billing-details-title">Payer Address</h1>
                      </DivInputRowTitle>
                      {showShippingTypeFields && (
                        <DivRow>
                          <DivInputTesteRow>
                            <input
                              type="text"
                              name="zipCode"
                              value={zipCode}
                              className="form-input"
                              placeholder=" "
                              onChange={handleInputChange}
                            />
                            <div className="cut"></div>
                            <label for="zipCode" className="placeholder">
                              Zip Code
                            </label>
                          </DivInputTesteRow>
                          <DivInputNameRow>
                            <DivInputTesteRow>
                              <input
                                type="text"
                                name="state"
                                value={state}
                                className="form-input"
                                placeholder=" "
                                onChange={handleInputChange}
                              />
                              <div className="cut cut-short"></div>
                              <label for="state" className="placeholder">
                                State
                              </label>
                            </DivInputTesteRow>
                            <DivInputTesteRow>
                              <input
                                type="text"
                                name="city"
                                value={city}
                                className="form-input"
                                placeholder=" "
                                onChange={handleInputChange}
                              />
                              <div className="cut cut-short"></div>
                              <label for="city" className="placeholder">
                                City
                              </label>
                            </DivInputTesteRow>
                          </DivInputNameRow>
                          <DivInputTesteRow>
                            <input
                              type="text"
                              name="address"
                              value={address}
                              className="form-input"
                              placeholder=" "
                              onChange={handleInputChange}
                            />
                            <div className="cut"></div>
                            <label for="address" className="placeholder">
                              Address
                            </label>
                          </DivInputTesteRow>
                          <DivInputTesteRow>
                            <textarea
                              rows="6"
                              name="orderNotes"
                              value={orderNotes}
                              className="form-input"
                              placeholder=" "
                              onChange={handleInputChange}
                            />
                            <div className="cut"></div>
                            <label for="orderNotes" className="placeholder">
                              Order Notes
                            </label>
                          </DivInputTesteRow>
                        </DivRow>
                      )}
                    </DivCheckoutDataColumn>
                  </div>
                </DivCartRow>
              </DivCheckoutColumn>

              <DivCheckoutColumn>
                <DivCartRow>
                  <div
                    className="shipping-topic-square"
                    onClick={(e) => continuePayer(e)}
                  >
                    <DivCheckoutDataColumn>
                      <DivInputRowTitle>
                        <span className="product-checkout-icon">4</span>
                        <h1 className="billing-details-title">
                          Shippment Method
                        </h1>
                      </DivInputRowTitle>
                      {showPayerFields && (
                        <DivRow>
                          <DivInputTesteRow>
                            <label className="shipment-radio">
                              <input
                                type="radio"
                                name="radio"
                                value={shipmentType}
                                checked={shipType === shipmentType}
                                onChange={(e) => onShippmentTypeChange(e)}
                              />
                              <span className="radio-shipment-btn">
                                <FaCheck className="radio-shipment-check" />
                                <div className="shipment-icons">
                                  <h3>{"Cash"}</h3>
                                </div>
                              </span>
                            </label>
                          </DivInputTesteRow>
                          <DivInputTesteRow>
                            <label className="shipment-radio">
                              <input
                                type="radio"
                                name="radio"
                                value={shipmentType}
                                checked={shipType === shipmentType}
                                onChange={(e) => onShippmentTypeChange(e)}
                              />
                              <span className="radio-shipment-btn">
                                <FaCheck className="radio-shipment-check" />
                                <div className="shipment-icons">
                                  <h3>{"Card"}</h3>
                                </div>
                              </span>
                            </label>
                          </DivInputTesteRow>
                          <DivInputTesteRow>
                            <label className="shipment-radio">
                              <input
                                type="radio"
                                name="radio"
                                value={shipmentType}
                                checked={shipType === shipmentType}
                                onChange={(e) => onShippmentTypeChange(e)}
                              />
                              <span className="radio-shipment-btn">
                                <FaCheck className="radio-shipment-check" />
                                <div className="shipment-icons">
                                  <h3>{"Card"}</h3>
                                </div>
                              </span>
                            </label>
                          </DivInputTesteRow>
                          <DivInputTesteRow>
                            <label className="shipment-radio">
                              <input
                                type="radio"
                                name="radio"
                                value={shipmentType}
                                checked={shipType === shipmentType}
                                onChange={(e) => onShippmentTypeChange(e)}
                              />
                              <span className="radio-shipment-btn">
                                <FaCheck className="radio-shipment-check" />
                                <div className="shipment-icons">
                                  <h3>{"Card"}</h3>
                                </div>
                              </span>
                            </label>
                          </DivInputTesteRow>
                        </DivRow>
                      )}
                    </DivCheckoutDataColumn>
                  </div>
                </DivCartRow>

                <DivCartRow>
                  <div
                    className="shipping-topic-square"
                    onClick={(e) => continuePaymentType(e)}
                  >
                    <DivCheckoutDataColumn>
                      <DivInputRowTitle>
                        <span className="product-checkout-icon">5</span>
                        <h1 className="billing-details-title">
                          Payment Method
                        </h1>
                      </DivInputRowTitle>
                      {showPaymentType && (
                        <DivRow>
                          <DivInputTesteRow>
                            <label className="shipment-radio">
                              <input
                                type="radio"
                                name="radio"
                                value={shipmentType}
                                checked={shipType === shipmentType}
                                onChange={(e) => onShippmentTypeChange(e)}
                              />
                              <span className="radio-shipment-btn">
                                <FaCheck className="radio-shipment-check" />
                                <div className="shipment-icons">
                                  <h3>{"Cash"}</h3>
                                </div>
                              </span>
                            </label>
                          </DivInputTesteRow>
                          <DivInputTesteRow>
                            <label className="shipment-radio">
                              <input
                                type="radio"
                                name="radio"
                                value={shipmentType}
                                checked={shipType === shipmentType}
                                onChange={(e) => onShippmentTypeChange(e)}
                              />
                              <span className="radio-shipment-btn">
                                <FaCheck className="radio-shipment-check" />
                                <div className="shipment-icons">
                                  <h3>{"Card"}</h3>
                                </div>
                              </span>
                            </label>
                          </DivInputTesteRow>
                          <DivInputTesteRow>
                            <label className="shipment-radio">
                              <input
                                type="radio"
                                name="radio"
                                value={shipmentType}
                                checked={shipType === shipmentType}
                                onChange={(e) => onShippmentTypeChange(e)}
                              />
                              <span className="radio-shipment-btn">
                                <FaCheck className="radio-shipment-check" />
                                <div className="shipment-icons">
                                  <h3>{"Card"}</h3>
                                </div>
                              </span>
                            </label>
                          </DivInputTesteRow>
                          <DivInputTesteRow>
                            <label className="shipment-radio">
                              <input
                                type="radio"
                                name="radio"
                                value={shipmentType}
                                checked={shipType === shipmentType}
                                onChange={(e) => onShippmentTypeChange(e)}
                              />
                              <span className="radio-shipment-btn">
                                <FaCheck className="radio-shipment-check" />
                                <div className="shipment-icons">
                                  <h3>{"Card"}</h3>
                                </div>
                              </span>
                            </label>
                          </DivInputTesteRow>
                        </DivRow>
                      )}
                    </DivCheckoutDataColumn>
                  </div>
                </DivCartRow>

                <DivCartRow>
                  <div
                    className="shipping-topic-square"
                    onClick={(e) => continueConfirmation(e)}
                  >
                    <DivCheckoutDataColumn>
                      <DivInputRowTitle>
                        <span className="product-checkout-icon">6</span>
                        <h1 className="billing-details-title">Confirmation</h1>
                      </DivInputRowTitle>
                      {showConfirmation && (
                        <DivRow>
                          <DivInputTesteRow>
                            <input
                              type="text"
                              name="zipCode"
                              value={zipCode}
                              className="form-input"
                              placeholder=" "
                              onChange={handleInputChange}
                            />
                            <div className="cut"></div>
                            <label for="zipCode" className="placeholder">
                              Zip Code
                            </label>
                          </DivInputTesteRow>
                          <DivInputNameRow>
                            <DivInputTesteRow>
                              <input
                                type="text"
                                name="state"
                                value={state}
                                className="form-input"
                                placeholder=" "
                                onChange={handleInputChange}
                              />
                              <div className="cut cut-short"></div>
                              <label for="state" className="placeholder">
                                State
                              </label>
                            </DivInputTesteRow>
                            <DivInputTesteRow>
                              <input
                                type="text"
                                name="city"
                                value={city}
                                className="form-input"
                                placeholder=" "
                                onChange={handleInputChange}
                              />
                              <div className="cut cut-short"></div>
                              <label for="city" className="placeholder">
                                City
                              </label>
                            </DivInputTesteRow>
                          </DivInputNameRow>
                          <div className="div-place-order">
                            <button
                              type="submit"
                              className="button-cart-place-order"
                            >
                              Place Order
                            </button>
                          </div>
                        </DivRow>
                      )}
                    </DivCheckoutDataColumn>
                  </div>
                </DivCartRow>
              </DivCheckoutColumn>
            </DivCartRow>
          </form>
          <DivCartRow>
            <DivCheckoutPriceColumn>
              <DivInputRowTitle>
                <h1 className="billing-details-title">
                  {carts.length > 1 ? `Your Orders` : "Your Order"}
                </h1>
              </DivInputRowTitle>
              {carts.length > 0 ? (
                <DivCheckoutItemsColumn>
                  {carts.map((item, index) => (
                    <div key={index}>
                      <div key={index} className="products-item-checkout">
                        <DivCheckoutIconRow>
                          <span className="product-checkout-item-icon">
                            {`${item.quantity}x`}
                          </span>
                          <img
                            className="items-cart-img-chkt"
                            src={item.product.img}
                            alt={item.title}
                          />
                        </DivCheckoutIconRow>
                        <DivCheckoutItemColumn>
                          <span className="checkout-item-title">
                            {item.product.title}
                          </span>
                          <span className="checkout-item-price">
                            {toCurrency(item.product.newPrice)}
                          </span>
                          <span className="checkout-item-flavor">
                            {item.product.flavorChosen !== undefined
                              ? `Flavour chosen ${item.product.flavorChosen}`
                              : ""}
                          </span>
                          <div className="div-checkout-item-sum-price">
                            <p className="checkout-item-sum-price">{`${toCurrency(
                              Number(item.product.newPrice) * item.quantity
                            )}`}</p>
                          </div>
                        </DivCheckoutItemColumn>
                      </div>
                      {index < carts.length - 1 && (
                        <span className="border-bottom-checkout-item" />
                      )}
                    </div>
                  ))}
                </DivCheckoutItemsColumn>
              ) : (
                <div />
              )}
              <form onSubmit={addCupon}>
                <div className="cupom-item-checkout-body">
                  <div className="checkout-item-content">
                    <div className="cupom-item-checkout-content">
                      <input
                        type="text"
                        name="zipcode"
                        value={zipCode}
                        onChange={handleInputChange}
                        autoFocus
                      />
                      <button type="submit" className="btn-item-add-cupom">
                        <ImPriceTags className="icon-item-checkout-cupom" />
                        Add Cupom
                      </button>
                    </div>
                  </div>
                </div>
              </form>
              <div className="border-item-checkout-content">
                <h3 className="item-checkout-total-text-label">Sub-total:</h3>
                <h3 className="item-checkout-total-text-amount">{`${toCurrency(
                  checkTotal
                )}`}</h3>
              </div>
              <DivCheckoutRowButton>
                <button className="button-item-checkout-edit-cart">
                  <FaArrowLeftLong className="btn-product-detail-icon" />
                  Edit Cart
                </button>
              </DivCheckoutRowButton>
            </DivCheckoutPriceColumn>
          </DivCartRow>
        </DivCheckoutProductsRow>
      </SectionProductCheckout>
    </ContainerProductCheckout>
  );
};

export default ProductCheckout;
