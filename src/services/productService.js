import axios from "axios";
import products from "../data/products";
import { client } from "../lib/client";
import { formatProduct, formatProducts } from "../utils/DataFormatter";
import { produceProductById, produceProducts } from "./queries/productQueries";

const BACKEND_URL = process.env.APP_BACKEND_URL;
const API_URL = `${BACKEND_URL}/api/products`;

/** Get All Products */
const getProducts = async () => {
  const query = produceProducts();
  const response = await client.fetch(query);
  console.log("Response: ", formatProducts(response));
  return formatProducts(response);
};

/** Get a Product */
const getProduct = async (id) => {
  console.log("Get Product: ", id);
  const query = produceProductById(id);
  const response = await client.fetch(query);
  console.log("Product: ", formatProduct(response));
  return formatProduct(response);
};

/** Create New Product */
const createProduct = async (formData) => {
  const response = await axios.post(`${API_URL}/create`, formData);
  return response.data;
};

/** Delete Product */
const deleteProduct = async (id) => {
  const response = await axios.delete(`${API_URL}/remove/${id}`);
  return response.data;
};

/** Get suggested Products */
const getSuggestedProducts = async () => {
  let response = [];

  let selectedIndices = {};

  while (response.length < 4) {
    const index = Math.floor(Math.random() * products.length);
    if (typeof selectedIndices[index] === "undefined") {
      response.push(products[index]);
      selectedIndices[index] = index;
    }
  }

  return response;
};

/** Update Product */
const updateProduct = async (id, formData) => {
  const response = await axios.patch(`${API_URL}/update/${id}`, formData);
  return response.data;
};

const productService = {
  createProduct,
  getProducts,
  getSuggestedProducts,
  getProduct,
  deleteProduct,
  updateProduct,
};

export default productService;
