import React, { useEffect, useState } from 'react'
import Navbar from './Navbar'
import Footer_1 from './footer_1'
// import 'bootstrap/dist/css/bootstrap.min.css';
// import { FaArrowUpFromBracket } from "react-icons/fa6";
import { IoIosArrowForward } from "react-icons/io";
import s from "../styles/cart_empty.module.css"
// import { MdOutlineClose } from "react-icons/md";
import { IoMdClose } from "react-icons/io";
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
  return (
    <div>
        {/* <Navbar/> */}
        <div className={s.body}>
            <Navbar/>
            <div className={s.page_road}>
                <span>Главная</span><IoIosArrowForward />
                <span style={{color:'grey'}}>Корзина</span>
            </div>
            <div className={s.prip}>
                <h1>Корзина</h1>
            {/* <FaArrowUpFromBracket  style={{fontSize:'25px'}} /> */}
            </div>
            {page==0?(      <> 
            <div className={s.empty_cart}>
                <div className={s.cart1}>
                    <h3>Сейчас в корзине нет товаров</h3>
                    <p>Для выбора используйте каталог товаров или поиск. <br />
Чтобы добавить товар в корзину, кликните на кнопку <button>В корзину</button>, напротив интересующей вас позиции.</p>
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
        <p>ном. номер: {item.code}</p>
        <img width={'100px'} src={item.image} alt="" />
        <h4>{item.price} руб.</h4>
        <div className={s.count_button} ><button onClick={()=>{minus(key)}} >-</button><div className={s.count}>{item.count}</div><button onClick={()=>{plus(key)}} >+</button></div>
            <p style={{fontSize:'13px',color:'grey'}}>от {item.count}  шт. — {item.price*item.count} руб.</p>
        </div>
   })}
 
        </>

     <table style={{width:'90%',margin:'auto'}}>
     
         <tbody>  <tr>
            <th>No</th>
            <th >Наименование</th>
            <th></th>
            <th>Цена</th>
            <th>Кол-во</th>
        </tr>
        {product.map((item,key)=>{
            return   <tr className={s.tr}>
            <td>{key+1}</td>
            <td><h5>{item.name}</h5>
            <p>ном. номер: {item.code}</p></td>
            <td><img width={'50px'} src={item.image} alt="" /></td>
            <td>{item.price} руб.</td>
            <td style={{position:'relative'}}><IoMdClose onClick={()=>cutdata(key)} className={s.close_button} /><div className={s.count_button} ><button onClick={()=>{minus(key)}} >-</button><div className={s.count}>{item.count}</div><button onClick={()=>{plus(key)}} > +</button></div>
            <p style={{fontSize:'13px',color:'grey'}}>от {item.count}  шт. — {item.price*item.count} руб.</p> 
            </td>
        </tr>
        })}
     
       
        </tbody>
     </table>
   
     <div className={s.calculator}>
        <p>Всего 2 товара на сумму: </p>
        <h1>{allprice} руб.</h1>
        <button onClick={handleShow}>К оформлению</button>
     </div>
    </div>
    </>
)}
  
    <div id='modalgl' className={s.modal31}>
    <form style={{position:'relative'}} >
    <IoMdClose style={{display:'block',fontSize:'20px',right:'20px'}} onClick={()=>{document.querySelector("#modalgl").style="display:none"}} className={s.close_button} />
    <label for="fname">Ф. И.О.</label>
    <input type="text" id="fname" name="firstname" placeholder="Ф. И.О." />

    <label for="lname">Ваш номер телефона</label>
    <input type="phone" id="lname" name="lastname" placeholder="Ваш номер телефона" />

  
    <input type="button" value="Сделать заказ" />
  </form>
    </div>
            <Footer_1/>
        </div>

    </div>
  )
}
