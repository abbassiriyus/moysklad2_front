import React, { useEffect, useRef, useState } from 'react'
import s from '../styles/header_carousel.module.css'
import { Swiper, SwiperSlide } from 'swiper/react';

import { FaArrowLeftLong } from "react-icons/fa6";
import { FaArrowRightLong } from "react-icons/fa6";
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import axios from 'axios';
import url from "./host.js"
export default function header_carousel() {


  var[carousel,setCarousel]=useState([])


function getData() {
  axios.get(`${url()}/api/carousel`).then(res=>{
setCarousel(res.data)
  }).catch(err=>{

  })
}

useEffect(()=>{
  getData()
},[])
;
const handlePageChange = (pageNumber) => {
  for (let i = 0; i < document.querySelectorAll("#dd").length; i++) {
 if(pageNumber-1===i){
document.querySelectorAll('#dd')[i].style="border-bottom:2px solid"
 }else{
  document.querySelectorAll('#dd')[i].style="border-bottom:none"

 }
  }
  if (swiperRef.current) {
    swiperRef.current.swiper.slideTo(pageNumber - 1);
  }
};
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
     {carousel.map(item=>{
    return  <SwiperSlide><img src={item.image} alt="" /></SwiperSlide>
  
     })} 
      {/* Add more slides as needed */}
    </Swiper>
   <div className={s.arrow_lr}><div className={s.left_rig}> <FaArrowLeftLong  className={s.arrow1} onClick={handlePrevSlide}/>
    <FaArrowRightLong className={s.arrow1}  onClick={handleNextSlide} /></div>
   
    <div></div>
    <div></div>
 {carousel.map((item,key)=>{
    return  <div id='dd' style={key==0?{borderBottom:'2px solid'}:{}} onClick={()=>handlePageChange(key+1
    )}> {item.title}</div>
     })} 
    
   </div>
    </div>
  )
}
