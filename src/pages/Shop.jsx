import React, { useEffect, useState } from "react";
import SubNav from "../components/shop/subnav/SubNav";
import Recommended from "../components/shop/recommended/Recommended";
import Sidebar from "../components/shop/sidebar/Sidebar";
import { DivShop, ProductionSection } from "../styles/Styles";
import { useSelector, useDispatch } from "react-redux";
import { getProducts } from "../redux/features/productsSlice";
import Items from "../components/shop/products/Items";
import { handleToTop } from "../utils/Utils";

const Shop = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [search, setSearch] = useState("");
  const dispatch = useDispatch();
  const { products, isLoading, isError, message } = useSelector(
    (state) => state.products
  );
  const carts = useSelector((store) => store.cart.items);

  useEffect(() => {
    document.querySelector(".shopping-cart").style.visibility = "visible";

    if (carts.length > 0) {
      document.querySelector(".shopping-cart-qty-icon").style.visibility =
        "visible";
    } else {
      document.querySelector(".shopping-cart-qty-icon").style.visibility =
        "hidden";
    }

    dispatch(getProducts());

    if (isError) {
      console.log(message);
    }

    handleToTop();
  }, [isError, message, carts, dispatch]);

  const handleInputChange = (event) => {
    setSearch(event.target.value);
  };

  const filteredItems = products.filter((product) =>
    product.title.toLocaleLowerCase().indexOf(search.toLocaleLowerCase() !== -1)
  );

  // -------------- Radio Filter --------------
  const handleChange = (event) => {
    console.log("handleChange - event: ", event);
    setSelectedCategory(event);
  };

  // -------------- Button Filter --------------
  const handleClick = (event) => {
    console.log("handleClick - event.target.value: ", event.target.value);
    setSelectedCategory(event.target.value);
  };

  function filteredData(products, selected, search) {
    let filteredProducts = products;
    console.log(filteredProducts);

    // Filtering input items
    if (search) {
      filteredProducts = filteredItems;
    }

    // Selected Filter
    if (selected) {
      filteredProducts = filteredProducts.filter(
        ({ category, color, company, newPrice, title }) =>
          category === selected ||
          color === selected ||
          company === selected ||
          newPrice === selected ||
          title === selected
      );
    }

    return filteredProducts;
  }

  const result = filteredData(products, selectedCategory, search);

  return (
    <DivShop>
      <div style={{ height: "50vw" }}>
        <Sidebar handleChange={handleChange} />
      </div>

      <ProductionSection>
        <SubNav search={search} handleInputChange={handleInputChange} />
        <Recommended handleClick={handleClick} />
        <Items products={result} isLoading={isLoading} search={search} />
      </ProductionSection>
    </DivShop>
  );
};

export default Shop;
