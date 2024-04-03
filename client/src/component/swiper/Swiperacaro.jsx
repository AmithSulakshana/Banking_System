import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination,Autoplay} from 'swiper/modules';
import image4 from '../../assets/image4.jpeg'


function Swiperacaro() {
  return (
    <div>
        <Swiper
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        autoplay={{
            delay: 5000,
            disableOnInteraction:false,
          }}
        modules={[Pagination,Autoplay]}
        className="mySwiper"

      >
        <SwiperSlide><img className='w-full h-[550px] max-sm:h-[400px]' src={image4} alt=''/></SwiperSlide>
        <SwiperSlide><img className='w-full h-[550px] max-sm:h-[400px]' src={image4} alt=''/></SwiperSlide>
        <SwiperSlide><img className='w-full h-[550px] max-sm:h-[400px]' src={image4} alt=''/></SwiperSlide>
       
      </Swiper>
      
    </div>
  )
}

export default Swiperacaro;
