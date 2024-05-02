import React from 'react'
import s from "../styles/catalog.module.css"
import { IoIosArrowForward } from "react-icons/io";
import { FaPlus } from "react-icons/fa6";
import { IoIosArrowUp } from "react-icons/io";
import { IoIosArrowDown } from "react-icons/io";
import { MdArrowForwardIos } from "react-icons/md";
import { FaCheck } from "react-icons/fa6";
import { GrSort } from "react-icons/gr";
import Navbar from './Navbar';
import { AiOutlineAppstore } from "react-icons/ai";
import { CiSaveUp2 } from "react-icons/ci";
import Footer_1 from './footer_1';
import { IoClose } from "react-icons/io5";
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
<div className={s.page_road}>
  <span>Главная</span>
  <IoIosArrowForward/>
 
  <span>Средства разработки, конструкторы, модули</span> <IoIosArrowForward/>
  <span>Arduino совместимые платы и робототехника</span>
<IoIosArrowForward/>

  <span style={{color:'grey'}}>Платы расширения (Shields)</span>
</div>
<div className={s.prip}>
    <h1>Платы расширения (Shields) <sub>478 из 549</sub></h1>

    <div className={s.se}>
 
    <AiOutlineAppstore id='apps' onClick={()=>{
       document.querySelector("#ss").style='display:block'
       document.querySelector('#apps').style='display:none'
      document.querySelector("#sort2").style='display:none'
      document.querySelector("#sort1").style='display:block'
    }} />
   <GrSort id='ss' onClick={()=>{
       document.querySelector("#sort2").style='display:block'
       document.querySelector("#sort1").style='display:none'
       document.querySelector("#apps").style='display:block'
       document.querySelector("#ss").style='display:none'

    }} className={s.grsort}/>
    <CiSaveUp2 />
    </div>
</div>

<div className={s.grove}>
  <div className={s.grove_border}>
    <span>Спецпредложения</span>
  </div>
  <div className={s.grove_border}>
    <span>Спецпредложения</span>
  </div>
  <div className={s.grove_border}>
    <span>Спецпредложения</span>
  </div>
  <div className={s.grove_border}>
    <span>Спецпредложения</span>
  </div>
  <div className={s.grove_border}>
    <span>Спецпредложения</span>
  </div>
  <div className={s.grove_border}>
    <span>Спецпредложения</span>
  </div>
  <div className={s.grove_border}>
    <span>Спецпредложения</span>
  </div>
  <div className={s.grove_border}>
    <span>Спецпредложения</span>
  </div>
  <div className={s.grove_border}>
    <span>Спецпредложения</span>
  </div>
 
</div>

<div className={s.display_grid}>
    <div className={s.summary1}>
    <details className={s.detail1}>
  <summary className={s.sum}>Бренд</summary>
  <input className={s.name1} type="text" name="" id="" placeholder="Поиск значений"/>
  <hr  style={{color:'grey'}}/>
  <div className={s.inp_sub}>
    <input type="checkbox" name="" id="" />
    <span>BTM<sub>543</sub></span>
  </div>

  <div className={s.inp_sub}>
    <input type="checkbox" name="" id="" />
    <span>BTM<sub>543</sub></span>
  </div>

  <div className={s.inp_sub}>
    <input type="checkbox" name="" id="" />
    <span>BTM<sub>543</sub></span>
  </div>

  <div className={s.inp_sub}>
    <input type="checkbox" name="" id="" />
    <span>BTM<sub>543</sub></span>
  </div>
</details>




    </div>
<div className={s.kraftdg}>
<div id='sort2' className={s.big}>
<div className={s.kraft}>
        <div className={s.dekraft}>
            <div className={s.img_kraft}>
            <div className={s.sp}>

                <span>быстрый просмотр</span>
                </div>                
            </div>
            <div className={s.body_kraft}>
                {/* <span></span> */}
                <h5>DEKraft</h5>
                <a href="">DEKraft Автоматический выключатель 2Р 25А х-ка B ВА-103 6кА  </a>
                <div className={s.check_pl}>
                <FaCheck />
                <span>4 шт.</span>
                <FaPlus />
                </div>
                <h3>490 руб.</h3>
                <div className={s.button_pm}>
                    <div className={s.pm}>
                        <button>-</button>
                        <span>1</span>
                        <button>+</button>
                    </div>
                    <button className={s.redbtn}>В корзину</button>
                </div>
            </div>
        </div>

        <div className={s.dekraft}>
            <div className={s.img_kraft}>
            <div className={s.sp}>

                <span>быстрый просмотр</span>
                </div>                
            </div>
            <div className={s.body_kraft}>
                {/* <span></span> */}
                <h5>DEKraft</h5>
                <a href="">DEKraft Автоматический выключатель 2Р 25А х-ка B ВА-103 6кА  </a>
                <div className={s.check_pl}>
                <FaCheck />
                <span>4 шт.</span>
                <FaPlus />
                </div>
                <h3>490 руб.</h3>
                <div className={s.button_pm}>
                    <div className={s.pm}>
                        <button>-</button>
                        <span>1</span>
                        <button>+</button>
                    </div>
                    <button className={s.redbtn}>В корзину</button>
                </div>
            </div>
        </div>

        <div className={s.dekraft}>
            <div className={s.img_kraft}>
            <div className={s.sp}>

                <span>быстрый просмотр</span>
                </div>                
            </div>
            <div className={s.body_kraft}>
                {/* <span></span> */}
                <h5>DEKraft</h5>
                <a href="">DEKraft Автоматический выключатель 2Р 25А х-ка B ВА-103 6кА  </a>
                <div className={s.check_pl}>
                <FaCheck />
                <span>4 шт.</span>
                <FaPlus />
                </div>
                <h3>490 руб.</h3>
                <div className={s.button_pm}>
                    <div className={s.pm}>
                        <button>-</button>
                        <span>1</span>
                        <button>+</button>
                    </div>
                    <button className={s.redbtn}>В корзину</button>
                </div>
            </div>
        </div>

        <div className={s.dekraft}>
            <div className={s.img_kraft}>
            <div className={s.sp}>

                <span>быстрый просмотр</span>
                </div>                
            </div>
            <div className={s.body_kraft}>
                {/* <span></span> */}
                <h5>DEKraft</h5>
                <a href="">DEKraft Автоматический выключатель 2Р 25А х-ка B ВА-103 6кА  </a>
                <div className={s.check_pl}>
                <FaCheck />
                <span>4 шт.</span>
                <FaPlus />
                </div>
                <h3>490 руб.</h3>
                <div className={s.button_pm}>
                    <div className={s.pm}>
                        <button>-</button>
                        <span>1</span>
                        <button>+</button>
                    </div>
                    <button className={s.redbtn}>В корзину</button>
                </div>
            </div>
        </div>
    </div>
</div>

<div id='sort1' className={s.change}>
<div className={s.pad}>
<div className={s.smart}>
    <div className={s.smarttext}>
      <a href="">Arduino Breakout for LinkIt Smart 7688 Duo, Интерфейсная плата расширения для платформы LinkIt Smart 7688 Duo</a>
   
    <p><span>Бренд:</span>Seeed Studio</p>
    <p><span>Тип платы/модуля расширения:</span>переходник</p>
    <p><span>Функциональное назначение платы/модуля:</span> arduino, grove, ethernet интерфейс</p>
    <p><span>Совместимость:</span>linkit smart 7688 duo</p>
    </div>

    <div className={s.smartimg}>
      <span className={s.fast}>быстрый просмотр</span>
    </div>

<div className={s.tikk}>
<FaCheck />
  <span>6 шт.</span>
</div>
<div className={s.price}>
<div className={s.butn}>
  <span><IoClose /> 1 600 руб. </span>
  <div className={s.btn2}>
    <button>-</button>
    <span>1</span>
    <button>+</button>
  </div>
  <button className={s.red}>В корзине</button>
</div>
<p>от 3 шт. — 1 500 руб.</p>
</div>
  </div>

</div>

</div>


<div className={s.page}>
    <div className={s.p_num}>
        <h5>Страница</h5>
        <div className={s.num1}>
        <div className={s.number}>
            <span>1</span>
        </div>
        <div className={s.number}>
            <span>2</span>
        </div>

         <div className={s.number}>
            <span>3</span>
        </div>
        <div className={s.number}>
        <MdArrowForwardIos  className={s.rarrow} />
        </div>
        </div>
    </div>

    <div className={s.p_num}>
        <h5>Товаров на странице</h5>
        <div className={s.num1}>
        <div className={s.number}>
            <span>20</span>
        </div>
        <div className={s.number}>
            <span>40</span>
        </div>
        <div className={s.number}>
            <span>60</span>
        </div>
        </div>
    </div>
</div>
</div>
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
