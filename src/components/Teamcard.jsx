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
      loop={true}             // ✅ boucle infinie
      spaceBetween={20}       // espace entre les slides
      slidesPerView={6}       // combien de slides visibles en même temps
      centeredSlides={false}  // garder aligné sans centrer
      className={styles.swiper}
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
