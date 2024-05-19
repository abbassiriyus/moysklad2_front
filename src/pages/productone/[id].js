import React, { useEffect, useState } from 'react'
import Navbar from '../Navbar'
import Footer_1 from '../footer_1'
import { IoIosArrowForward } from "react-icons/io";
import { FaCheck } from "react-icons/fa6";
// import { FaArrowUpFromBracket } from "react-icons/fa6";

import s from "../../styles/group.module.css"
import { useRouter } from 'next/router';
import axios from 'axios';
import url from "../host.js"
export default function group() {
  var [count,setCount]=useState(1)
    var router=useRouter()
var [data,setData]=useState({})
var [dr_data,setDrdata]=useState([])
var [buy,setBuy]=useState([])
function getData(params) {
    axios.get(`${url()}/api/oneproduct/${params}`).then(res=>{
        console.log(res.data);
setData(res.data)
    })    
    }
function buyOne() {
  var data_test=[...buy]
  var buy_one={
    id:data.id,
    image:data.images.rows.length>0?data.images.rows[0].miniature.downloadHref:'',
    name:data.name,
    code:data.code,
    count:count,
    price:data.minPrice.value/100
  }
  var push=true
for (let i = 0; i < data_test.length; i++) {
if(data_test[i].id==data.id){
push=false
data_test[i].count=data_test[i].count+count
}
}
if(push){
data_test.push(buy_one)
}
setBuy(data_test)
localStorage.setItem('buy',JSON.stringify(data_test))
}

    function getbestSeller(id) {
  axios.get(`${url()}/api/category/product/${id}?limit=5`).then(res=>{
        res.data.sort((a, b) => {
          const timestampA = new Date(a.updated);
          const timestampB = new Date(b.updated);
          return timestampB - timestampA;
        });
        // console.log(res.data);
        setDrdata(res.data)
        // setBestSeller(res.data)
      }).catch(err=>{
    console.log(err);
      }) }



useEffect(()=>{
  var a=localStorage.getItem('buy')?JSON.parse(localStorage.getItem('buy')):[]
  setBuy(a)      
  if(router.query.id){
          getData(router.query.id)
          getbestSeller(router.query.dr)
          console.log(router.query);
        }
      },[router])

  return (
    <div>
        <div className={s.body}>
            <Navbar/>
        <div className={s.texnika}>
          
        </div>
      

            <div className={s.prip}>
            <h1>{data.name}</h1>
            {/* <FaArrowUpFromBracket  style={{fontSize:'25px'}} /> */}
            </div>

            <div className={s.dobkar}>
                <div className={s.img_text}>
                 <div className={s.doc_img}>
                <div className={s.imgkar} style={{background:`url(${data.images && data.images.rows.length>0 && data.images.rows[0].miniature.downloadHref })`,backgroundSize:'cover'}} >

</div>
<p>Rasmlar faqat ma'lumot uchun,
texnik hujjatlarga qarang</p>
                 </div>

                    <div className={s.textkar}>

                    <h3>Tavsif</h3>
                    <span>{data.description}</span><br />
       <h1>{ data.minPrice && data.minPrice.value/100} so`m
</h1> 
<div className={s.btn1}>
    <div className={s.buttons}>
        <button style={{borderTopLeftRadius:'3px'}} onClick={()=>{if(count>1){setCount(count-1)}}} >-</button>
        <span>{count}</span>
        <button onClick={()=>setCount(count+1)} >+</button>
    </div>
</div>
<p style={{marginBottom:'20px'}}>Добавить Sotib olish {count} шт. на сумму { data.minPrice && (data.minPrice.value/100)*count}  so`m
</p>
<button className={s.red1} onClick={()=>{buyOne()}}>Добавить Sotib olish</button>
                       
                    </div>
                </div>




                <div className={s.number}>
                    <span>Номенклатурный номер:

                        <p>{data.code}</p>
                    </span>

                    <span>Категории: <p>
                      {data.pathName}
                      </p></span>

                    <span>Бренд: <p>Россия</p></span>
                </div>
            </div>
            <hr  className={s.hrr}/>
<h2>С этим товаром покупают</h2>
            <div className={s.cards2}>
              {dr_data.map((item,key)=>{
              return   <div onClick={()=>window.location=`/productone/${item.id}?dr=${item.productFolder.meta.href.slice(-36)}`}  className={s.card1}>
   <img src={item.images.rows[0].miniature.downloadHref} alt="" />

    <div className={s.card1_body}>
      <h5>{item.pathName}</h5>
      <a href={`/productone/${item.id}?dr=${item.productFolder.meta.href.slice(-36)}`}><span>{item.name}</span></a>
      <p>{item.buyPrice.value/100} so`m</p>
    </div>
  </div>
              })}
 


</div>

<Footer_1/>
        </div>
    </div>
  )
}
