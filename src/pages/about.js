import React from 'react'
import s from "../styles/about.module.css"
import Navbar from './Navbar'
import Footer_1 from './footer_1';
import { IoIosArrowForward } from "react-icons/io";
import { MdOutlinePresentToAll } from "react-icons/md";
export default function about() {
  return (
    <div>
        <div className={s.body}>
            <Navbar/>
            <div className={s.page_road}>
            <span>Главная</span><IoIosArrowForward />
            <span>О компании </span><IoIosArrowForward />
            </div>
    <div className={s.plan}>
        <h1>Планируете стать поставщиком?</h1>
        <MdOutlinePresentToAll style={{fontSize:'30px'}} />
    </div>
 <div className={s.history}>
<div className={s.chip}>
<p className={s.dip}>Компания «ЧИП и ДИП» приглашает к сотрудничеству производителей
и дистрибьюторов электронных компонентов и приборов.</p>
<img src="https://static.chipdip.ru/images/news/test-chipdip-partner/8.png" alt="" />

<p>магазин входит в <strong>ТОП-100</strong><br />
крупнейших интернет-магазинов России</p>
<div id={s.block} className={s.company}>
    <ul>
        <li>История компании</li>
        <li>«ЧИП и ДИП» сегодня</li>
        <li>28 лет в сфере e-com</li>
        <li>Контактная информация</li>
        <li>Реквизиты АО «ЧИП и ДИП»</li>
        <li>Дистрибьюция</li>
        <li>Планируете стать поставщиком?</li>
        <li>Работа в «ЧИП и ДИП»</li>
        <li>Политика конфиденциальности</li>
        <li>Пользовательское Соглашение</li>
    </ul>
</div>
<div  className={s.customer}>
    <div className={s.order1}>
    <img src="https://static.chipdip.ru/images/news/test-chipdip-partner/3.png" alt="" /><br />
    <span>100 000+</span>
    <p>потенциальных покупателей
в день в России, Беларуси,
Казахстане и Армении</p>
    </div>
     <div className={s.order1}>
    <img src="https://static.chipdip.ru/images/news/test-chipdip-partner/2.png" alt="" /><br />
    <span>62 000+</span>
    <p>заказов <br />
ежемесячно</p>
    </div>
    <div className={s.order1}>
    <img src="https://static.chipdip.ru/images/htmlsnippet/invite2020_html/7.png" alt="" /><br />
    <span>40</span>
    <p>
сеть розничных
магазинов с офисами
оптовых продаж
на сентябрь 2020</p>
    </div>
 <div className={s.order1}>
    <img src="https://static.chipdip.ru/images/news/test-chipdip-partner/4.png" alt="" /><br />
    <span>11 000 м²</span>
    <p>два автоматизирован­ных склада МОСКВА - <strong> 8 500</strong> м²
ЕКАТЕРИНБУРГ - <strong>2 500</strong> м²</p>
    </div>
     <div className={s.order1}>
    <img src="https://static.chipdip.ru/images/news/test-chipdip-partner/5.png" alt="" /><br />
    <span>chip.</span>
    <p>мобильное
приложение</p>
    </div>
    <div className={s.order1}>
    <img src="https://static.chipdip.ru/images/news/test-chipdip-partner/6.png" alt="" /><br />
    <span>доставка</span>
    <p>ответственное хранение
прием платежей</p>
    </div>

    
</div>


</div>
<div id={s.none} className={s.company}>
    <ul>
        <li>История компании</li>
        <li>«ЧИП и ДИП» сегодня</li>
        <li>28 лет в сфере e-com</li>
        <li>Контактная информация</li>
        <li>Реквизиты АО «ЧИП и ДИП»</li>
        <li>Дистрибьюция</li>
        <li>Планируете стать поставщиком?</li>
        <li>Работа в «ЧИП и ДИП»</li>
        <li>Политика конфиденциальности</li>
        <li>Пользовательское Соглашение</li>
    </ul>
</div>
 </div>




<div className={s.chpidip}>
    <h3>ТРЕБОВАНИЯ К ПОСТАВЩИКУ «ЧИП И ДИП»</h3>

    <ul>
        <li>Юридическое лицо или ИП</li>
        <li>Финансовая прозрачность</li>
        <li>Работа с ЭДО: Электронный Документооборот</li>
        <li>Наличие контента: фото, описание, сертификаты, инструкции и т.п.</li>
        <li>Обмен данными по интерфейсу API или файл .xml</li>
        <li>Актуальные складские запасы: обновление не реже 1 раза в сутки</li>
        <li>Комплектация и отгрузка в течение 1 дня</li>
        <li>Гибкая работа с рекламациями</li>
        <li>Доставка до склада «ЧИП и ДИП» за счет поставщика</li>
    </ul>

    <p className={s.past}>Чтобы стать поставщиком «ЧИП и ДИП» необходимо заполнить заявку на сотрудничество.</p>
    <button>Оставить заявку</button><br />
<div className={s.ifr}>
<iframe className={s.iframe1} width="560" height="315" src="https://www.youtube-nocookie.com/embed/nPoXZl29TwA?si=YC-jWC8MGYwKe0_N&amp;start=4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>
</div>
<Footer_1/>
        </div>
    </div>
  )
}
