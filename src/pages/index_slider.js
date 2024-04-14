
import s from "../styles/index_slider.module.css"
import React, { useRef } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Pagination, Autoplay } from 'swiper';
import { FaArrowLeftLong } from "react-icons/fa6";
import { FaArrowRightLong } from "react-icons/fa6";
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

export default function index_slider() {
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
<main className={s.top_slider}>
    <div className={s.main_1}>
        <h1>Хиты продаж</h1>
    <Swiper
className={s.header_carousel}
ref={swiperRef}
      slidesPerView={4}
      loop={true}
      breakpoints={{
        // Breakpoints
        320: {
          slidesPerView: 2,
        },
        768: {
          slidesPerView: 3,
        },
        1024: {
          slidesPerView: 4,
        },
      }}
      autoplay={{
        delay: 2000,
        disableOnInteraction: false,
      }}
    >
      <SwiperSlide>
        <div className={s.card}>
            <div className={s.card_img}>
                <img src="https://static.chipdip.ru/lib/010/DOC004010007.jpg" alt="" />
            </div>
            <h5>Aimtec</h5>
            <p>AM4T-2424SZ, DC/DC преобразователь, 4Вт, вход 18…36В ...</p>
            <h2>120 руб.</h2>

        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className={s.card}>
            <div className={s.card_img}>
                <img src="https://static.chipdip.ru/lib/010/DOC004010007.jpg" alt="" />
            </div>
            <h5>Aimtec</h5>
            <p>AM4T-2424SZ, DC/DC преобразователь, 4Вт, вход 18…36В ...</p>
            <h2>120 руб.</h2>

        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className={s.card}>
            <div className={s.card_img}>
                <img src="https://static.chipdip.ru/lib/010/DOC004010007.jpg" alt="" />
            </div>
            <h5>Aimtec</h5>
            <p>AM4T-2424SZ, DC/DC преобразователь, 4Вт, вход 18…36В ...</p>
            <h2>120 руб.</h2>

        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className={s.card}>
            <div className={s.card_img}>
                <img src="https://static.chipdip.ru/lib/010/DOC004010007.jpg" alt="" />
            </div>
            <h5>Aimtec</h5>
            <p>AM4T-2424SZ, DC/DC преобразователь, 4Вт, вход 18…36В ...</p>
            <h2>120 руб.</h2>

        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className={s.card}>
            <div className={s.card_img}>
                <img src="https://static.chipdip.ru/lib/010/DOC004010007.jpg" alt="" />
            </div>
            <h5>Aimtec</h5>
            <p>AM4T-2424SZ, DC/DC преобразователь, 4Вт, вход 18…36В ...</p>
            <h2>120 руб.</h2>

        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className={s.card}>
            <div className={s.card_img}>
                <img src="https://static.chipdip.ru/lib/010/DOC004010007.jpg" alt="" />
            </div>
            <h5>Aimtec</h5>
            <p>AM4T-2424SZ, DC/DC преобразователь, 4Вт, вход 18…36В ...</p>
            <h2>120 руб.</h2>

        </div>
      </SwiperSlide>
      {/* Add more slides as needed */}
    </Swiper>
    </div>
    <div className={s.main_2}>
      <div className={s.button_roll}>  <FaArrowLeftLong onClick={handlePrevSlide}/>
    <FaArrowRightLong onClick={handleNextSlide} /> </div>
    <div className={s.section2}>
       <div style={{width:'90%',margin:'auto'}}>
       <h2>Самые популярные товары</h2>
<p>Выбор наших покупателей</p>
       </div>
<button>Перейти к выбору</button>
    </div>

       </div>
</main>
    </div>
  )
}
