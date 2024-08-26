import { client } from "../lib/client";
import { formatBanners } from "../utils/DataFormatter";
import { produceBanners } from "./queries/bannerQueries";

/** Get All Banners */
const getBanners = async () => {
  const query = produceBanners();
  const response = await client.fetch(query);
  console.log("Response: ", formatBanners(response));
  return formatBanners(response);
};

const bannerService = {
  getBanners,
};

export default bannerService;
