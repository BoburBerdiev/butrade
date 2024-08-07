import {Swiper, SwiperSlide} from 'swiper/react';
import {Navigation} from 'swiper/modules';
import {GrNext, GrPrevious} from "react-icons/gr";
import {ProductCard} from "@/components";

const ProductsSlider = ({className , cards , isCardInner}) => {
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
              0: {
                slidesPerView: 2,
                spaceBetween: 2,
              },
              300: {
                slidesPerView: 2,
                spaceBetween: 5,
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
            modules={[Navigation]}
            className={`mySwiper relative !pb-2 md:!pb-14 ${className}`}
        >
          {
            cards?.map(card => (
                  <SwiperSlide key={card?.id} className='h-full w-full relative z-20 '>
                    <ProductCard product={card} isCardInner={isCardInner}/>
                  </SwiperSlide>
            ))
          }

          <div
              className="w-7 h-7 md:w-10 md:h-10 flex items-center border-currentBlue border justify-center bg-white hover:text-white hover:bg-currentBlue duration-75 absolute top-[35%] z-10 left-0 shadow-[0px_4px_10px_0px_rgba(0,0,0,0.12)] rounded-full my-navigation my-navigation-prev ">
            <GrPrevious className="text-md md:text-lg"/>
          </div>
          <div
              className="w-7 h-7 md:w-10 md:h-10 flex items-center border-currentBlue border justify-center bg-white hover:text-white hover:bg-currentBlue duration-75 absolute top-[35%] z-10 right-0 shadow-[0px_4px_10px_0px_rgba(0,0,0,0.12)] rounded-full my-navigation my-navigation-next ">
            <GrNext className="text-md md:text-lg"/>
          </div>

        </Swiper>
      </>
  )
}

export default ProductsSlider