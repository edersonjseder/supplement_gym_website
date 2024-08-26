import { urlFor } from "../lib/client";

const formatProducts = (products) => {
  let formatted = products.map((product) => {
    let imgs = product.img.map((im) => {
      return urlFor(im.asset._ref);
    });
    let flavors = product.flavours.map((flavor) => {
      return {
        name: flavor.name,
        icon: urlFor(flavor.icon.asset._ref),
      };
    });
    return {
      id: product._id,
      img: imgs,
      title: product.title,
      reviews: product.reviews,
      prevPrice: product.prevPrice,
      newPrice: product.newPrice,
      brand: product.brand.name,
      slug: product.slug.current,
      category: product.category.name,
      flavours: flavors,
      inStock: product.inStock,
    };
  });
  return formatted;
};

const formatProduct = (product) => {
  console.log("formatProduct: ", product);
  let imgs = product.img.map((im) => {
    return urlFor(im.asset._ref);
  });
  let flavors = product.flavours.map((flavor) => {
    return {
      name: flavor.name,
      icon: urlFor(flavor.icon.asset._ref),
    };
  });
  let formatted = {
    id: product._id,
    img: imgs,
    title: product.title,
    reviews: product.reviews,
    prevPrice: product.prevPrice,
    newPrice: product.newPrice,
    brand: product.brand.name,
    slug: product.slug.current,
    category: product.category.name,
    flavours: flavors,
    inStock: product.inStock,
  };
  return formatted;
};

const formatCategories = (categories) => {
  let formatted = categories.map((category) => {
    return {
      title: category.title,
      image: urlFor(category.image.asset._ref),
    };
  });
  return formatted;
};

const formatBanners = (banners) => {
  let formatted = banners.map((banner) => {
    return {
      title1: banner.title1,
      title2: banner.title2,
      subtitle: banner.subtitle,
      description: banner.description,
      image: urlFor(banner.image.asset._ref),
    };
  });
  return formatted;
};

const formatBrands = (brands) => {
  let formatted = brands.map((brand) => {
    return {
      name: brand.name,
      image: urlFor(brand.image.asset._ref),
    };
  });
  return formatted;
};

const formatBestSellers = (bestSellers) => {
  let formatted = bestSellers.map((best) => {
    return {
      title: best.title,
      price: best.price,
      rank: best.rank,
      image: urlFor(best.image.asset._ref),
    };
  });
  return formatted;
};

const formatPopularProducts = (popularProducts) => {
  let formatted = popularProducts.map((popular) => {
    return {
      title: popular.title,
      price: popular.price,
      rank: popular.rank,
      image: urlFor(popular.image.asset._ref),
    };
  });
  return formatted;
};

export {
  formatProducts,
  formatProduct,
  formatCategories,
  formatBanners,
  formatBrands,
  formatBestSellers,
  formatPopularProducts,
};
