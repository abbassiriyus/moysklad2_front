import React from 'react'
import s from "../styles/Home.module.css"
import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './Navbar';
export default function index() {
  return (
    <div>
      <div className={s.body}>
        <Navbar/>
      <Carousel prevIcon={<span className="carousel-control-prev-icon " />} nextIcon={<span className="carousel-control-next-icon" />}>
      <Carousel.Item>
       <div className={s.carousel_img3}></div>
      </Carousel.Item>
      <Carousel.Item>
   <div className={s.carousel_img}></div>
      </Carousel.Item>
      <Carousel.Item>
       <div className={s.carousel_img2}></div>
      </Carousel.Item>
    </Carousel>
      </div>
    </div>
  )
}
