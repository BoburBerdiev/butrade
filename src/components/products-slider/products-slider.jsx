import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation,  Mousewheel, Keyboard } from 'swiper/modules';

// import required modules
import { ProductCard } from '..';

const ProductsSlider = ({}) => {
  return (
    <>
      <Swiper
        slidesPerView={1.7}
        spaceBetween={10}
        navigation={true}
        mousewheel={true}
        keyboard={true}
        breakpoints={{
          420: {
            slidesPerView: 2.1,
            spaceBetween: 20,
          },
          480: {
            slidesPerView: 2.5,
            spaceBetween: 20,
          },
          640: {
            slidesPerView: 2.8,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 3.5,
            spaceBetween: 20,
          },
          1024: {
            slidesPerView: 5,
            spaceBetween: 20,
          },
        }}
        loop={true}
        modules={[Navigation, Mousewheel, Keyboard]}
        className="mySwiper relative pb-14"
      >
        <SwiperSlide className='h-full w-full '>
          <ProductCard image={'/image/card-image.png'} title={'Трубы пластиковые'}/>
        </SwiperSlide>
        <SwiperSlide>
          <ProductCard image={'/image/card-image.png'} title={'Трубы пластиковые'}/>
        </SwiperSlide>
        <SwiperSlide>
          <ProductCard image={'/image/card-image.png'} title={'Трубы пластиков dwedew fewfew fewые'}/>
        </SwiperSlide>
        <SwiperSlide>
          <ProductCard image={'/image/card-image.png'} title={'Трубы пластиковые'}/>
        </SwiperSlide>
        <SwiperSlide>
          <ProductCard image={'/image/card-image.png'} title={'Трубы пластиковые'}/>
        </SwiperSlide>
        <SwiperSlide>
          <ProductCard image={'/image/card-image.png'} title={'Трубы пластиковые'}/>
        </SwiperSlide>
      </Swiper>
    </>
  )
}

export default ProductsSlider