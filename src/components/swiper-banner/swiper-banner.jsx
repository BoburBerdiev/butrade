import {Swiper, SwiperSlide} from 'swiper/react';
import {Navigation, Pagination} from 'swiper/modules';
import {ImageUI} from '..';
import {GrNext, GrPrevious} from "react-icons/gr";
import {motion} from 'framer-motion'

const SwiperBanner = ({list, productSlider, styleSlider, priority, width, height,unoptimized}) => {
  return (
      <div className={`w-full relative ${styleSlider}`}>
      <Swiper
          spaceBetween={0}
          loop={true}
          pagination={{
              clickable: true,
              el: ".my-pagination",
          }}
          navigation={{
              clickable: true,
              nextEl: ".my-navigation-next",
              prevEl: ".my-navigation-prev",
          }}
          modules={[ Pagination, Navigation]}
          className="mySwiper h-full w-full"
      >

          {
              list?.map(slider => (
                  <div key={slider?.id}>
                      <SwiperSlide className={'w-full h-full relative'}>
                          {
                              width ?
                                  <ImageUI src={slider?.image} alt={slider?.id} priority={priority} width={width} height={height}/>
                                  :
                                  <ImageUI src={slider?.image} alt={slider?.id} priority={priority} unoptimized/>

                          }
                      </SwiperSlide>
                  </div>
              ))
          }

      </Swiper>

          <div className={`absolute hidden md:block ${productSlider ? "hidden" : ""} top-0 left-0 w-full h-full z-20`}>
              <div className={'container  h-full '}>
                  <div className={'relative h-full'}>
                  <motion.div whileTap={{scale: 0.9}} className="w-10 h-10 flex items-center justify-center bg-white hover:text-white hover:bg-currentBlue duration-200 absolute top-[45%] z-10 left-0 shadow-[0px_4px_10px_0px_rgba(0,0,0,0.12)] rounded-full my-navigation my-navigation-prev ">
                      <GrPrevious className="text-lg" />
                  </motion.div>
                  <motion.div whileTap={{scale: 0.9}} className="w-10 h-10 flex items-center justify-center bg-white hover:text-white hover:bg-currentBlue duration-200 absolute top-[45%] z-10 right-0 shadow-[0px_4px_10px_0px_rgba(0,0,0,0.12)] rounded-full my-navigation my-navigation-next ">
                      <GrNext className="text-lg" />
                  </motion.div>
                  </div>
              </div>
          </div>

          <div className={`flex items-center justify-center header-slider  absolute w-full bottom-3 left-0 z-30`}>
              <div className={`flex gap-x-2.5 productSlider  bg-currentBlue p-1 rounded-lg`}>
                  <div className="inline-flex items-center gap-x-2. my-pagination pagintaion-slider"></div>
              </div>
          </div>
      </div>
  )
}

export default SwiperBanner