import React from 'react'
import Navbar from './Navbar'
import Footer_1 from './footer_1'
import { IoIosArrowForward } from "react-icons/io";
import { FaCheck } from "react-icons/fa6";
// import { FaArrowUpFromBracket } from "react-icons/fa6";

import s from "../styles/group.module.css"
export default function group() {
  return (
    <div>
        <div className={s.body}>
            <Navbar/>
        <div className={s.texnika}>
            
        </div>
        {/* <div className={s.page_road}>
            <span>Главная</span><IoIosArrowForward />
            <span>Расходные материалы</span><IoIosArrowForward />
            <span>Материалы для пайки</span><IoIosArrowForward />
            <span>Припои без канифоли</span><IoIosArrowForward />

            <span>Россия</span><IoIosArrowForward />

            <span style={{color:'grey'}}>ПОС 40 прв d=1.0мм 1м спираль, Припой</span><IoIosArrowForward />
            </div> */}

            <div className={s.prip}>
            <h1>ПОС 40 прв d=1.0мм 1м спираль, Припой</h1>
            {/* <FaArrowUpFromBracket  style={{fontSize:'25px'}} /> */}
            </div>

            <div className={s.dobkar}>
                <div className={s.img_text}>
                 <div className={s.doc_img}>
                <div className={s.imgkar}>

</div>
<p>Изображения служат только для ознакомления,
см. техническую документацию</p>
                 </div>

                    <div className={s.textkar}>

                        <div className={s.tick}>
                            <span><strong><FaCheck />123 шт</strong>. со склада г.Москва</span>
                     </div>
       <h1>230 руб.
</h1> 
<div className={s.btn1}>
    <div className={s.buttons}>
        <button style={{borderTopLeftRadius:'3px'}}>-</button>
        <span>1</span>
        <button>+</button>
    </div>
    <p>от <strong>3 шт</strong>. — 195 руб.</p>
</div>
<p style={{marginBottom:'20px'}}>Добавить в корзину 1 шт. на сумму 230 руб.
</p>
<button className={s.red1}>Добавить в корзину</button>
                       
                    </div>
                </div>




                <div className={s.number}>
                    <span>Номенклатурный номер:

                        <p>9000195024</p>
                    </span>

                    <span>Артикул: <p>ПОС 40 прв d=1.0мм 1м спираль</p></span>

                    <span>Бренд: <p>Россия
</p></span>
                </div>
            </div>

            <div className={s.grey}>
                <div className={s.order_white}>
                    <h3>Описание</h3>
                    <span>Припой оловянно-свинцовый ПОС 40 спираль</span><br />
                    <span>Соответствует ГОСТ 21931-76</span>
                   <ul>
                   <h4>Технические характеристики:</h4>
                    <li>Диаметры (мм): 0,8 1,0 1,5 2,0 3,0</li>
                    <li>Длина (м): 1; 2 1; 1,5 0,5; 0,75</li>
                    <li>Состав (%) Олово 40 Свинец 60</li>
                    <li>Без флюса</li>
                    <li>Температура плавления 183 – 238 С</li>
                   </ul>
                   <h4>Область применения:</h4>
                   <span>Радиоэлектроника, электротехника, металлические изделия, продукция из свинца, жестяные работы и кровля крыш, упаковки из жести</span>

                   <h4 style={{marginTop:'30px'}}>Паяемые металлы, покрытия:</h4>
                   <span>Медь, медные сплавы, латунь, никель, сплавы никеля, высоколегированная сталь, стали, цинк, лужёные стальные листы, свинец, лужёная высоколегированная сталь</span>

                   <h3 style={{marginTop:'30px'}}>Технические параметры</h3>
                   <div className={s.check}>
                    <p>
Диаметр припоя, мм</p>
                    <span>1</span>
                    <input type="checkbox" name="" id="" />
                   </div>
                   <hr  style={{width:'35%',marginTop:'5px',color:'rgba(128, 128, 128, 0.262)'}}/>
                   <div className={s.check}>
                    <p>
                    Состав</p>
                    <span>	sn40pb60</span>
                    <input type="checkbox" name="" id="" />
                   </div>
                   <hr  style={{width:'35%',marginTop:'5px',color:'rgba(128, 128, 128, 0.262)'}}/>
                   <div className={s.check}>
                    <p>
                    Вес, г</p>
                    <span>14</span>
                   </div>
                   <button>Показать похожие</button>
                </div>
                <div className={s.order_white1}>
                    <h3>Сроки доставки</h3>
                    <span><a href="">Выберите регион</a>, чтобы увидеть способы получения товара.</span>
                </div>
            </div>
<h2>С этим товаром покупают</h2>
            <div className={s.cards2}>
  <div className={s.card1}>
   <img src="https://static.chipdip.ru/lib/968/DOC000968750.jpg" alt="" />

    <div className={s.card1_body}>
      <h5>Россия</h5>
      <a href=""><span>ПОС 40 прв d=1.0мм 1м спираль, Припой</span></a>
      <p>230 руб.</p>
    </div>
  </div>

  <div className={s.card1}>
   <img src="https://static.chipdip.ru/lib/975/DOC002975843.jpg" alt="" />

    <div className={s.card1_body}>
      <h5>Solins</h5>
      <a href=""><span>СКФ (ФКСп, ФКЭт) с кисточкой 20мл, Флюс</span></a>
      <p>170 руб.
</p>
    </div>
  </div>

  <div className={s.card1}>
   <img src="https://static.chipdip.ru/lib/803/DOC004803586.jpg" alt="" />

    <div className={s.card1_body}>
      <h5>Zhongdi</h5>
      <a href=""><span>ZD-181-1 2MM, Оплетка для выпайки 2мм х 1,5м</span></a>
      <p>270 руб.</p>
    </div>
  </div>

  <div className={s.card1}>
   <img src="https://static.chipdip.ru/lib/075/DOC025075417.jpg" alt="" />

    <div className={s.card1_body}>
      <h5>Россия</h5>
      <a href=""><span>Припой трубка с канифолью, 10 г, 0,8 мм, ПОС-61, колба</span></a>
      <p>100 руб.</p>
    </div>
  </div>

  <div className={s.card1}>
   <img src="https://static.chipdip.ru/lib/639/DOC005639891.jpg" alt="" />

    <div className={s.card1_body}>
      <h5>Китай</h5>
      <a href=""><span>ПYT-822, Паяльная флюс паста, 100-400С,безотмывочная 5гр</span></a>
      <p>280 руб.</p>
    </div>
  </div>
</div>
<hr  className={s.hrr}/>

<h2>Мы рекомендуем</h2>
<div className={s.tovar}>
    <div className={s.tovar1}>
        <div className={s.tov1}></div>
        <a href=""><span>Средства для изготовления <br /> печатных плат</span></a>
    </div>
    
    <div className={s.tovar1}>
        <div className={s.tov1}></div>
        <a href=""><span>Средства для изготовления <br /> печатных плат</span></a>
    </div>

    <div className={s.tovar1}>
        <div className={s.tov1}></div>
        <a href=""><span>Средства для изготовления <br /> печатных плат</span></a>
    </div>

    <div className={s.tovar1}>
        <div className={s.tov1}></div>
        <a href=""><span>Средства для изготовления <br /> печатных плат</span></a>
    </div>
</div>
<hr  className={s.hrr}/>
<h3>Ранее просмотренные товары</h3>
<div className={s.cards1}>
  
<div className={s.card1}>
   <img src="https://static.chipdip.ru/lib/968/DOC000968750.jpg" alt="" />

    <div className={s.card1_body}>
      <h5>Россия</h5>
      <a href=""><span>ПОС 40 прв d=1.0мм 1м спираль, Припой</span></a>
      <p>230 руб.</p>
    </div>
  </div>

  <div className={s.card1}>
   <img src="https://static.chipdip.ru/lib/975/DOC002975843.jpg" alt="" />

    <div className={s.card1_body}>
      <h5>Solins</h5>
      <a href=""><span>СКФ (ФКСп, ФКЭт) с кисточкой 20мл, Флюс</span></a>
      <p>170 руб.
</p>
    </div>
  </div>
</div>
<Footer_1/>
        </div>
    </div>
  )
}
