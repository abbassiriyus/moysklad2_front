import React from 'react'
import s from "../styles/Home.module.css"
import Header_Carousel from "../pages/header_carousel"
import Footer_1 from './footer_1';
import Index_slider from './index_slider';
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
  
<Header_Carousel/>
     <div className={s.pair_big}>
     <div className={s.pair}>
      <h1>СТАТЬ ПАРТНЕРОМ</h1>
     </div>
     <div className={s.line}></div>
     <div className={s.added}>
      <h4>ПРИГЛАШАЕМ К СОТРУДНИЧЕСТВУ <br/>
ПРОИЗВОДИТЕЛЕЙ И ДИСТРИБЬЮТОРОВ
</h4>

     </div>
     <div className={s.button}>
<button>ПОДАТЬ ЗАЯВКУ</button>
     </div>
     </div>
     <Index_slider data={{title:'Хиты продаж',
      h1:'Самые популярные товары',
      p:'Выбор наших покупателей'
      }}/>
     <Index_slider data={{title:'Лучшие предложения',
    h1:'Выгодное предложение',
    p:'Узнайте о выгодных предложениях и специальных ценах. Только в этом месяце!'
    }} color={'#e6faff'}/>
     <Index_slider data={{title:'Набирают популярность',h1:'Успейте купить первым',
    p:'Новинки, которые пользуются повышенным спросом'}} color={'#e7fcf9'}/>
   
<Footer_1/>
      </div>
    </div>
  )
}
