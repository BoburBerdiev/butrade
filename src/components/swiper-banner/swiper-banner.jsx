// Import Swiper React components
import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

import { Autoplay, Pagination, Navigation, EffectFade } from 'swiper/modules';
import { ImageUI } from '..';
import {GrNext, GrPrevious} from "react-icons/gr";


const SwiperBanner = ({list, banner}) => {
  return (
      <div className={'w-full h-full '}>
      <Swiper
          spaceBetween={0}
          effect={'fade'}
          loop={true}
          autoplay={{
              delay: 2500,
              disableOnInteraction: false,
          }}
          pagination={{
              clickable: true,
          }}
          navigation={{
              nextEl: ".my-navigation-next",
              prevEl: ".my-navigation-prev",
          }}
          modules={[Autoplay, EffectFade,  Pagination, Navigation]}
          className="mySwiper h-full w-full"
      >
          {
              list.map(slider => (
                 <SwiperSlide className={'w-full h-full relative'}>
                     <ImageUI src={slider?.src} alt={slider?.alt}/>
                 </SwiperSlide>
              ))
          }
          {
              banner &&
          <div className={'absolute top-0 left-0 w-full h-full z-20'}>
          <div className={'container relative h-full '}>
              <div className="w-10 h-10 flex items-center justify-center bg-white hover:text-white hover:bg-currentBlue duration-200 absolute top-[45%] z-10 left-0 shadow-[0px_4px_10px_0px_rgba(0,0,0,0.12)] rounded-full my-navigation my-navigation-prev ">
                  <GrPrevious className="text-lg" />
              </div>
              <div className="w-10 h-10 flex items-center justify-center bg-white hover:text-white hover:bg-currentBlue duration-200 absolute top-[45%] z-10 right-0 shadow-[0px_4px_10px_0px_rgba(0,0,0,0.12)] rounded-full my-navigation my-navigation-next ">
                  <GrNext className="text-lg" />
              </div>
          </div>
          </div>
          }
      </Swiper>

      </div>
  )
}

export default SwiperBanner