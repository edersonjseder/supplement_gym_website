import React, { useEffect, useState } from "react";
import "./Products.css";
import ReactPaginate from "react-paginate";
import { useSelector, useDispatch } from "react-redux";
import {
  FILTER_PRODUCTS,
  selectFilteredProducts,
} from "../../../redux/features/filterSlice";
import { SpinnerImg } from "../../loader/Loader";
import Card from "../../card/Card";
import { DivProductContent } from "../../../styles/Styles";

const Products = ({ products, isLoading, search }) => {
  const filteredProducts = useSelector(selectFilteredProducts);
  const dispatch = useDispatch();

  console.log("Products - tela: ", products);

  // Begin pagination
  const [currentItems, setCurrentItems] = useState([]);
  const [pageCount, setPageCount] = useState(0);
  const [itemOffset, setItemOffset] = useState(0);
  const itemsPerPage = 15;

  useEffect(() => {
    const endOffset = itemOffset + itemsPerPage;
    setCurrentItems(filteredProducts.slice(itemOffset, endOffset));
    setPageCount(Math.ceil(filteredProducts.length / itemsPerPage));
  }, [itemOffset, itemsPerPage, filteredProducts]);

  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % filteredProducts.length;
    setItemOffset(newOffset);
  };
  //End pagination

  useEffect(() => {
    dispatch(FILTER_PRODUCTS({ products, search }));
  }, [products, search, dispatch]);

  return (
    <div className="products">
      {isLoading && <SpinnerImg />}
      {!isLoading && products.length === 0 ? (
        <p>-- No products found, please add a product --</p>
      ) : (
        <DivProductContent>
          {currentItems.map(
            ({ img, title, star, reviews, newPrice, prevPrice }) => (
              <Card
                key={Math.random()}
                img={img}
                title={title}
                star={star}
                reviews={reviews}
                newPrice={newPrice}
                prevPrice={prevPrice}
              />
            )
          )}
        </DivProductContent>
      )}
      <ReactPaginate
        breakLabel="..."
        nextLabel="Next"
        onPageChange={handlePageClick}
        pageRangeDisplayed={5}
        pageCount={pageCount}
        previousLabel="Prev"
        renderOnZeroPageCount={null}
        containerClassName="pagination"
        pageLinkClassName="page-num"
        previousLinkClassName="page-num"
        nextLinkClassName="page-num"
        activeLinkClassName="activePage"
      />
    </div>
  );
};

export default Products;
