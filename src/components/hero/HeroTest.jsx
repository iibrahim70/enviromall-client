import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import imageOne from '../../assets/hero/1.jpg';
import imageTwo from '../../assets/hero/2.jpg';

const Hero = () => {
  return (
    <Swiper
      spaceBetween={30}
      centeredSlides={true}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      pagination={{
        clickable: true,
      }}
      navigation={true}
      modules={[Autoplay, Pagination, Navigation]}
      className="mySwiper"
    >
      <SwiperSlide>
        <img src={imageOne} alt="" />
      </SwiperSlide>

      <SwiperSlide>
        <img src={imageTwo} alt="" />
      </SwiperSlide>
    </Swiper>
  );
};

export default Hero;
