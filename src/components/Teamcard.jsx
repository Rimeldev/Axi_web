import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
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
    <Swiper
      loop={true}           
      spaceBetween={20}     
      centeredSlides={false} 
      className={styles.swiper}
      breakpoints={{
        320: { slidesPerView: 1 },   // mobile portrait
        480: { slidesPerView: 2 },   // mobile paysage
        768: { slidesPerView: 3 },   // tablette
        1024: { slidesPerView: 4 },  // petit écran PC
        1280: { slidesPerView: 5 },  // grand écran
        1536: { slidesPerView: 6 },  // très grand écran
      }}
    >
      {slides.map((slide, index) => (
        <SwiperSlide key={index}>
          <img src={slide} alt={`slide-${index}`} className={styles.img} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Carousel;
