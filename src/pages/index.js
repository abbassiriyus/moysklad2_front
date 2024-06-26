import React, { useEffect, useState } from 'react'
import s from "../styles/Home.module.css"
import Header_Carousel from "../pages/header_carousel"
import Footer from './footer';
import Index_slider from './index_slider';
import Navbar from './Navbar';
import url from "./host"
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import { Navigation, Pagination, Mousewheel, Keyboard } from 'swiper/modules';
import axios from 'axios';
import { SwiperSlide,Swiper } from 'swiper/react';
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

var [bestSellerId,setBestSellerId]=useState('')
function getbestSeller(id) {
  axios.get(`${url()}/api/best_seller`).then(res1=>{
    if(res1.data.length>0){
      setBestSellerId(res1.data[0].category_id)
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

var [topTovarId,settopTovarId]=useState("")
function gettopTovar(id) {
  axios.get(`${url()}/api/top_tovar`).then(res1=>{
    if(res1.data.length>0){
      settopTovarId(res1.data[0].category_id)
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

setHeaderTop(res.data.sort((a, b) => a.id - b.id))
console.log(res.data);
  })
}
var [homiy,setHomiy]=useState([])
function getHomiy(params) {
  axios.get(`${url()}/api/homiy`).then(res=>{
    setHomiy(res.data)
   })
}
var [loading,setLoading]=useState(true)
useEffect(()=>{
  getCategory_top()
  getHomiy()
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
      <h1>HAMKOR BO`LING</h1>
     </div>
     <div className={s.line}></div>
     <div className={s.added}>
      <h4>SIZNI HAMKORLIKGA TAKLIF ETAMIZ <br />
ISHLAB CHIQARISH VA DISTRIBUTORLAR
</h4>

     </div>
     <div className={s.button}>
<button onClick={()=>{window.location="/about/"}}> Taklif qoldirish</button>
     </div>
     </div>

<div style={{overflowX:"auto",overflowY:'visble',paddingTop:'20px',paddingBottom:'10px',overflowY: 'hidden',scrollbarVolor: 'white white  ',
  scrollbarWidth: 'thin',paddingLeft:'10px',paddingRight:'10px'
}}>
  {header_top.length>6?(<>
  <div className={s.famous}>
  <div className={s.popular1}>
    <div onClick={()=>window.location=`/popular/${header_top[0].category_id}?title=${header_top[0].category_title}`} className={s.img1}>
      <center> <img className={s.birr}   src={header_top[0].image} alt="" /></center>
      <h3>{header_top[0].category_title}</h3>
    </div>
    <div  className={s.img_2}>
      <div   onClick={()=>window.location=`/popular/${header_top[1].category_id}?title=${header_top[1].category_title}`} className={s.rasm1}>
      <h3>{header_top[1].category_title}</h3><br />
        <img   src={header_top[1].image} alt="" />
      </div>
      <div onClick={()=>window.location=`/popular/${header_top[2].category_id}?title=${header_top[2].category_title}`} className={s.rasm2}>
      <h3>{header_top[2].category_title}</h3>
        <img  src={header_top[2].image} alt="" />
      </div>
    </div>
  </div>
<div onClick={()=>window.location=`/popular/${header_top[3].category_id}?title=${header_top[3].category_title}`} className={s.popular2}>
  <h3>{header_top[3].category_title}</h3>
  <img  src={header_top[3].image} alt="" />
</div>
<div className={s.popular3}>
  <div onClick={()=>window.location=`/popular/${header_top[4].category_id}?title=${header_top[4].category_title}`} className={s.avto}>
<h3>{header_top[4].category_title}
</h3>
<img   src={header_top[4].image} alt="" />
  </div>
  <div className={s.ato2}>
  <div onClick={()=>window.location=`/popular/${header_top[5].category_id}?title=${header_top[5].category_title}`} className={s.avto1}>
    <h3>{header_top[5].category_title}</h3>
    <img  src={header_top[5].image} alt="" />
  </div>
  <div onClick={()=>window.location=`/popular/${header_top[6].category_id}?title=${header_top[6].category_title}`} className={s.avto2}>
    <h3>{header_top[6].category_title}
</h3>
<img src={header_top[6].image} alt="" />
  </div>
  </div>
</div>
</div>
  </>):(<></>)}
</div>
  
<div id="xit">
     <Index_slider  mapdata={topTovar} id={topTovarId} data={{title:'Ko`p sotiladi',
      h1:'Eng Ko`p sotiladi',
      p:'Mijozlarimiz tanlovi'
      }}/></div>
      <div id="lut">
     <Index_slider mapdata={bestSeller} id={bestSellerId} data={{title:'Eng yaxshilari',
    h1:'Foydali taklif',
    p:'Ajoyib takliflar va maxsus narxlar haqida bilib oling. Faqat shu oyda!'
    }} color={'#e6faff'}/></div>
    <div id="new1">
     <Index_slider mapdata={data} id={1} data={{title:'Eng yangilari',h1:'Birinchi bo`lib xarid qiling',
    p:'Yuqori talabga ega bo`lgan yangi mahsulotlar'}} color={'#e7fcf9'}/>
</div>
<main>
  <h3 id='dic'>Xomiylarimiz</h3>
  <Swiper
        cssMode={true}
        navigation={true}
        // pagination={true}
        mousewheel={true}
        keyboard={true}
        slidesPerView={6}
        id={s.swipper12}
        breakpoints={{
          106: {
            slidesPerView: 2,
          },
          768: {
            slidesPerView: 3,
          },
          968: {
            slidesPerView: 4,
          },
          1100: {
            slidesPerView: 5,
          },
          1400: {
            slidesPerView: 6,
          },
        }}
        modules={[Navigation, Pagination, Mousewheel, Keyboard]}
        className="mySwiper"
      >
     {homiy.map(item=>{
      return <SwiperSlide><img src={item.image} alt="" style={{height:'60px'}} /></SwiperSlide>
     })}   
       {homiy.map(item=>{
      return <SwiperSlide><img src={item.image} alt="" style={{height:'60px'}} /></SwiperSlide>
     })}   
       {homiy.map(item=>{
      return <SwiperSlide><img src={item.image} alt="" style={{height:'60px'}} /></SwiperSlide>
     })}   
       {homiy.map(item=>{
      return <SwiperSlide><img src={item.image} alt="" style={{height:'60px'}} /></SwiperSlide>
     })}  
      </Swiper>
</main>

<Footer/>
      </div>
    </div>
  )
}
