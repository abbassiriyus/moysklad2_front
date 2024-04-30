import React, { useState } from 'react'
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

    const handleClose = () => setShow(false);
    const handleShow = () => {
        document.querySelector("#modalgl").style="display:flex"
    };
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
   <div className={s.table2}>
   <IoMdClose className={s.close_button} />
        <h5>ProsKit, Мини-дрели и граверы</h5>
        <p>ном. номер: 9000842323</p>
        <img width={'100px'} src="https://static.chipdip.ru/lib/604/DOC039604080.jpg" alt="" />
        <h4>3000 руб.</h4>
        <div className={s.count_button} ><button>-</button><div className={s.count}>1</div><button>+</button></div>
            <p style={{fontSize:'13px',color:'grey'}}>от 3  шт. — 1232 руб.</p>
        </div>
        </>

     <table style={{width:'90%',margin:'auto'}}>
     
         <tbody>  <tr>
            <th>No</th>
            <th >Наименование</th>
            <th></th>
            <th>Цена</th>
            <th>Кол-во</th>
        </tr>
        <tr className={s.tr}>
            <td>1</td>
            <td><h5>ProsKit, Мини-дрели и граверы</h5>
            <p>ном. номер: 9000842323</p></td>
            <td><img width={'50px'} src="https://static.chipdip.ru/lib/604/DOC039604080.jpg" alt="" /></td>
            <td>3000 руб.</td>
            <td style={{position:'relative'}}><IoMdClose className={s.close_button} /><div className={s.count_button} ><button>-</button><div className={s.count}>1</div><button>+</button></div>
            <p style={{fontSize:'13px',color:'grey'}}>от 3  шт. — 1232 руб.</p> 
            </td>
        </tr>
        <tr className={s.tr}>
            <td>2</td>
            <td><h5>ProsKit, Мини-дрели и граверы</h5>
            <p>ном. номер: 9000842323</p></td>
            <td><img width={'50px'} src="https://static.chipdip.ru/lib/604/DOC039604080.jpg" alt="" /></td>
            <td>3000 руб.</td>
            <td style={{position:'relative'}}><IoMdClose className={s.close_button} /><div className={s.count_button} ><button>-</button><div className={s.count}>1</div><button>+</button></div>
            <p style={{fontSize:'13px',color:'grey'}}>от 3  шт. — 1232 руб.</p> 
            </td>
        </tr>
        </tbody>
     </table>
   
     <div className={s.calculator}>
        <p>Всего 2 товара на сумму: </p>
        <h1>105 200 руб.</h1>
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
