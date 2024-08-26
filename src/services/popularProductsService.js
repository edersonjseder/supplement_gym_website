import { client } from "../lib/client";
import { formatPopularProducts } from "../utils/DataFormatter";
import { producePopularProducts } from "./queries/popularProductsQueries";

/** Get All Popular Products */
const getPopularProducts = async () => {
  const query = producePopularProducts();
  const response = await client.fetch(query);
  console.log("Response: ", formatPopularProducts(response));
  return formatPopularProducts(response);
};

const popularProductsService = {
  getPopularProducts,
};

export default popularProductsService;
