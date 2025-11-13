import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import image1 from "../assets/hq720.png";
import image2 from "../assets/images.png";
import image3 from "../assets/pubg.png";

const BannerSlider = () => {
  const slides = [
    {
      id: 1,
      image: image1,
     
    },
    {
      id: 2,
      image: image2,
    
    },
    {
      id: 3,
      image: image3,
     
    },
  ];

  return (
    <div className="w-11/12 mx-auto p-4">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        loop={true}
        className="rounded-2xl overflow-hidden shadow-lg"
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div
              className="h-[400px] md:h-[500px] bg-cover bg-center flex flex-col items-center justify-center text-center text-white"
              style={{ backgroundImage: `url(${slide.image})` }}
            >
              
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default BannerSlider;
