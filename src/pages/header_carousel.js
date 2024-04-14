import React, { useRef } from 'react'
import s from '../styles/header_carousel.module.css'
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Pagination, Autoplay } from 'swiper';
import { FaArrowLeftLong } from "react-icons/fa6";
import { FaArrowRightLong } from "react-icons/fa6";
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

export default function header_carousel() {
    SwiperCore.use([Navigation, Pagination, Autoplay]);
    const swiperRef = useRef(null);

    const handleNextSlide = () => {
      if (swiperRef.current) {
        swiperRef.current.swiper.slideNext();
      }
    };
  
    const handlePrevSlide = () => {
      if (swiperRef.current) {
        swiperRef.current.swiper.slidePrev();
      }
    };
  return (
    <div>

<Swiper
className={s.header_carousel}
ref={swiperRef}
      spaceBetween={50}
      slidesPerView={1}
      loop={true}
      autoplay={{
        delay: 2000,
        disableOnInteraction: false,
      }}
    >
      <SwiperSlide><img src="https://static.chipdip.ru/images/sliderbanner/41/eaes.jpg" alt="" /></SwiperSlide>
      <SwiperSlide><img src="https://static.chipdip.ru/images/sliderbanner/41/eaes.jpg" alt="" /></SwiperSlide>
      <SwiperSlide><img src="https://static.chipdip.ru/images/sliderbanner/41/eaes.jpg" alt="" /></SwiperSlide>
      <SwiperSlide><img src="https://static.chipdip.ru/images/sliderbanner/41/eaes.jpg" alt="" /></SwiperSlide>
      <SwiperSlide><img src="https://static.chipdip.ru/images/sliderbanner/41/eaes.jpg" alt="" /></SwiperSlide>
      <SwiperSlide><img src="https://static.chipdip.ru/images/sliderbanner/41/eaes.jpg" alt="" /></SwiperSlide>
      {/* Add more slides as needed */}
    </Swiper>
    <FaArrowLeftLong onClick={handlePrevSlide}/>
    <FaArrowRightLong onClick={handleNextSlide} />  
    </div>
  )
}
