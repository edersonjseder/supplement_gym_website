export const produceBestSellers = () => {
  return (
    "*[_type == 'bestSellers']{" +
    "  title," +
    "  price," +
    "  rank," +
    "  image{" +
    "    asset{" +
    "      _ref" +
    "    }" +
    "  }" +
    "}"
  );
};
