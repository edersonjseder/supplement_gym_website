import React, { useEffect, useState } from "react";
import ContainerProductCheckout from "../../../containers/ContainerProductCheckout";
import {
  DivCartRow,
  DivCheckoutColumn,
  DivCheckoutDataColumn,
  DivCheckoutIconRow,
  DivCheckoutItemColumn,
  DivCheckoutItemsColumn,
  DivCheckoutPriceColumn,
  DivCheckoutProductsRow,
  DivCheckoutRowButton,
  DivColTitle,
  DivInputNameRow,
  DivInputRowTitle,
  DivInputTesteRow,
  DivLabelsRow,
  DivRow,
  DivRowContinueButton,
  DivRowTitle,
  Item,
  RadioButton,
  RadioButtonLabel,
  SectionItemsColumnCheckout,
  SectionProductCheckout,
} from "../../../../styles/checkoutStyles";
import "./ProductCheckout.css";
import { ImPriceTags } from "react-icons/im";
import { FaArrowLeftLong } from "react-icons/fa6";
import { useDispatch, useSelector } from "react-redux";
import { toCurrency } from "../../../../utils/Utils";
import { CALC_TOTAL_VALUE } from "../../../../redux/features/cart";
import { FaUser } from "react-icons/fa6";
import { FaEnvelope } from "react-icons/fa6";
import { FaPhone } from "react-icons/fa6";
import { SupCheckbox } from "../../../checkbox/SupCheckbox";
import { paymentTypesList } from "../../../../data/paymentTypes";
import { shippingTypesList } from "../../../../data/shippingTypes";
import { RiPencilFill } from "react-icons/ri";

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
  orderNotes: "",
  addressShipping: "",
  complementShipping: "",
  cityShipping: "",
  stateShipping: "",
  zipCodeShipping: "",
  orderNotesShipping: "",
  isBillingSameShipping: "",
  phone: "",
  email: "",
  paymentType: "",
  shipmentType: "sedex",
};

const ProductCheckout = () => {
  const formData = new FormData();
  const [billingDetails, setBillingDetails] = useState(initialState);
  const [showUserDataFields, setShowUserDataFields] = useState(false);
  const [showShippingFields, setShowShippingFields] = useState(false);
  const [showShipmentMethod, setShowShipmentMethod] = useState(false);
  const [showPayerAddress, setShowPayerAddress] = useState(false);
  const [showPaymentMethod, setShowPaymentMethod] = useState(false);
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [userDataComplete, setUserDataComplete] = useState(false);
  const [isSameAddress, setIsSameAddress] = useState(false);
  const [shipingAddressComplete, setShipingAddressComplete] = useState(false);
  const [payerAddressComplete, setPayerAddressComplete] = useState(false);
  const [paymentMethodComplete, setPaymentMethodComplete] = useState(false);
  const [shipmentMethodComplete, setShipmentMethodComplete] = useState(false);
  const [confirmationComplete, setConfirmationComplete] = useState(false);
  const [shipType, setShipType] = useState("United States Postal Service");
  const [paymentMethod, setPaymentMethod] = useState("Credit and Debit Card");

  const carts = useSelector((store) => store.cart.items);
  const checkTotal = useSelector((store) => store.cart.totalValues);
  const dispatch = useDispatch();

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
    addressShipping,
    complementShipping,
    cityShipping,
    stateShipping,
    zipCodeShipping,
    orderNotesShipping,
    isBillingSameShipping,
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

  const checkHandler = (value) => {
    console.log("ProductCheckout - value: ", value);
    setIsSameAddress(value !== "");
  };

  const showUserData = () => {
    setShowUserDataFields(true);
  };

  const continueConfirmation = (e) => {
    e.preventDefault();
    setShowConfirmation(true);
  };

  const onShippmentTypeChange = (ev) => {
    console.log("onShippmentTypeChange - ev.target.value: ", ev.target.value);
    console.log("onShippmentTypeChange - ev.target.value: ", ev);
    setShipType(ev.target.value);
  };

  const onChangePaymentMethod = (ev) => {
    console.log("onChangePaymentMethod - ev.target.value: ", ev.target.value);
    console.log("onChangePaymentMethod - ev.target: ", ev.target);
    setPaymentMethod(ev.target.value);
  };

  const editInformation = (e, number) => {
    e.preventDefault();
    switch (number) {
      case 1:
        setShowUserDataFields(true);
        setUserDataComplete(false);
        setShipingAddressComplete(false);
        setPayerAddressComplete(false);
        setShowPayerAddress(false);
        setShipmentMethodComplete(false);
        setShowShipmentMethod(false);
        setPaymentMethodComplete(false);
        setShowPaymentMethod(false);
        setIsSameAddress(false);
        break;
      case 2:
        setUserDataComplete(true);
        setShowShippingFields(true);
        setShipingAddressComplete(false);
        setPayerAddressComplete(false);
        setShowPayerAddress(false);
        setShipmentMethodComplete(false);
        setShowShipmentMethod(false);
        setPaymentMethodComplete(false);
        setShowPaymentMethod(false);
        break;
      case 3:
        setShowPayerAddress(true);
        setPayerAddressComplete(false);
        setIsSameAddress(false);
        setShipmentMethodComplete(false);
        setShowShipmentMethod(false);
        setPaymentMethodComplete(false);
        break;
      case 4:
        setShowShipmentMethod(true);
        setShipmentMethodComplete(false);
        setPaymentMethodComplete(false);
        setShowPaymentMethod(false);
        break;
      case 5:
        setShowPaymentMethod(true);
        setPaymentMethodComplete(false);
        setConfirmationComplete(false);
        setShowConfirmation(false);
        break;
      default:
        console.error("Unknown method");
    }
  };

  const proceedNext = (e, number) => {
    e.preventDefault();
    switch (number) {
      case 1:
        console.log("ProceedNext - number: ", number);
        setShowUserDataFields(false);
        setUserDataComplete(true);
        setShowShippingFields(true);
        break;
      case 2:
        console.log("ProceedNext - isSameAddress: ", isSameAddress);
        setShowShippingFields(false);
        setShipingAddressComplete(true);
        setShowPayerAddress(true);
        if (isSameAddress) {
          setPayerAddressComplete(true);
          setShowPayerAddress(false);
          setShowShipmentMethod(true);
        }
        break;
      case 3:
        setShowPayerAddress(false);
        setPayerAddressComplete(true);
        setShowShipmentMethod(true);
        break;
      case 4:
        setShowShipmentMethod(false);
        setShipmentMethodComplete(true);
        setShowPaymentMethod(true);
        break;
      case 5:
        setShowPaymentMethod(false);
        setPaymentMethodComplete(true);
        setShowConfirmation(true);
        break;
      case 6:
        setConfirmationComplete(true);
        break;
      default:
        console.error("Unknown method");
    }
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
    formData.append("addressShipping", addressShipping);
    formData.append("complementShipping", complementShipping);
    formData.append("cityShipping", cityShipping);
    formData.append("stateShipping", stateShipping);
    formData.append("zipCodeShipping", zipCodeShipping);
    formData.append("isBillingSameShipping", isBillingSameShipping);
    formData.append("phone", phone);
    formData.append("email", email);
    formData.append("orderNotes", orderNotes);
    formData.append("orderNotesShipping", orderNotesShipping);
    formData.append("paymentType", paymentType);
    formData.append("shipmentType", shipmentType);

    console.log("Data: ", ...formData);
  };

  useEffect(() => {
    dispatch(CALC_TOTAL_VALUE(carts));
  }, [carts, dispatch]);

  return (
    <ContainerProductCheckout>
      <SectionItemsColumnCheckout>
        <DivCheckoutProductsRow>
          <form onSubmit={saveIt}>
            <DivCartRow>
              <DivCheckoutColumn>
                <DivCartRow>
                  <DivCheckoutDataColumn>
                    <DivRowTitle>
                      <DivColTitle
                        className="shipping-topic-square"
                        onClick={() => showUserData()}
                      >
                        <span className="product-checkout-icon">1</span>
                        <h1 className="billing-details-title">User data</h1>
                      </DivColTitle>
                      {!showUserDataFields && (
                        <RiPencilFill
                          className="product-checkout-edit"
                          onClick={(e) => editInformation(e, 1)}
                        />
                      )}
                    </DivRowTitle>
                    {showUserDataFields ? (
                      <DivRow>
                        <DivInputTesteRow>
                          <input
                            type="email"
                            name="email"
                            value={email}
                            className="form-input"
                            placeholder=" "
                            onChange={handleInputChange}
                          />
                          <div className="cut cut-short"></div>
                          <label htmlFor="email" className="placeholder">
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
                            <label htmlFor="firstName" className="placeholder">
                              First Name
                            </label>
                          </DivInputTesteRow>
                          <DivInputTesteRow>
                            <input
                              type="text"
                              name="lastName"
                              value={lastName}
                              className="form-input"
                              placeholder=" "
                              onChange={handleInputChange}
                            />
                            <div className="cut"></div>
                            <label htmlFor="lastName" className="placeholder">
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
                          <label htmlFor="phone" className="placeholder">
                            Phone
                          </label>
                        </DivInputTesteRow>
                        <DivRowContinueButton>
                          <button
                            className="button-row-continue"
                            onClick={(e) => proceedNext(e, 1)}
                          >
                            Continue
                          </button>
                        </DivRowContinueButton>
                      </DivRow>
                    ) : (
                      <div />
                    )}
                    {userDataComplete && (
                      <DivLabelsRow>
                        <div className="label-row-user">
                          <FaUser />
                          <label name="firstName">{`${firstName} ${lastName}`}</label>
                        </div>

                        <div className="label-row-user">
                          <FaEnvelope />
                          <label name="email">{email}</label>
                        </div>

                        <div className="label-row-user">
                          <FaPhone />
                          <label name="phone">{phone}</label>
                        </div>
                      </DivLabelsRow>
                    )}
                  </DivCheckoutDataColumn>
                </DivCartRow>

                <DivCartRow>
                  <DivCheckoutDataColumn>
                    <DivRowTitle>
                      <DivColTitle>
                        <span className="product-checkout-icon">2</span>
                        <h1 className="billing-details-title">
                          Shipping Address
                        </h1>
                      </DivColTitle>
                      {userDataComplete && !showShippingFields && (
                        <RiPencilFill
                          className="product-checkout-edit"
                          onClick={(e) => editInformation(e, 2)}
                        />
                      )}
                    </DivRowTitle>
                    {userDataComplete ? (
                      showShippingFields ? (
                        <DivRow>
                          <DivInputTesteRow>
                            <input
                              type="text"
                              name="addressShipping"
                              value={addressShipping}
                              className="form-input"
                              placeholder=" "
                              onChange={handleInputChange}
                            />
                            <div className="cut"></div>
                            <label
                              htmlFor="addressShipping"
                              className="placeholder"
                            >
                              Address
                            </label>
                          </DivInputTesteRow>
                          <DivInputNameRow>
                            <DivInputTesteRow>
                              <input
                                type="text"
                                name="stateShipping"
                                value={stateShipping}
                                className="form-input"
                                placeholder=" "
                                onChange={handleInputChange}
                              />
                              <div className="cut cut-short"></div>
                              <label
                                htmlFor="stateShipping"
                                className="placeholder"
                              >
                                State
                              </label>
                            </DivInputTesteRow>
                            <DivInputTesteRow>
                              <input
                                type="text"
                                name="cityShipping"
                                value={cityShipping}
                                className="form-input"
                                placeholder=" "
                                onChange={handleInputChange}
                              />
                              <div className="cut cut-short"></div>
                              <label
                                htmlFor="cityShipping"
                                className="placeholder"
                              >
                                City
                              </label>
                            </DivInputTesteRow>
                          </DivInputNameRow>
                          <DivInputTesteRow>
                            <input
                              type="text"
                              name="zipCodeShipping"
                              value={zipCodeShipping}
                              className="form-input"
                              placeholder=" "
                              onChange={handleInputChange}
                            />
                            <div className="cut"></div>
                            <label
                              htmlFor="zipCodeShipping"
                              className="placeholder"
                            >
                              Zip Code
                            </label>
                          </DivInputTesteRow>
                          <DivInputTesteRow>
                            <textarea
                              rows="6"
                              name="orderNotesShipping"
                              value={orderNotesShipping}
                              className="form-input-text-area"
                              placeholder=" "
                              onChange={handleInputChange}
                            />
                            <div className="cut"></div>
                            <label htmlFor="orderNotes" className="placeholder">
                              Order Notes
                            </label>
                          </DivInputTesteRow>
                          <DivInputTesteRow>
                            <SupCheckbox
                              handleChange={checkHandler}
                              checked={isSameAddress}
                              value={"yes"}
                              title={
                                "Shipping address is the same as the payer address"
                              }
                            />
                          </DivInputTesteRow>
                          <DivRowContinueButton>
                            <button
                              className="button-row-continue"
                              onClick={(e) => proceedNext(e, 2)}
                            >
                              Continue
                            </button>
                          </DivRowContinueButton>
                        </DivRow>
                      ) : (
                        <DivLabelsRow>
                          <div className="label-row-user">
                            <label name="address">{addressShipping}</label>
                          </div>
                          <div className="label-row-user">
                            <label name="city">{`${cityShipping} - ${stateShipping}`}</label>
                          </div>
                          <div className="label-row-user">
                            <label name="zipCode">{zipCodeShipping}</label>
                          </div>
                          <div className="label-row-user">
                            <label name="orderNotes">
                              {orderNotesShipping}
                            </label>
                          </div>
                        </DivLabelsRow>
                      )
                    ) : (
                      <div />
                    )}
                  </DivCheckoutDataColumn>
                </DivCartRow>

                <DivCartRow>
                  <DivCheckoutDataColumn>
                    <DivRowTitle>
                      <DivColTitle>
                        <span className="product-checkout-icon">3</span>
                        <h1 className="billing-details-title">Payer Address</h1>
                      </DivColTitle>
                      {shipingAddressComplete && !showPayerAddress && (
                        <RiPencilFill
                          className="product-checkout-edit"
                          onClick={(e) => editInformation(e, 3)}
                        />
                      )}
                    </DivRowTitle>
                    {showPayerAddress ? (
                      <DivRow>
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
                          <label htmlFor="address" className="placeholder">
                            Address
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
                            <label htmlFor="state" className="placeholder">
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
                            <label htmlFor="city" className="placeholder">
                              City
                            </label>
                          </DivInputTesteRow>
                        </DivInputNameRow>
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
                          <label htmlFor="zipCode" className="placeholder">
                            Zip Code
                          </label>
                        </DivInputTesteRow>
                        <DivInputTesteRow>
                          <textarea
                            rows="6"
                            name="orderNotes"
                            value={orderNotes}
                            className="form-input-text-area"
                            placeholder=" "
                            onChange={handleInputChange}
                          />
                          <div className="cut"></div>
                          <label htmlFor="orderNotes" className="placeholder">
                            Order Notes
                          </label>
                        </DivInputTesteRow>
                        <DivRowContinueButton>
                          <button
                            className="button-row-continue"
                            onClick={(e) => proceedNext(e, 3)}
                          >
                            Continue
                          </button>
                        </DivRowContinueButton>
                      </DivRow>
                    ) : (
                      <div />
                    )}
                    {payerAddressComplete ? (
                      isSameAddress ? (
                        <DivLabelsRow>
                          <div className="label-row-user">
                            <label name="address">{addressShipping}</label>
                          </div>
                          <div className="label-row-user">
                            <label name="city">{`${cityShipping} - ${stateShipping}`}</label>
                          </div>
                          <div className="label-row-user">
                            <label name="zipCode">{zipCodeShipping}</label>
                          </div>
                          <div className="label-row-user">
                            <label name="orderNotes">
                              {orderNotesShipping}
                            </label>
                          </div>
                        </DivLabelsRow>
                      ) : (
                        <DivLabelsRow>
                          <div className="label-row-user">
                            <label name="address">{address}</label>
                          </div>
                          <div className="label-row-user">
                            <label name="city">{`${city} - ${state}`}</label>
                          </div>
                          <div className="label-row-user">
                            <label name="zipCode">{zipCode}</label>
                          </div>
                          <div className="label-row-user">
                            <label name="orderNotes">{orderNotes}</label>
                          </div>
                        </DivLabelsRow>
                      )
                    ) : (
                      <div />
                    )}
                  </DivCheckoutDataColumn>
                </DivCartRow>
              </DivCheckoutColumn>
            </DivCartRow>
          </form>
        </DivCheckoutProductsRow>
      </SectionItemsColumnCheckout>

      <SectionItemsColumnCheckout>
        <DivCheckoutColumn>
          <DivCartRow>
            <DivCheckoutDataColumn>
              <DivRowTitle>
                <DivColTitle>
                  <span className="product-checkout-icon">4</span>
                  <h1 className="billing-details-title">Shipment Method</h1>
                </DivColTitle>
                {payerAddressComplete && !showShipmentMethod && (
                  <RiPencilFill
                    className="product-checkout-edit"
                    onClick={(e) => editInformation(e, 4)}
                  />
                )}
              </DivRowTitle>
              {showShipmentMethod ? (
                <DivRow>
                  {shippingTypesList.map((item, index) => (
                    <Item key={index}>
                      <RadioButton
                        name="shippingMethod"
                        type="radio"
                        value={item.value}
                        checked={shipType === item.value}
                        onChange={(event) => onShippmentTypeChange(event)}
                      />
                      <RadioButtonLabel />
                      <div>{item.name}</div>
                    </Item>
                  ))}
                  <DivRowContinueButton>
                    <button
                      className="button-row-continue"
                      onClick={(e) => proceedNext(e, 4)}
                    >
                      Continue
                    </button>
                  </DivRowContinueButton>
                </DivRow>
              ) : (
                <div />
              )}
              {shipmentMethodComplete ? (
                <DivLabelsRow>
                  <div className="label-row-user">
                    <label name="shipmentType">{shipType}</label>
                  </div>
                </DivLabelsRow>
              ) : (
                <div />
              )}
            </DivCheckoutDataColumn>
          </DivCartRow>

          <DivCartRow>
            <DivCheckoutDataColumn>
              <DivRowTitle>
                <DivColTitle>
                  <span className="product-checkout-icon">5</span>
                  <h1 className="billing-details-title">Payment Method</h1>
                </DivColTitle>
                {shipmentMethodComplete && !showPaymentMethod && (
                  <RiPencilFill
                    className="product-checkout-edit"
                    onClick={(e) => editInformation(e, 5)}
                  />
                )}
              </DivRowTitle>
              {showPaymentMethod ? (
                <DivRow>
                  {paymentTypesList.map((item, index) => (
                    <Item key={index}>
                      <RadioButton
                        name="paymentMethod"
                        type="radio"
                        value={item.value}
                        checked={paymentMethod === item.value}
                        onChange={(event) => onChangePaymentMethod(event)}
                      />
                      <RadioButtonLabel />
                      <div>{item.name}</div>
                    </Item>
                  ))}

                  <DivRowContinueButton>
                    <button
                      className="button-row-continue"
                      onClick={(e) => proceedNext(e, 5)}
                    >
                      Continue
                    </button>
                  </DivRowContinueButton>
                </DivRow>
              ) : (
                <div />
              )}
              {paymentMethodComplete ? (
                <DivLabelsRow>
                  <div className="label-row-user">
                    <label name="paymentType">{paymentMethod}</label>
                  </div>
                </DivLabelsRow>
              ) : (
                <div />
              )}
            </DivCheckoutDataColumn>
          </DivCartRow>

          <DivCartRow>
            <div
              className="shipping-topic-square"
              onClick={(e) => continueConfirmation(e)}
            >
              <DivCheckoutDataColumn>
                <DivColTitle>
                  <span className="product-checkout-icon">6</span>
                  <h1 className="billing-details-title">Confirmation</h1>
                </DivColTitle>
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
                      <label htmlFor="zipCode" className="placeholder">
                        Zip Code
                      </label>
                    </DivInputTesteRow>
                    <div className="div-place-order">
                      <button type="submit" className="button-cart-place-order">
                        Place Order
                      </button>
                    </div>
                  </DivRow>
                )}
              </DivCheckoutDataColumn>
            </div>
          </DivCartRow>
        </DivCheckoutColumn>
      </SectionItemsColumnCheckout>

      <SectionProductCheckout>
        <DivCartRow>
          <DivCheckoutPriceColumn>
            <DivColTitle>
              <h1 className="billing-details-title">
                {carts.length > 1 ? `Your Orders` : "Your Order"}
              </h1>
            </DivColTitle>
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
      </SectionProductCheckout>
    </ContainerProductCheckout>
  );
};

export default ProductCheckout;
