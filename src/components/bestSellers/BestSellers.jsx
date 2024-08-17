import { useRef, useCallback } from "react";
import SwiperCore from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/effect-coverflow";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa6";
import bestSellers from "../../data/bestSellers";
import ProductCard from "../home/ProductCard";
import "./BestSellers.css";

SwiperCore.use([Navigation]);

const BestSellers = () => {
  const sliderRef = useRef(null);

  const handlePrev = useCallback(() => {
    if (!sliderRef.current) return;
    sliderRef.current.swiper.slidePrev();
  }, []);

  const handleNext = useCallback(() => {
    if (!sliderRef.current) return;
    sliderRef.current.swiper.slideNext();
  }, []);

  return (
    <div>
      <Swiper
        ref={sliderRef}
        modules={[Navigation]}
        className="best-seller-slider"
        grabCursor={true}
        centeredSlides={false}
        slidesPerView={4}
        spaceBetween={10}
        navigation={{
          prevEl: sliderRef.current,
          nextEl: sliderRef.current,
        }}
      >
        {bestSellers.map((item, index) => (
          <SwiperSlide
            key={index}
            className="swiper-slide"
            style={{ width: "57.8vw" }}
          >
            <ProductCard product={item} />
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="best-seller-prev-arrow" onClick={handlePrev}>
        <FaAngleLeft color="#ffffff" />
      </div>
      <div className="best-seller-next-arrow" onClick={handleNext}>
        <FaAngleRight color="#ffffff" />
      </div>
    </div>
  );
};

export default BestSellers;
