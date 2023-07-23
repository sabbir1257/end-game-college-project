import React from "react";
import banner1 from "../assets/banner/banner-1.jpeg";
import banner2 from "../assets/banner/banner-2.jpeg";
import banner3 from "../assets/banner/banner-3.jpeg";
import banner4 from "../assets/banner/banner-4.jpg"
import banner5 from "../assets/banner/banner5.jpg"
import banner6 from "../assets/banner/banner6.jpg"
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
      <SwiperSlide><img className="w-full h-[700px]" src={banner4} alt="" /></SwiperSlide>
      <SwiperSlide><img className="w-full h-[700px]" src={banner5} alt="" /></SwiperSlide>
      <SwiperSlide><img className="w-full h-[700px]" src={banner6} alt="" /></SwiperSlide>
    </Swiper>
  </>
  );
};

export default Hero;
