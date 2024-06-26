import React, { useEffect, useState } from 'react'
import Navbar from '../Navbar'
import Footer from '../footer'
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
            <span>Bosh sahifa</span><IoIosArrowForward />
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
<h3>Tavsiya qilamiz</h3>

<div className={s.cards2}>
  {drData.map((item,key)=>{
    if(key<10){
        return    <div onClick={()=>window.location=`/productone/${item.id}?dr=${item.productFolder.meta.href.slice(-36)}`}  className={s.card1}>
   <img  src={item.images.rows.length>0 && item.images.rows[0].miniature.downloadHref} alt="" />

    <div className={s.card1_body}>
      <h5>{item.pathName}</h5>
      <a href={`/productone/${item.id}?dr=${item.productFolder.meta.href.slice(-36)}`}><span>{item.name}</span></a>
      <p>{item.minPrice.value/100} so`m.</p>
    </div>
  </div>
    }

  })}




</div>


<Footer/>
     </div>
    </div>
  )
}
