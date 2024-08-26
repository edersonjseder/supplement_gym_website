export const produceBrands = () => {
  return (
    "*[_type == 'brands']{" +
    "  name," +
    "  image{" +
    "    asset{" +
    "      _ref" +
    "    }" +
    "  }" +
    "}"
  );
};
