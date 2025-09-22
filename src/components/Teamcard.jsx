import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules"; // module navigation
import "swiper/css";
import "swiper/css/navigation"; // styles par défaut navigation

import styles from "../Carousel.module.css";

import image1 from "../assets/image/cardimage1.png";
import image2 from "../assets/image/cardimage2.png";
import image3 from "../assets/image/cardimage3.png";
import image4 from "../assets/image/cardimage1.png";
import image5 from "../assets/image/cardimage2.png";
import image6 from "../assets/image/cardimage3.png";
import image7 from "../assets/image/cardimage3.png";

const slides = [image1, image2, image3, image4, image5, image6, image7];

const Carousel = () => {
  return (
    <div className="relative w-full">
      <Swiper
        modules={[Navigation]}
        loop={true}
        spaceBetween={20}
        slidesPerView={6}
        centeredSlides={false}
        className={styles.swiper}
        breakpoints={{
          320: { slidesPerView: 2, spaceBetween: 10 },
          640: { slidesPerView: 3, spaceBetween: 15 },
          1024: { slidesPerView: 5, spaceBetween: 20 },
          1280: { slidesPerView: 6, spaceBetween: 20 },
        }}
        onInit={(swiper) => {
          swiper.params.navigation.prevEl = ".custom-prev";
          swiper.params.navigation.nextEl = ".custom-next";
          swiper.navigation.init();
          swiper.navigation.update();
        }}
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <img src={slide} alt={`slide-${index}`} className={styles.img} />
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Flèches custom */}
      <div className="custom-prev absolute left-2 top-1/2 -translate-y-1/2 bg-[#E8B51E] text-black p-3 rounded-full cursor-pointer shadow-lg z-10">
        ◀
      </div>
      <div className="custom-next absolute right-2 top-1/2 -translate-y-1/2 bg-[#E8B51E] text-black p-3 rounded-full cursor-pointer shadow-lg z-10">
        ▶
      </div>
    </div>
  );
};

export default Carousel;
