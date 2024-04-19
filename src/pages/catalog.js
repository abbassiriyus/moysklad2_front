import React from 'react'
import { FaCheck } from "react-icons/fa6";
import s from "../styles/catalog.module.css"
import { FaPlus } from "react-icons/fa6";
import { IoIosArrowUp } from "react-icons/io";
import { IoIosArrowDown } from "react-icons/io";
import Navbar from './Navbar';
import Kraft from './kraft';
import Footer_1 from './footer_1';
export default function catalog() {
    function openmodal(){
        document.querySelector("#accor1").style='height:auto'
        document.querySelector("#span2").style="display:block"
        document.querySelector("#span3").style="display:none"
        document.querySelector("#hide0").style="display:none"
      }
      function closemodal(){
        document.querySelector("#hide0").style="display:block"
        document.querySelector("#span2").style="display:none"
        document.querySelector("#span3").style="display:block"
        document.querySelector("#accor1").style='height:400px'
      }
  return (
    <div>
        <div className={s.body}>
            <Navbar/>
<div className={s.page_road}></div>
<div className={s.prip}>
    <h1></h1>
</div>

<div className={s.kr}>
<Kraft/>
</div>

<div id='accor1' className={s.accor}>
          <p>Универсальные автомобильные сканеры – устройства, предназначенные для диагностики автомобилей с помощью ПК или мобильного телефона. Обмен данными осуществляется по беспроводным сетям Bluetooth.
<br /> <br />
Автомобильные стоп-сигналы – устройство для повышения безопасности водителя во время движения, а также для снижения риска возникновения аварийной ситуации.
<br /><br />
Универсальные автомобильные адаптеры KL линий – устройства для подключения ПК к диагностическому каналу электронных блоков управления автомобилей. Применяются они для диагностики и управления функциями ЭБУ. Данные адаптеры представляют собой преобразователи уровней логических сигналов и стандартного порта USB.
<br /><br />
Посмотреть и купить товар вы можете в наших магазинах в городах: Москва, Санкт-Петербург, Архангельск, Астрахань, Барнаул, Брянск, Владимир, Волгоград, Вологда, Воронеж, Екатеринбург, Иваново, Ижевск, Иркутск, Йошкар‑Ола, Казань, Калуга, Кемерово, Киров, Кострома, Краснодар, Красноярск, Курган, Курск, Липецк, Набережные Челны, Нижний Новгород, Новосибирск, Омск, Орёл, Оренбург, Пенза, Пермь, Псков, Ростов-на-Дону, Рязань, Самара, Саранск, Саратов, Смоленск, Ставрополь, Сургут, Тамбов, Тверь, Томск, Тула, Тюмень, Ульяновск, Уфа, Хабаровск, Чебоксары, Челябинск, Ярославль.
Доставка в пункты выдачи заказов Яндекс Доставка, СДЭК, Л-Пост, Boxberry, 5Post, транспортными компаниями DPD и «Деловые Линии», а также Почтой России в Тольятти, Владивосток, Махачкала, Новокузнецк, Калининград, Улан-Удэ, Сочи, Нижний Тагил, Чита, Владикавказ, Грозный, Мурманск, Петрозаводск, Нижневартовск, Новороссийск и еще в более чем 1000 городов и населенных пунктов по всей России.
<br /><br />
Товары из группы «Автомобильная электроника» вы можете купить оптом и в розницу.</p>

         </div>
         <div id='hide0' className={s.line}></div>
<div className={s.hide}>
    <span id='span2' onClick={()=> closemodal()} className={s.span1}>скрыть текст<IoIosArrowUp  /></span>
    <span id='span3' onClick={()=> openmodal()} className={s.span0}>показать весь текст<IoIosArrowDown  /></span>
</div>
<hr  className={s.hrr}/>

<h3>Ранее просмотренные товары</h3>
<div className={s.cards1}>
  
<div className={s.card1}>
   <img src="https://static.chipdip.ru/lib/968/DOC000968750.jpg" alt="" />

    <div className={s.card1_body}>
      <h5>Россия</h5>
      <a href=""><span>ПОС 40 прв d=1.0мм 1м спираль, Припой</span></a>
      <p>230 руб.</p>
    </div>
  </div>

  <div className={s.card1}>
   <img src="https://static.chipdip.ru/lib/975/DOC002975843.jpg" alt="" />

    <div className={s.card1_body}>
      <h5>Solins</h5>
      <a href=""><span>СКФ (ФКСп, ФКЭт) с кисточкой 20мл, Флюс</span></a>
      <p>170 руб.
</p>
    </div>
  </div>
</div>
<Footer_1/>
        </div>
    </div>
  )
}
