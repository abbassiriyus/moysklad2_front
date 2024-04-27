import React, { useEffect, useState } from 'react'
import s from "../styles/Home.module.css"
import Header_Carousel from "../pages/header_carousel"
import Footer_1 from './footer_1';
import Index_slider from './index_slider';
import Navbar from './Navbar';
import Image from 'next/image';
import url from "./host"
// import img from "../images/electromagenetic-relays.jpg"
import { BsController } from 'react-icons/bs';
import axios from 'axios';
export default function index() {
  var [data,setData]=useState([])
  var [bestSeller,setBestSeller]=useState([])
  var [topTovar,setTopTovar]=useState([])
  var [category,setCategory]=useState([])

function getData(id) {
  axios.get(`${url()}/api/product?limit=${id}`).then(res=>{
    res.data.sort((a, b) => {
      const timestampA = new Date(a.updated);
      const timestampB = new Date(b.updated);
      return timestampB - timestampA;
    });

    setData(res.data)
  }).catch(err=>{
console.log(err);
  })
}


var [category1,setCategory1]=useState([])
var [company,setCompany]=useState([{}])
var [shop,setShop]=useState([])
function getCompany1(){
  axios.get(`${url()}/api/company`).then(res=>{
    if(res.data.length>0){
      setCompany(res.data)
    }
  })
}

var [inp,setInp]=useState(null)
function set_data1(){
setInp(localStorage.getItem('search'))
}
  function getCategory1(){
    axios.get(`${url()}/api/category`).then(res=>{
  setCategory1(res.data)
    }).catch(err=>{
  console.log(err);
    })
  }


  useEffect(()=>{
getCategory1()
getCompany1()
set_data1()

  if(localStorage.getItem('buy')){
setShop(JSON.parse(localStorage.getItem('buy')))


}

  },[])
var[buy,setBuy]=useState([])
useEffect(()=>{
if(localStorage.getItem('buy')){
  setBuy(JSON.parse( localStorage.getItem('buy'))
)}
else{
  setBuy([])
}
},[])

function getbestSeller(id) {
  axios.get(`${url()}/api/best_seller`).then(res1=>{
    if(res1.data.length>0){
       axios.get(`${url()}/api/category/product/${res1.data[0].category_id}?limit=${id}`).then(res=>{
    res.data.sort((a, b) => {
      const timestampA = new Date(a.updated);
      const timestampB = new Date(b.updated);
      return timestampB - timestampA;
    });
    setBestSeller(res.data)
  }).catch(err=>{
console.log(err);
  }) 
    }
  })

}

function gettopTovar(id) {
  axios.get(`${url()}/api/top_tovar`).then(res1=>{
    if(res1.data.length>0){
       axios.get(`${url()}/api/category/product/${res1.data[0].category_id}?limit=${id}`).then(res=>{
    res.data.sort((a, b) => {
      const timestampA = new Date(a.updated);
      const timestampB = new Date(b.updated);
      return timestampB - timestampA;
    });
    setTopTovar(res.data)
  }).catch(err=>{
console.log(err);
  }) 
    }
  })

}
function getCategory(){
  axios.get(`${url()}/api/category`).then(res=>{
setCategory(res.data)
  }).catch(err=>{
console.log(err);
  })
}
function getImage() {
var url='https://api.moysklad.ru/api/remap/1.2/download/28674e35-8ba6-475a-bf4c-855581fc64c9'
  axios.get(url,{headers: {
    "Accept":'*/*',
    "User-Agent":'Thunder Client (https://www.thunderclient.com)',
    'Authorization':`Basic d2ViYWJiYXM5QGdtYWlsLmNvbTp0dHVzaDEyMzNhYQ==`,
    'Accept-Encoding':'gzip',
  }}).then(res=>{
console.log(res.data);
  }).catch(err=>{
console.log(err);
  })
}
var [carousel_image,setCarousel_image]=useState([{}])
function getCarousel() {
  axios.get(`${url()}/api/carousel`).then(res=>{
setCarousel_image(res.data)
setLoading(false)
  }).catch(err=>{

  })
}

var [header_top,setHeaderTop]=useState([])

function getCategory_top() {
  axios.get(`${url()}/api/header_category`).then(res=>{
setHeaderTop(res.data)
console.log(res.data);
  })
}

var [loading,setLoading]=useState(true)
useEffect(()=>{
  getCategory_top()
  getImage()
getData(5)
getCategory()
getCarousel()
getbestSeller(5)
gettopTovar(5)
},[])
  return (
    <div>
      <div className={s.body}>
        <Navbar/>
  
<Header_Carousel/>
     <div className={s.pair_big}>
     <div className={s.pair}>
      <h1>СТАТЬ ПАРТНЕРОМ</h1>
     </div>
     <div className={s.line}></div>
     <div className={s.added}>
      <h4>ПРИГЛАШАЕМ К СОТРУДНИЧЕСТВУ <br/>
ПРОИЗВОДИТЕЛЕЙ И ДИСТРИБЬЮТОРОВ
</h4>

     </div>
     <div className={s.button}>
<button onClick={()=>{}}> ПОДАТЬ ЗАЯВКУ</button>
     </div>
     </div>

<div style={{overflowX:"auto",overflowY:'visble',paddingTop:'20px',paddingBottom:'10px',overflowY: 'hidden',scrollbarVolor: 'white white  ',
  scrollbarWidth: 'thin'
}}>
  {header_top.length>6?(<>
  <div className={s.famous}>
  <div className={s.popular1}>
    <div onClick={()=>window.location=`/popular/${header_top[0].category_id}?title=${header_top[0].category_title}`} className={s.img1}>
      <center> <img className={s.birr} style={{height:'70%'}} src={header_top[0].image} alt="" /></center>
      <h3>{header_top[0].category_title}</h3>
    </div>
    <div  className={s.img_2}>
      <div onClick={()=>window.location=`/popular/${header_top[1].category_id}?title=${header_top[1].category_title}`} className={s.rasm1} style={{display:'grid'}}>
      <h3>{header_top[1].category_title}</h3><br />
        <img style={{height:'70%'}} src={header_top[1].image} alt="" />
      </div>
      <div onClick={()=>window.location=`/popular/${header_top[2].category_id}?title=${header_top[2].category_title}`} className={s.rasm2}>
<h3>{header_top[2].category_title}</h3>
        <img style={{height:'60%'}} src={header_top[2].image} alt="" />
      </div>
    </div>
  </div>
<div onClick={()=>window.location=`/popular/${header_top[3].category_id}?title=${header_top[3].category_title}`} className={s.popular2}>
  <h3>{header_top[3].category_title}</h3>
  <img style={{width:'100%'}} src={header_top[3].image} alt="" />
</div>
<div className={s.popular3}>
  <div onClick={()=>window.location=`/popular/${header_top[4].category_id}?title=${header_top[4].category_title}`} className={s.avto}>
<h3>{header_top[4].category_title}
</h3>
<img style={{width:'100%'}} src={header_top[4].image} alt="" />
  </div>
  <div className={s.ato2}>
  <div onClick={()=>window.location=`/popular/${header_top[5].category_id}?title=${header_top[5].category_title}`} className={s.avto1}>
    <h3>{header_top[5].category_title}</h3>
    <img style={{width:'100%'}} src={header_top[5].image} alt="" />
  </div>
  <div onClick={()=>window.location=`/popular/${header_top[6].category_id}?title=${header_top[6].category_title}`} className={s.avto2}>
    <h3>{header_top[6].category_title}
</h3>
<img style={{height:'70%'}} src={header_top[6].image} alt="" />
  </div>
  </div>
</div>
</div>
  </>):(<></>)}
</div>
  

     <Index_slider mapdata={topTovar} data={{title:'Хиты продаж',
      h1:'Самые популярные товары',
      p:'Выбор наших покупателей'
      }}/>
     <Index_slider mapdata={bestSeller} data={{title:'Лучшие предложения',
    h1:'Выгодное предложение',
    p:'Узнайте о выгодных предложениях и специальных ценах. Только в этом месяце!'
    }} color={'#e6faff'}/>
     <Index_slider mapdata={data} data={{title:'Набирают популярность',h1:'Успейте купить первым',
    p:'Новинки, которые пользуются повышенным спросом'}} color={'#e7fcf9'}/>
<Footer_1/>
      </div>
    </div>
  )
}
