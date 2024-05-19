import React, { useEffect, useState } from 'react'
import s from "../styles/footer.module.css"
import img from "../images/image 25.png"
import img1 from "../images/image 1.png"
import { FaFacebookF } from "react-icons/fa6";
import Image from 'next/image';
import { FaYoutube } from "react-icons/fa";
import { FaTelegram } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaInstagram } from "react-icons/fa6";
import { FaLocationDot } from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";
import url from "./host"
import axios from 'axios';
export default function footer() {
  var [company,setCompany]=useState([{}])

function getCompany(){
  axios.get(`${url()}/api/company`).then(res=>{
    if(res.data.length>0){
      setCompany(res.data)
    }
  })
}
var [documen,setDocumen]=useState({})
function getDocumen() {
  axios.get(`${url()}/api/document`).then(res=>{
if((res.data).length>0){
setDocumen(res.data[0])
}
  }).catch(err=>{

  })
}
useEffect(()=>{
  getCompany()
  getDocumen()
},[])


  return (
    <div>
<div className={s.foot}>
<div className={s.footer_sayt}>
     <div className={s.app2}>
     <img style={{height:'100px',marginBottom:'30px'}} src={company[0].image} alt="" />
      <p>Quyidagi havolani bosish orqali ilovani yuklab oling :</p>
    
<div className={s.appsdf}>
<div className={s.app}>
   <img style={{cursor:'pointer'}}  src="https://static.chipdip.ru/images/layout/apps/appstore.svg" alt="" />
    </div>
    <div className={s.app}>
   <img style={{cursor:'pointer'}}  src="	https://static.chipdip.ru/images/layout/apps/googleplay.svg" alt="" />

 
      </div>
</div>
     </div>
     <ul>
      <h3>Menu</h3>
      <li style={{cursor:'pointer'}} onClick={()=>{window.location='/#xit'}}>Ko`p sotiladi</li>
      <li style={{cursor:'pointer'}}  onClick={()=>{window.location='/#lut'}}>Eng yaxshilari</li>
    <li style={{cursor:'pointer'}}  onClick={()=>{window.location='/#new1'}}>Eng yangilari</li>
    <li style={{cursor:'pointer'}}  onClick={()=>{window.location='/#dic'}}>Xomiylarimiz</li>
     
     </ul>
     <ul>
      <h3>Bog`lanish</h3>
      <a style={{textDecoration:'none'}} href={`tel:+${company[0].phone}`}><li><FaPhoneAlt style={{marginRight:'20px'}} />+{company[0].phone}</li></a>
     <a style={{textDecoration:'none'}} href={`mailto:${company[0].email}`}><li><MdEmail style={{marginRight:'20px'}}/>{company[0].email}</li></a> 
      <li><FaLocationDot style={{marginRight:'20px'}} />{company[0].address}</li>
     </ul>
     <ul>
      <h3>Sosial media</h3>
      <div className={s.social}>
     <a href={company[0].facebook}> <FaFacebookF /></a>
    <a href={company[0].telegram}> <FaTelegram /></a> 
      <a href={company[0].youtobe}><FaYoutube /></a>
     <a href={company[0].instagram}><FaInstagram /></a> 
      </div>
     
     </ul>
      </div>
      <hr style={{width:'40%',margin:'auto',color:'rgba(128, 128, 128, 0.175)',opasity:'0.7',boxShadow:'0px 0px 0px 1px'}} />
      <p className={s.footer_p}>Mualliflik huquqi ©2024 Barcha huquqlar himoyalangan | Ushbu veb-sayt Abbas team tomonidan yaratilgan</p>
</div>
    </div>
  )
}
