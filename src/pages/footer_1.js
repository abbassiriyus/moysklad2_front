import React from 'react'
import Image from 'next/image'
import img1 from "../images/robot1.png"
import { FaApple } from "react-icons/fa";
import s from "../styles/footer_1.module.css"
export default function footer_1() {
  return (
    <div>
<div className={s.footer}>
  <div className={s.footer_text}>
    <h4><strong>«ЧИП и ДИП»</strong> — уникальный и самый узнаваемый бренд на рынке микроэлектроники.
Мы поставляем электронные компоненты, измерительные приборы, паяльное оборудование, инструменты, компоненты Arduino, электротехнические изделия, комплектующие для бытовой электроники и многое другое.</h4>
<p>Обширный, регулярно обновляемый, каталог включает более 7 000 000 наименований товаров. Интеллектуальный и удобный поиск товаров, различные виды доставки и способы оплаты. Актуальная информация о наличии товаров и сроках поставки.

</p>
<p>Мы доставляем заказы во все регионы России, в Беларусь, Казахстан, Армению и Киргизию.</p>
  </div>
  <div className={s.footer_robo}>
<Image src={img1} alt="" />
  </div>
</div>
<div className={s.footer1}>
  <ul className={s.black1}>
    <li>Магазины и оптовые отделы</li>
    <li>Видео</li>
    <li>Новости</li>
    <li>Каталог брендов</li>
    <li>Каталоги автозапчастей</li>
    <li>Акции и спецпредложения</li>
    <li>Калькуляторы</li>
    <li>Обратная связь</li>
  </ul>
  <ul className={s.ulh4}>
    <h4>О компании</h4>
    <li>История компании</li>
    <li>«ЧИП и ДИП» сегодня</li>
    <li>28 лет в сфере e-com</li>
    <li>Контактная информация</li>
    <li>Реквизиты АО «ЧИП и ДИП»</li>
    <li>Дистрибьюция</li>
    <li>Планируете стать поставщиком?</li>
    <li>Работа в «ЧИП и ДИП»</li>
  </ul>
  <ul className={s.ulh4}>
    <h4 >Как купить?</h4>
    <li>Как сделать заказ</li>
    <li>Способы доставки</li>
    <li>Способы оплаты</li>
    <li>Состояние заказа</li>
    <li>Редактирование заказа</li>
    <li>Возврат и обмен товара</li>
    <li>Для юридических лиц</li>
  </ul>

  <ul className={s.ulh4}>
    <h3 style={{fontSize:'25px',fontWeight:900}}>+7 495 544-00-08</h3>
    <h4 style={{fontSize:'17px'}}>e-mail: sales@chipdip.ru</h4>
    <p style={{marginTop:'40px',marginBottom:'10px'}}>Скачайте мобильное приложение</p>
    <div className={s.app}>
   <img src="https://static.chipdip.ru/images/layout/apps/appstore.svg" alt="" />
    </div>
    <div className={s.app}>
   <img src="	https://static.chipdip.ru/images/layout/apps/googleplay.svg" alt="" />
      {/* <div className={s.app1}>
        <p>Загрузите в</p>  <span>APP Store</span>
  
      </div> */}
    </div>
    <div className={s.app}>
   <img src="	https://static.chipdip.ru/images/layout/apps/appgallery.svg" alt="" />
    </div>
  </ul>
</div>
    </div>
  )
}
