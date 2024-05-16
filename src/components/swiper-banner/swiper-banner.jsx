import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { GrPrevious } from "react-icons/gr";
import { GrNext } from "react-icons/gr";
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import { Navigation, Pagination, EffectFade, Autoplay } from 'swiper/modules';
import { ImageUI } from '..';


const SwiperBanner = ({list}) => {
  return (
    <div className='relative h-[43vh]'>
      <Swiper
        cssMode={true}
        pagination={{
          clickable: true,
          el: ".inner-pagination",
        }}
        navigation={{
          nextEl: ".swipper-button-next-btn",
          prevEl: ".swipper-button-prev-btn",
        }}
        loop={true}
        effect={"fade"}
        modules={[Navigation, Pagination, EffectFade, Autoplay]}
        className="mySwiper w-full h-full"
      >
        {
          list?.map(slide => (
            <SwiperSlide key={slide.id} className='w-full h-full relative'>
              <ImageUI src={slide.src} alt={slide.alt} />
            </SwiperSlide>
          ))
        }
        
        <div className={'absolute w-full bottom-0 left-0 '}>
          <div className="relative flex items-center justify-center py-4 mt-5 md:mt-10 gap-x-5 z-30">
            <div className="inline-flex items-center gap-x-4 inner-pagination room-slider"></div>
          </div>
        </div>
      <div className="relative flex items-center justify-center py-4 mt-5 md:mt-10 gap-x-5 z-30">
          <div className="cursor-pointer text-[#8F8170] p-2  swipper-button-prev-btn ">
            <GrPrevious className="text-2xl" />
          </div>
          <div className="inline-flex items-center gap-x-4 inner-pagination "></div>

          <div className="cursor-pointer text-[#8F8170] p-2  swipper-button-next-btn ">
            <GrNext className="text-2xl" />
          </div>
      </div>
      </Swiper>
    </div>
  )
}

export default SwiperBanner