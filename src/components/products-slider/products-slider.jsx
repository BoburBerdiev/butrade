import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation,  Mousewheel, Keyboard } from 'swiper/modules';

// import required modules
import { ProductCard } from '..';
import {GrNext, GrPrevious} from "react-icons/gr";

const ProductsSlider = ({}) => {
  const cards = [
    {
      title: "Трубы пластиковые",
      image: "/image/card-image.png",
      link: "/catalog/2",
      alt: "Butrate Image",
      id: 12
    },
    {
      title: "Трубы из нержавеющей стали разного диаметра",
      image: "/image/card-image.png",
      link: "/catalog/2",
      alt: "Butrate Image",
      id: 11
    },
    {
      title: "Керамогранит Netto Ceramika Markinia Silver High GL R 60*60 см черный",
      image: "/image/card-image.png",
      link: "/catalog/2",
      alt: "Butrate Image",
      id: 5
    },
    {
      title: "Керамогранит плитка глянцевая поверхность",
      image: "/image/card-image.png",
      link: "/catalog/2",
      alt: "Butrate Image",
      id: 2
    },
    {
      title: "Цемент М400 Евроцемент 50кг.",
      image: "/image/card-image.png",
      link: "/catalog/2",
      alt: "Butrate Image",
      id: 3
    },
    {
      title: "Трубы пластиковые",
      image: "/image/card-image.png",
      link: "/catalog/2",
      alt: "Butrate Image",
      id: 4
    },
  ]
  return (
    <>
      <Swiper
        slidesPerView={1.7}
        spaceBetween={10}
        mousewheel={true}
        keyboard={true}
        navigation={{
            nextEl: ".my-navigation-next",
            prevEl: ".my-navigation-prev",
        }}
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
        {
          cards.map(card => (
            <SwiperSlide className='h-full w-full '>
              <ProductCard product={card} />
            </SwiperSlide>
          ))
        }

          <div className="w-10 h-10 flex items-center justify-center bg-white hover:text-white hover:bg-currentBlue duration-200 absolute top-[35%] z-10 left-0 shadow-[0px_4px_10px_0px_rgba(0,0,0,0.12)] rounded-full my-navigation my-navigation-prev ">
            <GrPrevious className="text-lg" />
          </div>
            <div className="w-10 h-10 flex items-center justify-center bg-white hover:text-white hover:bg-currentBlue duration-200 absolute top-[35%] z-10 right-0 shadow-[0px_4px_10px_0px_rgba(0,0,0,0.12)] rounded-full my-navigation my-navigation-next ">
              <GrNext className="text-lg" />
            </div>
      </Swiper>
    </>
  )
}

export default ProductsSlider