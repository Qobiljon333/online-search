import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import "./ImgSlide.css";

// import required modules
import { Pagination } from "swiper";

export default function ImgSlide({imgs}) {
    console.log(imgs);
  return (
    <>
      <Swiper
        slidesPerView={"auto"}
        loop={true}
        centeredSlides={true}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        {
            imgs?.map((imgs,inx) =>(
                 <SwiperSlide key={inx} className="max-w-[880px] "><div className="lg:h-[480px] h-[300px] overflow-y-hidden overflow-x-hidden  "> <img className='h-[100%] -mt-[5%] transitionn hover:scale-105  object-contain' src={imgs} alt="" /></div></SwiperSlide>

            ))
        }
        {/* <SwiperSlide>Slide 1</SwiperSlide>
        <SwiperSlide>Slide 2</SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
        <SwiperSlide>Slide 5</SwiperSlide>
        <SwiperSlide>Slide 6</SwiperSlide>
        <SwiperSlide>Slide 7</SwiperSlide>
        <SwiperSlide>Slide 8</SwiperSlide>
        <SwiperSlide>Slide 9</SwiperSlide> */}
      </Swiper>
    </>
  );
}
