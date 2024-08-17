import React, { useEffect, useRef, useState } from "react";
import "./Items.css";
import ReactPaginate from "react-paginate";
import { useSelector, useDispatch } from "react-redux";
import {
  FILTER_PRODUCTS,
  selectFilteredProducts,
} from "../../../redux/features/filterSlice";
import { SpinnerImg } from "../../loader/Loader";
import { DivProductField, UlItems } from "../../../styles/Styles";
import Product from "./product/Product";
import { CSSTransition, TransitionGroup } from "react-transition-group";

const Items = ({ products, isLoading, search }) => {
  const filteredProducts = useSelector(selectFilteredProducts);
  const dispatch = useDispatch();
  const nodeRef = useRef(null);

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
        <p style={{ color: "#eee" }}>
          -- No products found, please add a product --
        </p>
      ) : (
        <DivProductField>
          <TransitionGroup className="todo-list">
            <UlItems id="ul-items">
              {currentItems.map((item, index) => (
                <CSSTransition
                  key={item.title}
                  nodeRef={nodeRef}
                  timeout={900}
                  classNames="product-item"
                >
                  <Product key={index} product={item} />
                </CSSTransition>
              ))}
            </UlItems>
          </TransitionGroup>
        </DivProductField>
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

export default Items;
