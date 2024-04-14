import React from 'react'
import s from "../styles/Home.module.css"
import headerCarousel from "../pages/header_carousel"
import Footer_1 from './footer_1';
import Navbar from './Navbar';
import Image from 'next/image';
// import img from "../images/electromagenetic-relays.jpg"
import { BsController } from 'react-icons/bs';
export default function index() {
  return (
    <div>
      <div className={s.body}>
        <Navbar/>
        <div className={s.page_road}>
    
        </div>
  
<headerCarousel/>
     <div className={s.pair_big}>
     <div className={s.pair}>
      <h1>СТАТЬ ПАРТНЕРОМ</h1>
     </div>
     <div className={s.line}></div>
     <div className={s.added}>
      <h6>ПРИГЛАШАЕМ К СОТРУДНИЧЕСТВУ <br/>
ПРОИЗВОДИТЕЛЕЙ И ДИСТРИБЬЮТОРОВ
</h6>

     </div>
     <div className={s.button}>
<button>ПОДАТЬ ЗАЯВКУ</button>
     </div>
     </div>
<Footer_1/>
      </div>
    </div>
  )
}
