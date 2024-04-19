import React from 'react'
import Navbar from './Navbar'
import Footer_1 from './footer_1'
import { FaArrowUpFromBracket } from "react-icons/fa6";
import { IoIosArrowForward } from "react-icons/io";
import s from "../styles/cart_empty.module.css"
export default function cart_empty() {
  return (
    <div>
        <div className={s.body}>
            <Navbar/>
            <div className={s.page_road}>
                <span>Главная</span><IoIosArrowForward />
                <span style={{color:'grey'}}>Корзина</span>
            </div>
            <div className={s.prip}>
                <h1>Корзина</h1>
            <FaArrowUpFromBracket  style={{fontSize:'25px'}} />
            </div>
            <div className={s.empty_cart}>
                <div className={s.cart1}>
                    <h3>Сейчас в корзине нет товаров</h3>
                    <p>Для выбора используйте каталог товаров или поиск. <br />
Чтобы добавить товар в корзину, кликните на кнопку <button>В корзину</button>, напротив интересующей вас позиции.</p>
                </div>
            </div>
            <Footer_1/>
        </div>

    </div>
  )
}
