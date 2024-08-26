import { useRef, useCallback, useEffect } from "react";
import SwiperCore from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/effect-coverflow";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa6";
import ProductCard from "../home/ProductCard";
import "./BestSellers.css";
import { useSelector, useDispatch } from "react-redux";
import { getBestSellers } from "../../redux/features/bestSellersSlice";

SwiperCore.use([Navigation]);

const BestSellers = () => {
  const sliderRef = useRef(null);
  const dispatch = useDispatch();
  const { bestSellers } = useSelector((state) => state.bestSellers);

  console.log("BestSellers - bestSellers: ", bestSellers);

  const handlePrev = useCallback(() => {
    if (!sliderRef.current) return;
    sliderRef.current.swiper.slidePrev();
  }, []);

  const handleNext = useCallback(() => {
    if (!sliderRef.current) return;
    sliderRef.current.swiper.slideNext();
  }, []);

  useEffect(() => {
    dispatch(getBestSellers());
  }, [dispatch]);

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
        {bestSellers?.map((item, index) => (
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
