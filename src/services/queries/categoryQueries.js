export const produceCategories = () => {
  return (
    "*[_type == 'category']{" +
    "  title," +
    "  image{" +
    "    asset{" +
    "      _ref" +
    "    }," +
    "  }," +
    "}"
  );
};
