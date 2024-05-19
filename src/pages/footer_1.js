import React, { useState } from 'react'
import Image from 'next/image'
import img1 from "../images/robot1.png"
import { FaApple } from "react-icons/fa";
import { RiVisaLine } from "react-icons/ri";
import s from "../styles/footer_1.module.css"
import { useEffect } from 'react';
import axios from 'axios';
import url from "./host.js"
export default function footer_1() {

  var [company,setCompany]=useState([{}])

  function getCompany1(){
    axios.get(`${url()}/api/company`).then(res=>{
      console.log(res.data);
      if(res.data.length>0){
        setCompany(res.data)
      }
    })
  }
  var [category,setCategory]=useState([])
  function getCategory() {
    axios.get(`${url()}/api/category`).then(res=>{
     setCategory(res.data)
    })
  }
  useEffect(()=>{
    getCompany1()
    getCategory()
  },[])
  return (
    <div>


<div className={s.footer1}>
  <ul className={s.black1}>
    <li onClick={()=>{window.location='/#xit'}}>Ko`p sotiladi</li>
    <li onClick={()=>{window.location='/#lut'}}>Eng yaxshilari</li>
    <li onClick={()=>{window.location='/#new1'}}>Eng yangilari</li>
    <li onClick={()=>{window.location='/#dic'}}>Xomiylarimiz</li>
    <li onClick={()=>{window.location=`/catalog/1?title=Eng yangilari`}}>Каталоги</li>
  </ul>
  <ul className={s.ulh4}>
  
    <h4>Maxsulot turlari</h4>
    {category.map((item,key)=>{
      if(key<5){
        return <li  onClick={() => { window.location = `/catalog/${item.category_id}?title=${item.category_title}` }}>{item.category_title}</li>
      }
     
    })}
  </ul>
  <ul className={s.ulh4}>
    <h4 >Bog`lanish</h4>
    <li onClick={()=>{window.location=company[0].telegram}}>Телеграмм</li>
    <li onClick={()=>{window.location=company[0].youtobe}}>YouTube</li>
    <li onClick={()=>{window.location=company[0].instagram}}>Instagram</li>
    <li onClick={()=>{window.location=company[0].facebook}}>Facebook</li>
  </ul>

  <ul className={s.ulh4}>
    <a style={{textDecoration:"none",color:'white'}} href={`tel:+${company[0].phone}`}><h3 style={{fontSize:'25px',fontWeight:900}}>+{company[0].phone}</h3></a>
    <h4 style={{fontSize:'17px'}}>e-mail: {company[0].email}</h4>
    <p style={{marginTop:'40px',marginBottom:'10px'}}>Mobil ilovani yuklab oling</p>
    <div className={s.app}>
   <img src="https://static.chipdip.ru/images/layout/apps/appstore.svg" alt="" />
    </div>
    <div className={s.app}>
   <img src="	https://static.chipdip.ru/images/layout/apps/googleplay.svg" alt="" />

    </div>

  </ul>
</div>
<div className={s.versiya_black}>
  <p>©2024, АО «RADIO CITY» — <br />Qurilmalar, radio komponentlar va elektron komponentlar</p>

  <div className={s.chipdip_mobil}>
    {/* <p>Мобильная версия</p> */}
<div className={s.sayt}>
      {/* <p>chipdip.by</p>
      <p>chipdip.kz</p>
      <p>chipdip.am</p> */}
</div>
  </div>
  <p className={s.pasga}>Maxfiylik siyosati <br />
Foydalanish shartlari</p>
<div className={s.big}>
<div className={s.appl}>
  <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/1e/Yandex-market.svg/1280px-Yandex-market.svg.png" alt="" />
</div>
<img className={s.img} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDs2ZG0yN1SXdnX_knP9h9xx2BK4aL__IaNNfFZm38&s" alt="" />
</div>
</div>
</div>
  )
}
