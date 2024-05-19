import React, { useEffect, useState } from 'react'
import s from "../styles/about.module.css"
import Navbar from './Navbar'
import Footer from './footer';
import { IoIosArrowForward } from "react-icons/io";
import Footer_1 from './footer_1';
import r from "../styles/cart_empty.module.css"

import { IoIosArrowForward, IoMdClose } from "react-icons/io";
import url from "./host.js"
import axios from 'axios';
// import { FaArrowUpFromBracket } from "react-icons/fa6";
// import { MdOutlinePresentToAll } from "react-icons/md";
export default function about() {

    var [company,setCompany]=useState([{}])

    function getCompany1(){
      axios.get(`${url()}/api/company`).then(res=>{
        console.log(res.data);
        if(res.data.length>0){
          setCompany(res.data)
        }
      })
    }
    function sendMessage() {
        var send="Hamkorlikda ishlaysizmi" +`%0A`
         send+="Buyurtmachi:"+document.querySelector('.ism').value+`%0A`+"phone:"+document.querySelector('.nomer1').value+`%0A`
   
     
      axios.get(`https://api.telegram.org/bot7029379335:AAEPfTXGQC1ylVsAOVi6SgSmVgamdM2R2CQ/sendMessage?chat_id=-1002089485609&text=${send}`).then(res=>{
        document.querySelector("#modalgl").style="display:none"
         document.querySelector('.ism').value=""
        document.querySelector('.nomer1').value="" 
        axios.get(`https://api.telegram.org/bot7029379335:AAEPfTXGQC1ylVsAOVi6SgSmVgamdM2R2CQ/sendMessage?chat_id=1520593027&text=${send}`).then(res=>{
          document.querySelector("#modalgl").style="display:none"
          alert("Информация отправлена. Мы скоро свяжемся с вами")  
        })
        }).catch(err=>{
            document.querySelector("#modalgl").style="display:none"
          alert('Пожалуйста, позвоните по номеру. Ваше сообщение не было отправлено')
        })
      }
    useEffect(()=>{
getCompany1()
    },[])

  return (
    <div>
        <div className={s.body}>
            <Navbar/>
            <div className={s.page_road}>
            <span>Bosh sahifa</span><IoIosArrowForward />
            <span>Magazin haqida </span><IoIosArrowForward />
            </div>
    <div className={s.plan}>
        <h1>Siz etkazib beruvchi bo'lishni rejalashtiryapsizmi?</h1>
        {/* <FaArrowUpFromBracket  style={{fontSize:'30px'}} /> */}
    </div>
 <div className={s.history}>
<div className={s.chip}>
<p className={s.dip}>«RADIO CITY» jamoasi elekrton qurulmalar ishlab chiqaruvchi korxonalar va qurilmalar sotuvchi tashkilotlarni hamkorlikka takif qiladi.</p>
<img height={'100px'} src={company[0].image} alt="" />

<p style={{marginTop:'20px'}}>
Do'kon <strong>TOP 100</strong> ga kiradi <br />
O`zbekistondagi eng yirik onlayn-do'konlar</p>
<div  className={s.customer}>
    <div className={s.order1}>
    <img src="https://static.chipdip.ru/images/news/test-chipdip-partner/3.png" alt="" /><br />
    <span>100 000+</span>
    <p>Biz mijozlar uchun mobil dastur va web sayt xizmatlarnini yo`lga qo`yganmiz</p>
    </div>
     <div className={s.order1}>
    <img src="https://static.chipdip.ru/images/news/test-chipdip-partner/2.png" alt="" /><br />
    <span>62 000+</span>
    <p>yetkazib berilgan <br /> buyurtmalar</p>
    </div>
    <div className={s.order1}>
    <img src="https://static.chipdip.ru/images/htmlsnippet/invite2020_html/7.png" alt="" /><br />
    <span>40</span>
    <p>
    ulgurji savdo ofislari bilan chakana savdo do'konlari tarmog'i 2024 yil may uchun</p>
    </div>
 <div className={s.order1}>
    <img src="https://static.chipdip.ru/images/news/test-chipdip-partner/4.png" alt="" /><br />
    <span>11 000 м²</span>
    <p>ikkita avtomatlashtirilgan ombor Toshkent - <strong> 200</strong> m² Farg`ona - <strong>500</strong> m²</p>
    </div>
     <div className={s.order1}>
    <img src="https://static.chipdip.ru/images/news/test-chipdip-partner/5.png" alt="" /><br />
    <span>android va ios</span>
    <p>mobil ilova</p>
    </div>
    <div className={s.order1}>
    <img src="https://static.chipdip.ru/images/news/test-chipdip-partner/6.png" alt="" /><br />
    <span>yetkazib berish</span>
    <p>yetkazib berishdan keyin
to'lovlarni qabul qilish</p>
    </div>

    
</div>


</div>

 </div>




<div className={s.chpidip}>
    <h3>«RADIO CITY» TA'MINOTCHILARIGA TALABLAR</h3>

    <ul>
        <li>Yuridik shaxs yoki yakka tartibdagi tadbirkor</li>
        <li>Moliyaviy shaffoflik</li>
        <li>EDF bilan ishlash: Elektron hujjat aylanishi</li>
        <li>Kontentning mavjudligi: fotosuratlar, Tavsif, sertifikatlar, ko'rsatmalar va boshqalar.</li>
        <li>API interfeysi yoki .xml fayli orqali ma'lumotlar almashinuvi</li>
        <li>Joriy ombor zaxiralari: kuniga kamida bir marta yangilanadi</li>
        <li>1 kun ichida qadoqlash va jo'natish</li>
        <li>Shikoyatlarni moslashuvchan ko'rib chiqish</li>
        <li>Yetkazib beruvchi hisobidan «RADIO CITY» omboriga yetkazib berish</li>
    </ul>

    <p className={s.past}>CHIP va DIP yetkazib beruvchisi bo'lish uchun hamkorlik uchun ariza to'ldirishingiz kerak.</p>
    <button onClick={()=>{document.querySelector("#modalgl").style="display:flex"}}  >Taklif qoldirish</button><br />
<div className={s.ifr}>
<iframe className={s.iframe1} width="560" height="315" src="https://www.youtube.com/embed/Xy4xf3SEwvM?si=zwXgC8xJnuPeZ3l_" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>
</div>
<Footer/>
<div id='modalgl' className={r.modal31}>
    <form style={{position:'relative'}} >
    <IoMdClose style={{display:'block',fontSize:'20px',right:'20px'}} onClick={()=>{document.querySelector("#modalgl").style="display:none"}} className={r.close_button} />
    <label for="fname">Ф. И.О.</label>
    <input type="text" id="fname" className='ism' name="firstname" placeholder="Ф. И.О." />

    <label for="lname">Ваш номер телефона</label>
    <input type="phone" id="lname" className='nomer1' name="lastname" placeholder="Ваш номер телефона" />

  
    <input type="button" onClick={()=>{sendMessage()}} value="Сделать заказ" />
  </form>
    </div>
        </div>
    </div>
  )
}
