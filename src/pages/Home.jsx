import React, { useEffect } from "react";
import SlideHero from "../components/home/SlideHero";
import ContainerPopularProducts from "../components/containers/ContainerPopularProducts";
import Marquee from "react-fast-marquee";
import featureImgs from "../data/featureImgs";
import popularProducts from "../data/popularProducts";
import ProductCard from "../components/home/ProductCard";
import CategoryCard from "../components/home/CategoryCard";
import MarqueeContainer from "../components/containers/MarqueeContainer";
import brands from "../data/brandItem";
import services from "../data/services";
import ServicesContainer from "../components/containers/ServicesContainer";
import ContainerTopics from "../components/containers/ContainerTopics";
import ContainerCategories from "../components/containers/ContainerCategories";
import ContainerHero from "../components/containers/ContainerHero";
import containerTopics from "../data/containerTopics";
import { handleToTop } from "../utils/Utils";
import StepCard from "../components/home/StepCard";
import BestSellers from "../components/bestSellers/BestSellers";
import ContainerBestSellers from "../components/containers/ContainerBestSellers";
import { useSelector } from "react-redux";

const Home = () => {
  const carts = useSelector((store) => store.cart.items);
  useEffect(() => {
    document.querySelector(".shopping-cart").style.visibility = "visible";

    if (carts.length > 0) {
      document.querySelector(".shopping-cart-qty-icon").style.visibility =
        "visible";
    } else {
      document.querySelector(".shopping-cart-qty-icon").style.visibility =
        "hidden";
    }

    handleToTop();
  }, [carts]);
  return (
    <>
      <ContainerHero>
        <div id="main">
          <div className="pr-heading">
            <SlideHero />
          </div>
        </div>
      </ContainerHero>
      <ServicesContainer>
        <div className="column-12">
          <div className="services">
            {services.map((service, index) => (
              <div key={index} className="services-item">
                <img src={service.image} alt="services" />
                <div>
                  <h6>{service.title}</h6>
                  <p>{service.tagline}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </ServicesContainer>
      <ContainerCategories>
        <div className="container-title">
          <h1 className="title">OUR CATEGORIES</h1>
          <hr className="line-below-title" />
        </div>
        <div className="a-container">
          {featureImgs.map((item, index) => (
            <CategoryCard key={index} image={item.image} title={item.title} />
          ))}
        </div>
      </ContainerCategories>
      <MarqueeContainer>
        <div className="card-wrapper">
          <Marquee className="mMarquee">
            {brands.map((brand, index) => (
              <div key={index} className="marque-image-item">
                <img key={index} src={brand.image} alt={brand.number} />
              </div>
            ))}
          </Marquee>
        </div>
      </MarqueeContainer>
      <ContainerBestSellers>
        <div className="container-best-sellers-title">
          <h1 className="title">Best sellers</h1>
          <hr className="line-below-title" />
        </div>
        <div className="b-s-container">
          <BestSellers />
        </div>
      </ContainerBestSellers>
      <ContainerPopularProducts>
        <div className="container-title">
          <h1 className="title">Our Popular Products</h1>
          <hr className="line-below-title" />
        </div>
        <div className="a-container">
          {popularProducts.map((item, index) => (
            <ProductCard key={index} product={item} />
          ))}
        </div>
      </ContainerPopularProducts>
      <ContainerTopics>
        <div className="container-title">
          <h1 className="title">objectives</h1>
        </div>
        <div className="a-container">
          {containerTopics.map((item, index) => (
            <StepCard key={index} backgroundMenu={item} />
          ))}
        </div>
      </ContainerTopics>
    </>
  );
};

export default Home;
