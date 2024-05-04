import React, { useEffect, useState } from 'react'
import s from "../../styles/catalog.module.css"
import { IoIosArrowForward } from "react-icons/io";
import { FaPlus } from "react-icons/fa6";
import { IoIosArrowUp } from "react-icons/io";
import { IoIosArrowDown } from "react-icons/io";
import { MdArrowForwardIos } from "react-icons/md";
import { FaCheck } from "react-icons/fa6";
import { GrSort } from "react-icons/gr";
import Navbar from '../Navbar';
import { AiOutlineAppstore } from "react-icons/ai";
import { CiSaveUp2 } from "react-icons/ci";
import Footer_1 from '../footer_1';
import { IoClose } from "react-icons/io5";
import { useRouter } from 'next/router';
import axios from 'axios';
import url from '../host.js'
export default function catalog() {
  var [category,setCategory]=useState([])
  var [allSubcategory,setAllSubCategory]=useState([])
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
  useEffect(()=>{
    getCategory()
    setModalPage(true)
  },[])
  var [title,setTitle]=useState('')

var router=useRouter()

var [pageCount,setPageCount]=useState([])
var [stansiya,setStansiya]=useState([])
var [page_select,setPageSelect]=useState(1)
var [card,setCard]=useState([])
function getProduct(categoryid) {
  var searchdata=""
  if(categoryid==1){
    axios.get(`${url()}/api/product?limit=20`).then(res=>{
      res.data.sort((a, b) => {
        const timestampA = new Date(a.updated);
        const timestampB = new Date(b.updated);
        return timestampB - timestampA;
      });
      for (let i = 0; i < res.data.length; i++) {
        res.data[i].count=1
        }
      setCard(res.data)
      setPageCount(res.data.length)
    }).catch(err=>{
  console.log(err);
    })
  }else{
axios.get(`${url()}/api/category/product/${categoryid}?limit=20&offset=${(page_select-1)*20}&search=${searchdata}`).then(res=>{

axios.get(`${url()}/api/category/count/${categoryid}`).then(res=>{
var r=[]
setPageCount(res.data.count)
console.log(res.data.count/20);
 for (let i = 0; i < (res.data.count/20); i++) {
  r.push(i+1)
 } 
 setStansiya(r)

})

for (let i = 0; i < res.data.length; i++) {
res.data[i].count=1
}
if(res.data.length==0){
  setCard([]) 

}else{
 setCard(res.data) 
}

  })
  }


}
var [buy,setBuy]=useState([])
      useEffect(()=>{
        var a=localStorage.getItem('buy')?JSON.parse(localStorage.getItem('buy')):[]
        setBuy(a)
if (router.query.id) {
  setTitle(router.query.title)
  getProduct(router.query.id) 
}
      },[router])
   function buyOne(item) {
        var data_test=[...buy]
        var buy_one={
          id:item.id,
          image:item.images.rows.length>0?item.images.rows[0].miniature.downloadHref:'',
          name:item.name,
          code:item.code,
          count:item.count,
          price:item.minPrice.value/100
        }
        var push=true
      for (let i = 0; i < data_test.length; i++) {
      if(data_test[i].id==item.id){
      push=false
      data_test[i].count=data_test[i].count+item.count
      }
      }
      if(push){
      data_test.push(buy_one)
      }
      setBuy(data_test)
      localStorage.setItem('buy',JSON.stringify(data_test))
      }
function minusCount(key) {
  var d=[...card]
if(d[key].count>2){
   d[key].count--
}
  setCard(d)
}
function plusCount(key) {
  var d=[...card]
  d[key].count++
  setCard(d)
}
var [modalPage,setModalPage]=useState(false)

  return (
    <div>
        <div className={s.body}>
            <Navbar/>
<div className={s.page_road}>
  <span onClick={()=>{window.location="/"}} >Главная</span>
<IoIosArrowForward/>

  <span style={{color:'grey'}}>{title}</span>
</div>
<div className={s.prip}>
    <h1>{title} <sub> {pageCount}</sub></h1>

    <div className={s.se}>
    {card.length>0?(<>    <AiOutlineAppstore id='apps' onClick={()=>{
       document.querySelector("#ss").style='display:block'
       document.querySelector('#apps').style='display:none'
      document.querySelector("#sort2").style='display:none'
      document.querySelector("#sort1").style='display:block'
    }} />
   <GrSort id='ss' onClick={()=>{
       document.querySelector("#sort2").style='display:block'
       document.querySelector("#sort1").style='display:none'
       document.querySelector("#apps").style='display:block'
       document.querySelector("#ss").style='display:none'

    }} className={s.grsort}/></>):(<></>)}

    <CiSaveUp2 onClick={()=>setModalPage(!modalPage)} />
    </div>
</div>


<div style={modalPage?{display:'grid',gridTemplateColumns:window.innerWidth <= 991 ? 'auto' : '250px auto'}:{display:'grid',gridTemplateColumns:'auto'}} className={s.display_grid}>
    <div style={modalPage?{display:"block"}:{display:'none'}} className={s.summary1}>
      {category.map((item,key)=>{
        if(item.big){
   return <details style={{cursor:'pointer'}} className={s.detail1}>
  <summary className={s.sum}>{item.category_title}</summary>
  <hr  style={{color:'grey'}}/>
  {allSubcategory.map((sitem,skey)=>{
    if(item.id==sitem.subcategory){
    return  <div className={s.inp_sub}>
    <span style={{cursor:'pointer'}} onClick={()=>{window.location=`/catalog/${sitem.category_id}?title=${sitem.category_title}`}}>{sitem.category_title}</span>
  </div>
    }

  })}
  

  
</details>
        }else{
return <button onClick={()=>{window.location=`/catalog/${item.category_id}?title=${item.category_title}`}} className={s.detail1} style={{width:'100%',paddingTop:'10px',paddingBottom:'10px',textAlign:'left',paddingLeft:'20px',fontSize:'16px',fontWeight:700,cursor:'pointer'}} > <span >{item.category_title}</span></button>
        }
      })}
  




    </div>
    {card.length==0?(<img style={{width:'80%',marginLeft:'10%'}} src='https://eonbazar.com/images/npf.jpg' alt='' /> ):(<div className={s.kraftdg}>
<div id='sort2' className={s.big}>
<div className={s.kraft}>
      {card.map((item,key)=>{
        return <div className={s.dekraft}>
            <div className={s.img_kraft}>
          <img src={item.images.rows[0].miniature.downloadHref} alt="" />             
            </div>
            <div className={s.body_kraft}>
                <h5>{item.pathName}</h5>
                <div style={{height:"60px"}}>
                <a href={`/productone/${item.id}?dr=${item.productFolder.meta.href.slice(-36)}`} >{item.name}</a></div>
                <div className={s.check_pl}>
                </div>
                <h3>{item.buyPrice.value/100} руб.</h3>
                <div className={s.button_pm}>
                    <div className={s.pm}>
                        <button onClick={()=>{minusCount(key)}}>-</button>
                        <span>{item.count}</span>
                        <button onClick={()=>{plusCount(key)}}> +</button>
                    </div>
                    <button className={s.redbtn} onClick={()=>{buyOne(item)}} >В корзину</button>
                </div>
            </div>
        </div>
      })} 
    </div>
</div>

<div id='sort1' className={s.change}>

  {card.map((item,key)=>{
   return <div className={s.pad}>
<div className={s.smart}>
    <div className={s.smarttext}>
      <a href="">{item.name}</a>
   
    <p><span>Бренд:</span>{item.pathName}</p>
    <p><span>Номенклатурный номер:</span>{item.code}</p>
    
    </div>
<img src={item.images.rows[0].miniature.downloadHref} alt="" />
<div><h4>{item.buyPrice.value/100} руб. </h4></div>
<div className={s.price}>
<div className={s.butn}>
  
  <div className={s.btn2}>
    <button onClick={()=>{minusCount(key)}}>-</button>
    <span>{item.count}</span>
    <button onClick={()=>{plusCount(key)}}>+</button>
  </div>
  <button className={s.red} onClick={()=>{buyOne(item)}}>В корзине</button>
</div>
<p>от {item.count} шт. — {(item.buyPrice.value/100)*item.count} руб.</p>
</div>
  </div>

</div>
  })}


</div>


<div className={s.page}>
  {stansiya.length>=2?(
    <div className={s.p_num}>
        <h5>Страница</h5>
        <div className={s.num1}>
      {stansiya.map((item,key)=>{
        return <div onClick={()=>{setPageSelect(item);window.location="#";setTimeout(()=>{
          getProduct(router.query.id)
        }),1000}} style={page_select==item?{cursor:'pointer',border:'1px solid grey'}:{cursor:'pointer',border:'1px solid white'}} className={s.number}>
            <span>{item}</span>
        </div>
      })}  

        <div onClick={()=>{if(page_select<stansiya.length){setPageSelect(page_select+1)}}} style={{cursor:'pointer',border:'1px solid white'}}  className={s.number}>
        <MdArrowForwardIos  className={s.rarrow} />
        </div>
        </div>
    </div>):(<></>)}

    
</div>
</div>)}

</div>



<div style={{height:'30px'}}></div>
<Footer_1/>
        </div>
    </div>
  )
}
