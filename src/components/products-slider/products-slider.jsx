// Import Swiper React components
import {Swiper, SwiperSlide} from 'swiper/react';
import {Navigation} from 'swiper/modules';
import {ProductCard} from '..';
import {GrNext, GrPrevious} from "react-icons/gr";

const ProductsSlider = ({className}) => {
  const cards = [
    {
      title_ru: "Трубы пластиковые",
      title_uz: "Plastik quvurlar",
      title_en: "Plastic pipes",
      image: "/image/card-image.png",
      link: "/catalog/2",
      alt: "Butrate Image",
      id: 12
    },
    {
      title_ru: "Трубы пластиковые  edwfef ",
      title_uz: "Plastik quvurlar",
      title_en: "Plastic pipes",
      image: "/image/card-image.png",
      link: "/catalog/2",
      alt: "Butrate Image",
      id: 11
    },
    {
      title_ru: "Трубы пластиковые",
      title_uz: "Plastik quvurlar",
      title_en: "Plastic pipes",
      image: "/image/card-image.png",
      link: "/catalog/2",
      alt: "Butrate Image",
      id: 10
    },
    {
      title_ru: "Трубы пластиковые",
      title_uz: "Plastik quvurlar",
      title_en: "Plastic pipes",
      image: "/image/card-image.png",
      link: "/catalog/2",
      alt: "Butrate Image",
      id: 9
    },
    {
      title_ru: "Трубы пластиковые",
      title_uz: "Plastik quvurlar",
      title_en: "Plastic pipes",
      image: "/image/card-image.png",
      link: "/catalog/2",
      alt: "Butrate Image",
      id: 8
    },
    {
      title_ru: "Трубы пластиковые",
      title_uz: "Plastik quvurlar",
      title_en: "Plastic pipes",
      image: "/image/card-image.png",
      link: "/catalog/2",
      alt: "Butrate Image",
      id: 7
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
              clickable: true,
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
            modules={[Navigation]}
            className={`mySwiper relative !pb-14 ${className}`}
        >
          {
            cards.map(card => (
                <div key={card.id}>
                  <SwiperSlide className='h-full w-full relative z-20 '>
                    <ProductCard product={card}/>
                  </SwiperSlide>
                </div>
            ))
          }

          <div
              className="w-10 h-10 flex items-center border-currentBlue border justify-center bg-white hover:text-white hover:bg-currentBlue duration-75 absolute top-[35%] z-10 left-0 shadow-[0px_4px_10px_0px_rgba(0,0,0,0.12)] rounded-full my-navigation my-navigation-prev ">
            <GrPrevious className="text-lg"/>
          </div>
          <div
              className="w-10 h-10 flex items-center border-currentBlue border justify-center bg-white hover:text-white hover:bg-currentBlue duration-75 absolute top-[35%] z-10 right-0 shadow-[0px_4px_10px_0px_rgba(0,0,0,0.12)] rounded-full my-navigation my-navigation-next ">
            <GrNext className="text-lg"/>
          </div>

        </Swiper>
      </>
  )
}

export default ProductsSlider