export const produceProducts = () => {
  return (
    "*[_type == 'product']{" +
    "  _id," +
    "  title," +
    "  slug{" +
    "    current" +
    "  }," +
    "  brand->{" +
    "    number," +
    "    name," +
    "    image{" +
    "      asset{" +
    "        _ref" +
    "      }" +
    "    }" +
    "  }," +
    "  category->{" +
    "    name," +
    "    value" +
    "  }," +
    "  img[]{" +
    "    asset{" +
    "      _ref" +
    "    }," +
    "  }," +
    "  prevPrice," +
    "  newPrice," +
    "  reviews," +
    "  flavours[]->{" +
    "    name," +
    "    icon{" +
    "      asset{" +
    "        _ref" +
    "      }" +
    "    }" +
    "  }," +
    "  inStock" +
    "}"
  );
};

export const produceProductById = (_id) => {
  return (
    `*[_type == 'product' && _id == "${_id}"][0]{` +
    "  _id," +
    "  title," +
    "  slug{" +
    "    current" +
    "  }," +
    "  brand->{" +
    "    number," +
    "    name," +
    "    image{" +
    "      asset{" +
    "        _ref" +
    "      }" +
    "    }" +
    "  }," +
    "  category->{" +
    "    name," +
    "    value" +
    "  }," +
    "  img[]{" +
    "    asset{" +
    "      _ref" +
    "    }," +
    "  }," +
    "  prevPrice," +
    "  newPrice," +
    "  reviews," +
    "  flavours[]->{" +
    "    name," +
    "    icon{" +
    "      asset{" +
    "        _ref" +
    "      }," +
    "    }" +
    "  }," +
    "  inStock" +
    "}"
  );
};
