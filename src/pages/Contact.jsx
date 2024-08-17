import React, { useEffect } from "react";
import { handleToTop } from "../utils/Utils";

const Contact = () => {
  useEffect(() => {
    document.querySelector(".shopping-cart").style.visibility = "visible";
    document.querySelector(".shopping-cart-qty-icon").style.visibility =
      "visible";
    handleToTop();
  }, []);
  return (
    <div id="contact">
      <h1>CONTACT US</h1>
      <form>
        <input type="text" placeholder="Full Name" required />
        <input type="email" placeholder="Type Your E-Mail" required />
        <textarea placeholder="Write Here..." name="message"></textarea>
        <button type="submit" className="btn-submit">
          Send
        </button>
      </form>
    </div>
  );
};

export default Contact;
