export const produceBanners = () => {
  return (
    "*[_type == 'homeBanner'] | order(index asc){" +
    "  title1," +
    "  title2," +
    "  subtitle," +
    "  description," +
    "  image{" +
    "    asset{" +
    "      _ref" +
    "    }" +
    "  }" +
    "}"
  );
};
