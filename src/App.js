import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Shop from "./pages/Shop";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import Navbar from "./components/navbar/Navbar";
import FloatingButton from "./components/FloatingButton";
import ProductDetails from "./components/shop/products/productDetails/ProductDetails";
import ProductItemsCart from "./components/shop/products/productItemsCart/ProductItemsCart";
import ProductCheckout from "./components/shop/products/productCheckout/ProductCheckout";

function App() {
  return (
    <div>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/product/:id" element={<ProductDetails />} />
          <Route path="/show-cart" element={<ProductItemsCart />} />
          <Route path="/checkout" element={<ProductCheckout />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
        </Routes>
        <FloatingButton />
        <Footer />
      </Router>
    </div>
  );
}

export default App;
