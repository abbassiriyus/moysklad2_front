import React, { useState } from 'react'
import Navbar from './Navbar'
import Footer_1 from './footer_1'
import { FaArrowUpFromBracket } from "react-icons/fa6";
import { IoIosArrowForward } from "react-icons/io";
import s from "../styles/cart_empty.module.css"
import { MdOutlineClose } from "react-icons/md";
export default function cart_empty() {
    var [page,setPage]=useState(1)
  return (
    <div>
        <div className={s.body}>
            {/* <Navbar/> */}
            <div className={s.page_road}>
                <span>Главная</span><IoIosArrowForward />
                <span style={{color:'grey'}}>Корзина</span>
            </div>
            <div className={s.prip}>
                <h1>Корзина</h1>
            <FaArrowUpFromBracket  style={{fontSize:'25px'}} />
            </div>
            {page==0?(      <> 
            <div className={s.empty_cart}>
                <div className={s.cart1}>
                    <h3>Сейчас в корзине нет товаров</h3>
                    <p>Для выбора используйте каталог товаров или поиск. <br />
Чтобы добавить товар в корзину, кликните на кнопку <button>В корзину</button>, напротив интересующей вас позиции.</p>
                </div>
            </div>
</> ):(
    <>
    <div className={s.basket}>
      <div className={s.df}>
      <div className={s.check}>
            <input type="checkbox" name="" id="" />
            <span>Выделить все</span>
        </div>
        <div className={s.yop}>
        <MdOutlineClose className={s.cls} />
            <span>Удалить выбранные</span>
        </div>
      </div>
      <div className={s.basketich}>
      <div className={s.basketdg}>
    <div className={s.data}>
        <span>Наименование</span>

        <div className={s.price}>
            <span>Дата доставки*</span>
            <span>Цена</span>
            <span>Кол-во</span>
            <span>Сумма</span>
        </div>
    </div>

    <div className={s.chtitpdb}>
        <input type="checkbox" name="" id="" />
        <div className={s.desc}>
            <a href="">РБК16-250-006-30м, Удлинитель силовой с заземлением,КГ 3х1.5, брызгозащита, 16А, 30м</a>
    <span>Россия, Сетевые удлинители на катушке</span>
    <p>ном. номер: 9000348948</p>
        </div>
        <img src="https://static.chipdip.ru/lib/417/DOC005417103.jpg" alt="" />
        <p>27 апреля
Со склада г.Екатеринбург</p>

    </div>
</div>



<div className={s.basket2}></div>
      </div>
    </div>
    </>
)}
    
            {/* <Footer_1/> */}
        </div>

    </div>
  )
}
