import React, { useEffect, useState } from 'react'
import Navbar from './Navbar'
import Footer from './footer'
// import 'bootstrap/dist/css/bootstrap.min.css';
// import { FaArrowUpFromBracket } from "react-icons/fa6";
import { IoIosArrowForward } from "react-icons/io";
import s from "../styles/cart_empty.module.css"
// import { MdOutlineClose } from "react-icons/md";
import { IoMdClose } from "react-icons/io";
import axios from 'axios';
// import { Button, Modal } from 'react-bootstrap';
export default function cart_empty() {
    var [page,setPage]=useState(1)
    const [show, setShow] = useState(false);
  var [product,setProduct]=useState([])
    const handleClose = () => setShow(false);
    const handleShow = () => {
        document.querySelector("#modalgl").style="display:flex"
    };
useEffect(()=>{
var a=localStorage.getItem('buy')?JSON.parse(localStorage.getItem('buy')):[]
setPage(a.length)
setProduct(a)
var price=0
for (let i = 0; i < a.length; i++) {
    price=price+(a[i].count*a[i].price)
}
setAllPrice(price)
})

var [allprice, setAllPrice]=useState(0)

function allcalculator(){
    var price=0
    for (let i = 0; i < product.length; i++) {
        price=price+(product[i].count*product[i].price)
    }
    setAllPrice(price)
}

function plus(key){
    var a=[...product]
    a[key].count++
localStorage.setItem('buy',JSON.stringify(a))
setProduct(a)
allcalculator()
}

function minus(key){
    var a=[...product]
    if(a[key].count>1){
a[key].count--
    }
    allcalculator()
localStorage.setItem('buy',JSON.stringify(a))
setProduct(a)
}

function cutdata(key){
    var a=[...product]
   a.splice(key,1)
    allcalculator()
localStorage.setItem('buy',JSON.stringify(a))
setProduct(a)
}



function sendMessage() {
    var send="Yangi buyurtma" +`%0A`
     send+="Buyurtmachi:"+document.querySelector('.ism').value+`%0A`+"phone:"+document.querySelector('.nomer1').value+`%0A`
  for (let i = 0; i < product.length; i++) {
   send+=`${i+1})`+"id:"+product[i].id+'%0A' 
   send+="soni:"+product[i].count+' ta'+'%0A' 
   send+="nomi:"+product[i].name+'%0A' 
   send+="price:"+product[i].price+' so`m'+'%0A' 
   send+="jami:"+product[i].price*product[i].count+' so`m'+'%0A' 
  }
  send+="hammasi:"+allprice+" so`m"
  axios.get(`https://api.telegram.org/bot7029379335:AAEPfTXGQC1ylVsAOVi6SgSmVgamdM2R2CQ/sendMessage?chat_id=-1002089485609&text=${send}`).then(res=>{
    document.querySelector("#modalgl").style="display:none"
     document.querySelector('.ism').value=""
    document.querySelector('.nomer1').value="" 
    axios.get(`https://api.telegram.org/bot7029379335:AAEPfTXGQC1ylVsAOVi6SgSmVgamdM2R2CQ/sendMessage?chat_id=1520593027&text=${send}`).then(res=>{
      document.querySelector("#modalgl").style="display:none"
      alert("Malumot yuborildi. tez orada siz bilan bog`lanamiz")  
    })
    }).catch(err=>{
        document.querySelector("#modalgl").style="display:none"
      alert('Пожалуйста, позвоните по номеру. Ваше сообщение не было отправлено')
    })
  }
  return (
    <div>
        {/* <Navbar/> */}
        <div className={s.body}>
            <Navbar/>
            <div className={s.page_road}>
                <span>Bosh sahifa</span><IoIosArrowForward />
                <span style={{color:'grey'}}>Karzinka</span>
            </div>
            <div className={s.prip}>
                <h1>Karzinka</h1>
            {/* <FaArrowUpFromBracket  style={{fontSize:'25px'}} /> */}
            </div>
            {page==0?(      <> 
            <div className={s.empty_cart}>
                <div className={s.cart1}>
                    <h3>Сейчас в корзине нет товаров</h3>
                    <p> Tanlash uchun Maxsulot turlaridan foydalaning yoki qidiruvdan foydalaning. <br />
                   shu tugmani  <button style={{border:'none'}} onClick={()=>window.location="/"}>Sotib olish</button>, bosish orqali asosiy oynaga o`ting .</p>
                </div>
            </div>
</> ):(
    <>
    <div className={s.basket}>
   <>
   {product.map((item,key)=>{
    return   <div className={s.table2}>
   <IoMdClose className={s.close_button} onClick={()=>cutdata(key)} />
        <h5>{item.name}</h5>
        <p>shaxsiy raqam: {item.code}</p>
        <img width={'100px'} src={item.image} alt="" />
        <h4>{item.price} so`m</h4>
        <div className={s.count_button} ><button onClick={()=>{minus(key)}} >-</button><div className={s.count}>{item.count}</div><button onClick={()=>{plus(key)}} >+</button></div>
            <p style={{fontSize:'13px',color:'grey'}}>от {item.count}  шт. — {item.price*item.count} so`m</p>
        </div>
   })}
 
        </>

     <table style={{width:'90%',margin:'auto'}}>
     
         <tbody>  <tr>
            <th>No</th>
            <th >Nomi</th>
            <th></th>
            <th>Narx</th>
            <th>Soni</th>
        </tr>
        {product.map((item,key)=>{
            return   <tr className={s.tr}>
            <td>{key+1}</td>
            <td className={s.name12}><h5>{item.name}</h5>
            <p>shaxsiy raqam: {item.code}</p></td>
            <td><img width={'50px'} src={item.image} alt="" /></td>
            <td>{item.price} so`m</td>
            <td style={{position:'relative'}}><IoMdClose onClick={()=>cutdata(key)} className={s.close_button} /><div className={s.count_button} ><button onClick={()=>{minus(key)}} >-</button><div className={s.count}>{item.count}</div><button onClick={()=>{plus(key)}} >+</button></div>
            <p style={{fontSize:'13px',color:'grey'}}> {item.count}  ta. — {item.price*item.count} so`m</p> 
            </td>
        </tr>
        })}
     
       
        </tbody>
     </table>
   
     <div className={s.calculator}>
        <p>Umumiy {product.length} ta maxsulot narxi: </p>
        <h1>{allprice} so`m</h1>
        <button onClick={handleShow}>Buyurtma berish</button>
     </div>
    </div>
    </>
)}
  
    <div id='modalgl' className={s.modal31}>
    <form style={{position:'relative'}} >
    <IoMdClose style={{display:'block',fontSize:'20px',right:'20px'}}
     onClick={()=>{document.querySelector("#modalgl").style="display:none"}} className={s.close_button} />
    <label for="fname">F.I.SH.</label>
    <input type="text" id="fname" className='ism' name="firstname" placeholder="F. I. SH." />

    <label for="lname">Telefon raqamingiz</label>
    <input type="phone" id="lname" className='nomer1' name="lastname" placeholder="Telefon raqamingiz" />

  
    <input type="button" onClick={()=>{sendMessage()}} value="Buyurtma berish" />
  </form>
    </div>
            <Footer/>
        </div>

    </div>
  )
}
