import React, { useEffect, useState } from 'react'
import Navbar from '../Navbar'
import Footer_1 from '../footer_1'
import s from "../../styles/popular.module.css"
import { IoIosArrowForward } from "react-icons/io";
import { IoIosArrowUp } from "react-icons/io";
import { IoIosArrowDown } from "react-icons/io";
// import { FaArrowUpFromBracket } from "react-icons/fa6";
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
            <span style={{color:'grey'}}>{title} </span>
            </div>
            <div className={s.sub}>
                <h1>{title} </h1>
            </div>
      
         <div className={s.aksessuar}>
            {category.map(item=>{
          return  <div onClick={()=>window.location=`/catalog/${item.id}?title=${item.category_title}`} className={s.akses1}>
                <img src={item.image} alt="" />
                <a href={`/catalog/${item.id}?title=${item.category_title}`}><span>	{item.category_title} </span></a>
                </div> 
            })}  
            </div>
         

       
         {/* <div id='hide0' className={s.line}></div> */}


<hr  className={s.hrr}/>
<h3>Мы рекомендуем</h3>

<div className={s.cards2}>
  {drData.map((item,key)=>{
    if(key<10){
        return    <div onClick={()=>window.location=`/productone/${item.id}?dr=${item.productFolder.meta.href.slice(-36)}`}  className={s.card1}>
   <img style={{height:'150px',width:'auto',margin:"auto"}} src={item.images.rows.length>0 && item.images.rows[0].miniature.downloadHref} alt="" />

    <div className={s.card1_body}>
      <h5>{item.pathName}</h5>
      <a href={`/productone/${item.id}?dr=${item.productFolder.meta.href.slice(-36)}`}><span>{item.name}</span></a>
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
