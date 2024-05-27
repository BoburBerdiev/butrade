// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';

import {ImageUI} from '..';
import {GrNext, GrPrevious} from "react-icons/gr";

const PartnorsSlider = ({partnors}) => {

  return (
    <>
      <Swiper
        slidesPerView={1.7}
        spaceBetween={10}
        mousewheel={true}
        keyboard={true}
        navigation={{
          clickable: true,
            nextEl: ".my-navigation-next",
            prevEl: ".my-navigation-prev",
        }}
        breakpoints={{
          420: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          480: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          640: {
            slidesPerView: 3,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 4,
            spaceBetween: 20,
          },
          1024: {
            slidesPerView:5,
            spaceBetween: 30,
          },
        }}
        loop={true}
        modules={[Navigation]}
        className="mySwiper relative "
      >
        {
          partnors?.map(partnor => (
              <div key={partnor.id}>
            <SwiperSlide className=' w-full aspect-[2/1] md:aspect-[16/5]  relative '>
              <ImageUI src={partnor?.image} objectFitContain={true}  alt={partnor?.id}/>
            </SwiperSlide>
              </div>
          ))
        }

          <div className="w-10 h-10 flex items-center justify-center bg-white hover:text-white hover:bg-currentBlue duration-200 absolute top-1/2 -translate-y-1/2 z-10 left-0 shadow-[0px_4px_10px_0px_rgba(0,0,0,0.12)] rounded-full my-navigation my-navigation-prev ">
            <GrPrevious className="text-lg" />
          </div>
          <div className="w-10 h-10 flex items-center justify-center bg-white hover:text-white hover:bg-currentBlue duration-200 absolute top-1/2 -translate-y-1/2 z-10 right-0 shadow-[0px_4px_10px_0px_rgba(0,0,0,0.12)] rounded-full my-navigation my-navigation-next ">
            <GrNext className="text-lg" />
          </div>

      </Swiper>
    </>
  )
}

export default PartnorsSlider