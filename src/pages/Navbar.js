import React, { useEffect, useState } from 'react'
import s from "../styles/Navbar.module.css"
import Image from 'next/image'
import { IoCartOutline } from "react-icons/io5";
import { CgMenuGridR } from "react-icons/cg";
import { FaRegUserCircle } from "react-icons/fa";
import { LiaSearchSolid } from "react-icons/lia";
import { MdArrowForwardIos } from "react-icons/md";
import { BsFillBoxSeamFill } from "react-icons/bs";
import { HiOutlineClipboardDocumentList } from "react-icons/hi2";
import img1 from "../images/logo1.png"

import { IoLocationSharp } from "react-icons/io5";
export default function Navbar() {
  const [showNavbar, setShowNavbar] = useState(true);
 

  useEffect(() => {
    const handleScroll = () => {
      if (window.pageYOffset >= 100) {
        setShowNavbar(false);
      } else {
        setShowNavbar(true);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  return (
    <>
<div className={s.navbar}>
    <span className={s.border}>+7 495 544-00-08</span>
    <div  className={s.chipdip}>
<span>CHIPDIP организациям</span>
    </div>
</div>
<div className={s.status}>
  {!showNavbar?(<><div id={s.search1} className={s.search}>
<div onMouseLeave={()=>{
  document.querySelector("#menu").style="display:none"

}} onClick={()=>{
  document.querySelector("#menu").style="display:block"
}} className={s.red}>
<CgMenuGridR style={{fontSize:'30px'}} />
<span>Каталог товаров</span>

<div id='menu' className={s.catalog_menu}>
  <div className={s.catalog_toolbar}>
   <div className={s.bigac}>
   <div className={s.accor}>
      <div  onMouseEnter={()=>{
        document.querySelector("#nom").style='display:grid'
      }} className={s.accordf}>
        <h3>Электронные компоненты</h3>
        <MdArrowForwardIos className={s.forward} />
      </div>

      <div  onMouseEnter={()=>{
        document.querySelector("#nom").style='display:grid'
      }} className={s.accordf}>
        <h3>Электронные компоненты</h3>
        <MdArrowForwardIos className={s.forward} />
      </div>
      <div  onMouseEnter={()=>{
        document.querySelector("#nom").style='display:grid'
      }} className={s.accordf}>
        <h3>Электронные компоненты</h3>
        <MdArrowForwardIos className={s.forward} />
      </div>
      <div  onMouseEnter={()=>{
        document.querySelector("#nom").style='display:grid'
      }} className={s.accordf}>
        <h3 >Электронные компоненты</h3>
        <MdArrowForwardIos className={s.forward} />
      </div>
      <div  onMouseEnter={()=>{
        document.querySelector("#nom").style='opacity:1;'
      }} className={s.accordf}>
        <h3>Электронные компоненты</h3>
        <MdArrowForwardIos className={s.forward} />
      </div>
    </div>
   </div>
   <div className={s.yoq}>
   <div id='nom' className={s.sub_category }>
      <div  onMouseLeave={()=>{
        document.querySelector("#nom").style='opacity:0;'

}} className={s.modul}>
        <ul>
          <li >Промышленные разъёмы круглые <sub>91302</sub></li>
          <li>Промышленные разъёмы круглые <sub>91302</sub></li>
          <li>Промышленные разъёмы круглые <sub>91302</sub></li>
          <li>Промышленные разъёмы круглые <sub>91302</sub></li>
          <li>Промышленные разъёмы круглые <sub>91302</sub></li>
          <li>Промышленные разъёмы круглые <sub>91302</sub></li>
          <li>Промышленные разъёмы круглые <sub>91302</sub></li>
          <li>Промышленные разъёмы круглые <sub>91302</sub></li>
          <li>Промышленные разъёмы круглые <sub>91302</sub></li>
        
        </ul>
      </div>
    </div>
   </div>
  </div>
</div>


</div>
<div className={s.search_inp}>
<LiaSearchSolid style={{marginLeft:'20px',color:'red',fontSize:'20px'}} />
    <input  type="text" placeholder='Поиск среди 8 637 350 компонентов, электроники, приборов, электрики, автозапчастей, инструментов, сантехники…' />
</div>
</div></>):(<div className={s.logo}>
<div onClick={()=>window.location="/"} className={s.img_logo}>
<Image  src={img1} alt="" />
</div>
<div className={s.loc}>
<IoLocationSharp style={{marginTop:'5px'}} />
        <p><strong>Узбекистан</strong> <br /> Магазины и оптовые отделы</p>
</div>
</div>)}

<div className={s.kirish}>
<div className={s.order}>
<FaRegUserCircle style={{fontSize:'30px'}}  /><br />
<span>Вход</span>
</div>
<div className={s.order}>
<BsFillBoxSeamFill style={{fontSize:'30px'}} /><br />
<span>Статус заказа</span>
</div>
<div className={s.order}>
<HiOutlineClipboardDocumentList style={{fontSize:'30px'}} /><br />
<span>BOM</span>
</div>
<div onClick={()=>window.location="/cart_empty"} className={s.order}>
<IoCartOutline style={{fontSize:'30px'}} /><sup>1</sup><br />

<span>Корзина</span>
</div>
</div>
</div>
<div   className={s.search}>
<div  onClick={()=>{
  document.querySelector("#nom1").style="opacity:0"
  document.querySelector("#menu1").style="display:block"
}} className={s.red}>
<CgMenuGridR style={{fontSize:'30px'}} />
<span>Каталог товаров</span>
</div>
<div className={s.search_inp}>
<LiaSearchSolid style={{marginLeft:'20px',color:'red',fontSize:'20px'}} />
    <input type="text" placeholder='Поиск среди 8 637 350 компонентов, электроники, приборов, электрики, автозапчастей, инструментов, сантехники…' />
</div>
<div id='menu1'  onMouseLeave={()=>{
  document.querySelector("#menu1").style="display:none"
}} className={s.catalog_menu}>
  <div className={s.catalog_toolbar}>
   <div className={s.bigac}>
   <div className={s.accor}>
      <div  onMouseEnter={()=>{
        document.querySelector("#nom1").style='display:grid'
      }} className={s.accordf}>
        <h3>Электронные компоненты</h3>
        <MdArrowForwardIos className={s.forward} />
      </div>

      <div  onMouseEnter={()=>{
        document.querySelector("#nom1").style='display:grid'
      }} className={s.accordf}>
        <h3>Электронные компоненты</h3>
        <MdArrowForwardIos className={s.forward} />
      </div>
      <div  onMouseEnter={()=>{
        document.querySelector("#nom1").style='display:grid'
      }} className={s.accordf}>
        <h3>Электронные компоненты</h3>
        <MdArrowForwardIos className={s.forward} />
      </div>
      <div  onMouseEnter={()=>{
        document.querySelector("#nom1").style='display:grid'
      }} className={s.accordf}>
        <h3 >Электронные компоненты</h3>
        <MdArrowForwardIos className={s.forward} />
      </div>
      <div  onMouseEnter={()=>{
        document.querySelector("#nom1").style='display:grid'
      }} className={s.accordf}>
        <h3>Электронные компоненты</h3>
        <MdArrowForwardIos className={s.forward} />
      </div>
    </div>
   </div>
   <div className={s.yoq}>
   <div id='nom1' className={s.sub_category }>
      <div  onMouseLeave={()=>{
        document.querySelector("#nom1").style='opacity:0;'

}} className={s.modul}>
        <ul>
          <li >Промышленные разъёмы круглые <sub>91302</sub></li>
          <li>Промышленные разъёмы круглые <sub>91302</sub></li>
          <li>Промышленные разъёмы круглые <sub>91302</sub></li>
          <li>Промышленные разъёмы круглые <sub>91302</sub></li>
          <li>Промышленные разъёмы круглые <sub>91302</sub></li>
          <li>Промышленные разъёмы круглые <sub>91302</sub></li>
          <li>Промышленные разъёмы круглые <sub>91302</sub></li>
          <li>Промышленные разъёмы круглые <sub>91302</sub></li>
          <li>Промышленные разъёмы круглые <sub>91302</sub></li>
        
        </ul>
      </div>
    </div>
   </div>
  </div>
</div>
</div>

    </>
  )
}
