export const producePopularProducts = () => {
  return (
    "*[_type == 'popularProducts']{" +
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
