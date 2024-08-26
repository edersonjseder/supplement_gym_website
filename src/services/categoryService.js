import { client } from "../lib/client";
import { formatCategories } from "../utils/DataFormatter";
import { produceCategories } from "./queries/categoryQueries";

/** Get All Categories */
const getCategories = async () => {
  const query = produceCategories();
  const response = await client.fetch(query);
  console.log("Response: ", formatCategories(response));
  return formatCategories(response);
};

const categoryService = {
  getCategories,
};

export default categoryService;
