import React from "react";
import ContainerFooter from "./containers/ContainerFooter";
import logo from "../images/logo-footer-widget.png";
import { Link } from "react-router-dom";
import { cards, security, shipments } from "../data/sealsData";

const Footer = () => {
  return (
    <ContainerFooter>
      <div style={{ width: "86vw" }}>
        <div className="seals-footer">
          <div className="seals-container">
            <div>
              <div className="seals-content">
                <h5>Payments</h5>
                <div className="seals-cards">
                  {cards.map((card, index) => (
                    <div key={index}>
                      <img key={index} src={card.image} alt={`card-${index}`} />
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div>
              <div className="seals-content">
                <h5>Shipment</h5>
                <div className="seals-cards">
                  {shipments.map((shipment, index) => (
                    <div key={index}>
                      <img
                        key={index}
                        src={shipment.image}
                        alt={`shipment-${index}`}
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div>
              <div className="seals-content">
                <h5>Security</h5>
                <div className="seals-cards">
                  {security.map((security, index) => (
                    <div key={index}>
                      <img
                        key={index}
                        src={security.image}
                        alt={`security-${index}`}
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-content">
        <div className="div-grid">
          <h1>ABOUT NUTRITION SARMS</h1>
          <img src={logo} alt="logo" />
          <p>
            Thanks to our direct partnership with top food supplements producers
            in the US, the prices for our fat burning and muscle gaining
            supplements are much lower than anywhere else!
          </p>
        </div>
        <div className="div-grid">
          <h1>MY ACCOUNT</h1>
          <ul className="footer-links">
            <li>
              <Link to={"/"} className="mLink">
                My Profile
              </Link>
            </li>
            <li>
              <Link to={"/"} className="mLink">
                My Orders
              </Link>
            </li>
            <li>
              <Link to={"/"} className="mLink">
                Wish List
              </Link>
            </li>
          </ul>
        </div>
        <div className="div-grid">
          <h1>CUSTOMER SERVICE</h1>
          <ul className="footer-links">
            <li>
              <Link to={"/"} className="mLink">
                Guarantee
              </Link>
            </li>
            <li>
              <Link to={"/"} className="mLink">
                Terms and Conditions of Use
              </Link>
            </li>
            <li>
              <Link to={"/"} className="mLink">
                Shipping and Delivery
              </Link>
            </li>
            <li>
              <Link to={"/"} className="mLink">
                Change and Return
              </Link>
            </li>
            <li>
              <Link to={"/about"} className="mLink">
                About Us
              </Link>
            </li>
          </ul>
        </div>
        <div className="div-grid">
          <h1>CONTACT INFORMATION</h1>
          <ul className="footer-links">
            <li>5030 Royal Ave</li>
            <li>Harrisburg, PA 17109</li>
            <li>United States (US)</li>
            <li>
              <Link to={"/"} className="mLink">
                info@bodybuildingheathyclinic.com
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </ContainerFooter>
  );
};

export default Footer;
