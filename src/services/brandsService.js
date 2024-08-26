import { client } from "../lib/client";
import { formatBrands } from "../utils/DataFormatter";
import { produceBrands } from "./queries/brandQueries";

/** Get All Brands */
const getBrands = async () => {
  const query = produceBrands();
  const response = await client.fetch(query);
  console.log("Response: ", formatBrands(response));
  return formatBrands(response);
};

const brandsService = {
  getBrands,
};

export default brandsService;
