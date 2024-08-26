import { useRef, useCallback, useEffect } from "react";
import SwiperCore from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, EffectCoverflow, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/effect-coverflow";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa6";
import { useSelector, useDispatch } from "react-redux";
import { getBanners } from "../../redux/features/bannersSlice";

SwiperCore.use([Navigation]);

const SlideHero = () => {
  const sliderRef = useRef(null);
  const dispatch = useDispatch();

  const { banners, isLoading, isError, message } = useSelector(
    (state) => state.banners
  );

  const handlePrev = useCallback(() => {
    if (!sliderRef.current) return;
    sliderRef.current.swiper.slidePrev();
  }, []);

  const handleNext = useCallback(() => {
    if (!sliderRef.current) return;
    sliderRef.current.swiper.slideNext();
  }, []);

  useEffect(() => {
    dispatch(getBanners());
  }, [dispatch]);

  return (
    <Swiper
      ref={sliderRef}
      loop="true"
      modules={[EffectCoverflow, Autoplay]}
      autoplay={{
        delay: 3000,
        disableOnInteraction: false,
      }}
      className="home-slider"
      effect={"coverflow"}
      grabCursor={true}
      centeredSlides={true}
      slidesPerView={"auto"}
      navigation={{
        prevEl: sliderRef.current,
        nextEl: sliderRef.current,
      }}
      coverflowEffect={{
        rotate: 50,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: false,
      }}
    >
      {banners?.map((element, index) => (
        <SwiperSlide key={index}>
          <img src={element.image} className="box-img" alt="Images" />
          <div className={`slide-image-${index + 1}`}>
            <hr className="line-above-title" />
            <h4>{element.title1}</h4>
            <h1>
              <span className={`slide-text-${index + 1}`}>
                {element.title2}
              </span>
            </h1>
            <h5>{element.subtitle}</h5>
            <p className={`slide-description-${index + 1}`}>
              {element.description}
            </p>
            <div className="pr-btns">
              <a href="/shop" className="pr-btn">
                SHOP NOW!
              </a>
            </div>
          </div>
        </SwiperSlide>
      ))}
      <div className="prev-arrow" onClick={handlePrev}>
        <FaAngleLeft />
      </div>
      <div className="next-arrow" onClick={handleNext}>
        <FaAngleRight />
      </div>
    </Swiper>
  );
};

export default SlideHero;
