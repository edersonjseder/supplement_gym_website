import { client } from "../lib/client";
import { formatBestSellers } from "../utils/DataFormatter";
import { produceBestSellers } from "./queries/bestSellersQueries";

/** Get All Best Sellers */
const getBestSellers = async () => {
  const query = produceBestSellers();
  const response = await client.fetch(query);
  console.log("Response: ", formatBestSellers(response));
  return formatBestSellers(response);
};

const bestSellersService = {
  getBestSellers,
};

export default bestSellersService;
