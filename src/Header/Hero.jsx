import React from "react";
import banner1 from "../assets/banner/banner-1.jpeg";
import banner2 from "../assets/banner/banner-2.jpeg";
import banner3 from "../assets/banner/banner-3.jpeg";
import banner4 from "../assets/banner/banner-4.jpg";
import banner5 from "../assets/banner/banner5.jpg";
import banner6 from "../assets/banner/banner6.jpg";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper/modules";

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
        <SwiperSlide>
          <div>
            <img className="w-full absolute h-[700px]" src={banner4} alt="" />
            <div className="relative w-1/2 ml-10 text-white top-48 left-28">
              <h3 className="text-5xl font-bold">Find Your Favorite</h3>
              <h2 className="my-2 text-5xl font-bold">College</h2>
              <h5 className="text-5xl font-bold text-sky-500 ">From Here</h5>
              <p className="my-2">
                Welcome to our college finder website! Simplifying your search
                for the perfect college to unlock your dreams and discover a
                world of possibilities. Lets embark on this transformative
                journey together! Start exploring now!
              </p>
              <button className="mt-4 btn btn-primary">More Details</button>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div>
            <img className="w-full absolute h-[700px]" src={banner5} alt="" />
            <div className="relative w-1/2 ml-10 text-white top-48 left-28">
              <h3 className="text-5xl font-bold">Find Your Favorite</h3>
              <h2 className="my-2 text-5xl font-bold">College</h2>
              <h5 className="text-5xl font-bold text-sky-500 ">From Here</h5>
              <p className="my-2">
                Welcome to our college finder website! Simplifying your search
                for the perfect college to unlock your dreams and discover a
                world of possibilities. Lets embark on this transformative
                journey together! Start exploring now!
              </p>
              <button className="mt-4 btn btn-primary">More Details</button>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <img className="w-full h-[700px]" src={banner6} alt="" />
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default Hero;
