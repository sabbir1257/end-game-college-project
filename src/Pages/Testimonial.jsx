import { useContext, useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";


import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

import { BsStarFill, BsStarHalf } from "react-icons/bs";
import { AuthContext } from "../Providers/AuthProvider";

const Testimonial = () => {
  const { user } = useContext(AuthContext);
  const [feedback, useFeedback] = useState([]);

  useEffect(() => {
    fetch("https://server-peach-eta.vercel.app/feedback")
      .then((res) => res.json())
      .then((data) => useFeedback(data));
  }, []);
  return (
    <div className="mt-20 mb-7">
      <h1 className="my-3 text-3xl font-bold text-center">
        What Parents Say!
      </h1>
      <div className="md:w-[1240px] mx-auto shadow-md px-4 border rounded-md">
        <Swiper
          spaceBetween={40}
          centeredSlides={true}
          autoplay={{
            delay: 4500,
          }}
          navigation={true}
          modules={[Autoplay, Pagination, Navigation]}
          className="mySwiper px-6 text-center  h-[30vh] mt-8"
        >
          {feedback.map((feed, index) => (
            <SwiperSlide>
              <div className="mt-4 ">
                <h1 className="text-2xl font-bold">{feed.name}</h1>
                <div className="flex items-center justify-center gap-3 mt-4 font-bold">
                  <div className="flex items-center gap-2 text-orange-400">
                    <BsStarFill />
                    <BsStarFill />
                    <BsStarFill />
                    <BsStarFill />
                    <BsStarHalf />
                  </div>
                  <p>{feed.rating}</p>
                </div>
                <p className="md:w-[450px] mx-auto">{feed.text}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Testimonial;
