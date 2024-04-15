
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

export default function index_slider({color,data,mapdata}) {
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
<main  style={{backgroundColor:`${color}`}} className={s.top_slider}>
    <div className={s.main_1}>
        <h1>{data.title}</h1>
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
        {mapdata.map((item,key)=>{
            return  <SwiperSlide>
        <div className={s.card}>
            <div className={s.card_img}>
                <img src={item.images.rows[0].miniature.downloadHref} alt="" />
            </div>
            <h5>Aimtec</h5>
            <p>{item.name}</p>
            <h2>{item.buyPrice.value} руб.</h2>

        </div>
      </SwiperSlide>
        })}
    
  
      {/* Add more slides as needed */}
    </Swiper>
    </div>
    <div className={s.main_2}>
      <div className={s.button_roll}>  <FaArrowLeftLong onClick={handlePrevSlide}/>
    <FaArrowRightLong onClick={handleNextSlide} /> </div>
    <div className={s.section2}>
       <div style={{width:'90%',margin:'auto'}}>
       <h2>{data.h1}</h2>
<p>{data.p}</p>
       </div>
<button>Перейти к выбору</button>
    </div>

       </div>
</main>

    </div>
  )
}
