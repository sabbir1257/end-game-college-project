import React from "react";
import banner1 from "../assets/banner/banner-1.jpeg";
import banner2 from "../assets/banner/banner-2.jpeg";
import banner3 from "../assets/banner/banner-3.jpeg";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';

// import required modules
import { Pagination } from 'swiper/modules';


const Hero = () => {
  return (
    <>
    <Swiper
      pagination={{
        dynamicBullets: true,
      }}
      modules={[Pagination]}
      className="mySwiper"
    >
      <SwiperSlide><img className="w-full h-[700px]" src={banner1} alt="" /></SwiperSlide>
      <SwiperSlide><img className="w-full h-[700px]" src={banner2} alt="" /></SwiperSlide>
      <SwiperSlide><img className="w-full h-[700px]" src={banner3} alt="" /></SwiperSlide>
    </Swiper>
  </>
  );
};

export default Hero;
