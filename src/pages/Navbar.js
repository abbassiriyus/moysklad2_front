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
// import GlobalStore from './GlobalStore';
import { IoLocationSharp } from "react-icons/io5";
import axios from 'axios';
import url from "./host.js"
export default function Navbar() {
  const [showNavbar, setShowNavbar] = useState(true);
  var [category,setCategory]=useState([])
  var [allSubcategory,setAllSubCategory]=useState([])
  var [company,setCompany]=useState([{}])
var [subId,setSubId]=useState(0)
function getCategory() {
  axios.get(`${url()}/api/category`).then(res=>{
    var a=[]
    var b=[]
    for (let i = 0; i < res.data.length; i++) {
      if(res.data[i].subcategory==0){
       a.push(res.data[i])
      }else{
        b.push(res.data[i])
      }
    }
    for (let i = 0; i < a.length; i++) {
      a[i].big=false
     for (let j = 0; j < b.length; j++) {
  if(a[i].id==b[j].subcategory){
    a[i].big=true
  }
     }
    }
  
setAllSubCategory(b)
setCategory(a)
  }).catch(err=>{

  })
}
function getCompany1(){
  axios.get(`${url()}/api/company`).then(res=>{
    console.log(res.data);
    if(res.data.length>0){
      setCompany(res.data)
    }
  })
}
var [count,setCount]=useState(0)
 
useEffect(()=>{
  if(localStorage.getItem('buy')){
     setCount((JSON.parse(localStorage.getItem('buy'))).length)
  }
 
})

  useEffect(() => {
    getCategory() 
    getCompany1()
    const handleScroll = () => {
      if (window.pageYOffset >= 130) {
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
    <a style={{textDecoration:'none',color:'black'}} href={`tel:+${company[0].phone}`} className={s.border}>+{company[0].phone}</a>
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
    {category.map((item,key)=>{
      if(item.big){
          return <div style={{cursor:'pointer'}}  onClick={()=>{window.location=`/popular/${item.id}?title=${item.category_title}`}} onMouseEnter={()=>{
        document.querySelector("#nom").style='display:grid'; setSubId(item.id)
      }} className={s.accordf}>
        <h3 style={{textAlign:'left'}}>{item.category_title}</h3>
        <MdArrowForwardIos className={s.forward} />
      </div>
      }else{
        return <div onClick={()=>{window.location=`/catalog/${item.category_id}?title=${item.category_title}`}}  style={{cursor:'pointer'}}  onMouseEnter={()=>{
          document.querySelector("#nom").style='display:none'
        }}  className={s.accordf}>
          <h3 style={{textAlign:'left'}}>{item.category_title}</h3>
        </div>
      }
     

    })}
     
      
    </div>
   </div>
   <div className={s.yoq}>
   <div id='nom' className={s.sub_category }>
      <div  onMouseLeave={()=>{
        document.querySelector("#nom").style='opacity:0;'

}} className={s.modul}>
        <ul>
          {allSubcategory.map((item,key)=>{
            if(item.subcategory==subId){
               return  <li onClick={()=>{window.location=`/catalog/${item.category_id}?title=${item.category_title}`}}  style={{cursor:'pointer'}}  >{item.category_title}</li> 
            }
         
          })

          }
  
        </ul>
      </div>
    </div>
   </div>
  </div>
</div>


</div>
<div onMouseLeave={()=>{document.querySelector("#search_res").style="display:none"}} className={s.search_inp}>
<LiaSearchSolid style={{marginLeft:'20px',color:'red',fontSize:'20px'}} />
    <input onClick={()=>{document.querySelector("#search_res").style="display:block"}}  type="text" placeholder='Поиск среди 8 637 350 компонентов, электроники, приборов, электрики, автозапчастей, инструментов, сантехники…' />
<div id='search_res' className={s.search_result}>
  <h5>товарные группы</h5>
<ul>
  <li>Материалы для пайки</li>
  <li>Материалы для пайки</li>
  <li>Материалы для пайки</li>
</ul>
<h5>быстрый поиск</h5>
<ul className={s.product_search} >
<li><img src="https://static.chipdip.ru/lib/410/DOC036410923.jpg" style={{height:'30px'}} alt="" />ESP-PROG, Программатор/отладчик для беспроводных микросхем и модулей Espressif <h6>1000000000 rubl</h6></li>
  <li><img src="https://static.chipdip.ru/lib/410/DOC036410923.jpg" style={{height:'30px'}} alt="" /> Материалы для пайки <h6>1000 rubl</h6></li>
  <li><img src="https://static.chipdip.ru/lib/410/DOC036410923.jpg" style={{height:'30px'}} alt="" /> Материалы для пайки <h6>1000 rubl</h6></li></ul>
</div>
</div>
</div></>):(<div className={s.logo}>
<div onClick={()=>window.location="/"} className={s.img_logo}>
<img  src={company[0].image} alt="" />
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
{/* <div className={s.order}>
<BsFillBoxSeamFill style={{fontSize:'30px'}} /><br />
<span>Статус заказа</span>
</div>
<div className={s.order}>
<HiOutlineClipboardDocumentList style={{fontSize:'30px'}} /><br />
<span>BOM</span>
</div> */}
<div onClick={()=>window.location="/cart_empty"} className={s.order}>
<IoCartOutline style={{fontSize:'30px'}} /><sup>{count}</sup><br />

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
   {category.map((item,key)=>{
      if(item.big){
          return <div style={{cursor:'pointer'}}  onClick={()=>{window.location=`/popular/${item.id}?title=${item.category_title}`}} onMouseEnter={()=>{
        document.querySelector("#nom1").style='display:grid'; setSubId(item.id)
      }} className={s.accordf}>
        <h3 style={{textAlign:'left'}}>{item.category_title}</h3>
        <MdArrowForwardIos className={s.forward} />
      </div>
      }else{
        return <div onClick={()=>{window.location=`/catalog/${item.category_id}?title=${item.category_title}`}} style={{cursor:'pointer'}}  onMouseEnter={()=>{
          document.querySelector("#nom1").style='display:none'
        }}  className={s.accordf}>
          <h3 style={{textAlign:'left'}}>{item.category_title}</h3>
        </div>
      }
     

    })}
      
    </div>
   </div>
   <div className={s.yoq}>
   <div id='nom1' className={s.sub_category }>
      <div  onMouseLeave={()=>{
        document.querySelector("#nom1").style='opacity:0;'

}} className={s.modul}>
        <ul>
        {allSubcategory.map((item,key)=>{
            if(item.subcategory==subId){
               return  <li onClick={()=>{window.location=`/catalog/${item.category_id}?title=${item.category_title}`}}  style={{cursor:'pointer'}}  >{item.category_title}</li> 
            }
         
          })

          }
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
