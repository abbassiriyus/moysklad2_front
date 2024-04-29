import React, { useEffect, useState } from 'react'
import Navbar from '../Navbar'
import Footer_1 from '../footer_1'
import s from "../../styles/popular.module.css"
import { IoIosArrowForward } from "react-icons/io";
import { IoIosArrowUp } from "react-icons/io";
import { IoIosArrowDown } from "react-icons/io";
import { FaArrowUpFromBracket } from "react-icons/fa6";
import { useRouter } from 'next/router';
import url from "../host.js"
import axios from 'axios';
export default function popular() {
var router=useRouter()
var [title,setTitle]=useState("")
var [category,setCategory]=useState([])
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
  var [drData,setDrdata]=useState([])
function getCategory(id) {
axios.get(`${url()}/api/category`).then(res=>{
for (let i = 0; i < res.data.length; i++) {
if(id==res.data[i].id){
axios.get(`${url()}/api/category/product/${res.data[0].category_id}?limit=${id}`).then(res=>{
  setDrdata(res.data)
})
}}
  setCategory(res.data.filter(item=>(item.subcategory==id)))


}).catch(err=>{

})}
  useEffect(()=>{
    if(router.query.id){
      setTitle(router.query.title)
      getCategory(router.query.id)
    }

  },[router])
  return (
    <div>
     <div className={s.body}>
     <Navbar/>
        <div className={s.page_road}>
            <span>Главная</span><IoIosArrowForward />
            <span>Блоки и элементы питания</span><IoIosArrowForward />
            <span style={{color:'grey'}}>Аккумуляторы</span>
            </div>
            <div className={s.sub}>
                <h1>{title} </h1>
            </div>
      
         <div className={s.aksessuar}>
            {category.map(item=>{
          return  <div onClick={()=>window.location="/kraft/"} className={s.akses1}>
                <img src={item.image} alt="" />
                <a href="/kraft/"><span>	{item.category_title} </span></a>
                </div> 
            })}  
            </div>
         

         <div id='accor1' className={s.accor}>
            <p><strong>Аккумуляторы</strong> представляют собой источники постоянного тока, отличительной особенностью которых является возможность многократной перезарядки. Материал электродов и тип используемого электролита определяет область применения и характеристики аккумулятора. <br /><br />

Свинцовые аккумуляторы используются в источниках бесперебойного питания, охранных и пожарных системах, системах аварийного освещения и оповещения. Они изготавливаются в герметичном корпусе, что обеспечивает эффективную и безопасную работу батарей. Это оптимальный выбор для больших и мощных источников питания. Свинцовые аккумуляторы чувствительны к отрицательным температурам, не могут храниться в разряженном состоянии, к ним неприемлем режим быстрого заряда (обычное время — от 8 до 16 ч). <br /><br />

Никель-кадмиевые ( NiCd ) и Никель-металл-гидридные ( NiMH ) аккумуляторы широко применяются в качестве замены стандартных элементов питания (батареек), в мобильных телефонах, портативных компьютерах.
<br /><br />
Главным недостатком никелевых аккумуляторов является эффект памяти: если заряд аккумулятора осуществляется при его неполной разрядке, происходит уменьшение емкости. NiCd аккумуляторы выдерживают большое число циклов зарядки/разрядки, имеют длительный срок хранения, могут эксплуатироваться при отрицательных температурах. NiMH аккумуляторы по сравнению с NiCd в меньшей степени подвержены эффекту памяти, менее токсичны, но имеют относительно ограниченный срок службы (около 500 циклов зарядки/разрядки).
<br /><br />
Литиевые аккумуляторы считаются наиболее эффективными. Они широко используются в малогабаритной мобильной аппаратуре. Литиевые аккумуляторы не подвержены эффекту памяти, хорошо выдерживают отрицательные температуры, слабо разряжаются при длительном хранении, но имеют относительно высокую цену.
<br /><br />
Основными поставщиками являются: <strong>APC, CSB Battery, Delta Battery, Leoch, GP Batteries, Varta, Camelion</strong>.
<br /><br />
Посмотреть и купить товар вы можете в наших магазинах в городах: Москва, Санкт-Петербург, Архангельск, Астрахань, Барнаул, Брянск, Владимир, Волгоград, Вологда, Воронеж, Екатеринбург, Иваново, Ижевск, Иркутск, Йошкар‑Ола, Казань, Калуга, Кемерово, Киров, Кострома, Краснодар, Красноярск, Курган, Курск, Липецк, Набережные Челны, Нижний Новгород, Новосибирск, Омск, Орёл, Оренбург, Пенза, Пермь, Псков, Ростов-на-Дону, Рязань, Самара, Саранск, Саратов, Смоленск, Ставрополь, Сургут, Тамбов, Тверь, Томск, Тула, Тюмень, Ульяновск, Уфа, Хабаровск, Чебоксары, Челябинск, Ярославль. <br /><br />
Доставка в пункты выдачи заказов Яндекс Доставка, СДЭК, Л-Пост, Boxberry, 5Post, транспортными компаниями DPD и «Деловые Линии», а также Почтой России в Тольятти, Владивосток, Махачкала, Новокузнецк, Калининград, Улан-Удэ, Сочи, Нижний Тагил, Чита, Владикавказ, Грозный, Мурманск, Петрозаводск, Нижневартовск, Новороссийск и еще в более чем 1000 городов и населенных пунктов по всей России.
<br />Товары из группы «Аккумуляторы» вы можете купить оптом и в розницу.</p>

         </div>
         <div id='hide0' className={s.line}></div>
<div className={s.hide}>
    <span id='span2' onClick={()=> closemodal()} className={s.span1}>скрыть текст<IoIosArrowUp  /></span>
    <span id='span3' onClick={()=> openmodal()} className={s.span0}>показать весь текст<IoIosArrowDown  /></span>
</div>

<hr  className={s.hrr}/>
<h3>Мы рекомендуем</h3>

<div className={s.cards2}>
  {drData.map((item,key)=>{
    if(key<10){
        return    <div onClick={()=>window.location=`/productone/${item.id}?dr=${item.productFolder.meta.href.slice(-36)}`}  className={s.card1}>
   <img style={{height:'150px',width:'auto',margin:"auto"}} src={item.images.rows.length>0 && item.images.rows[0].miniature.downloadHref} alt="" />

    <div className={s.card1_body}>
      <h5>{item.pathName}</h5>
      <a href=""><span>{item.name}</span></a>
      <p>{item.minPrice.value/100} руб.</p>
    </div>
  </div>
    }

  })}



</div>

{/* <hr  className={s.hrr}/>
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
</div> */}
<Footer_1/>
     </div>
    </div>
  )
}
