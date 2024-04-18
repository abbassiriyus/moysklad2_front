import React from 'react'
import Navbar from './Navbar'
import Footer_1 from './footer_1'
import { IoIosArrowForward } from "react-icons/io";
import { FaArrowUpFromBracket } from "react-icons/fa6";

import s from "../styles/group.module.css"
export default function group() {
  return (
    <div>
        <div className={s.body}>
            <Navbar/>
        <div className={s.texnika}>
            
        </div>
        <div className={s.page_road}>
            <span>Главная</span><IoIosArrowForward />
            <span>Расходные материалы</span><IoIosArrowForward />
            <span>Материалы для пайки</span><IoIosArrowForward />
            <span>Припои без канифоли</span><IoIosArrowForward />

            <span>Россия</span><IoIosArrowForward />

            <span style={{color:'grey'}}>ПОС 40 прв d=1.0мм 1м спираль, Припой</span><IoIosArrowForward />
            </div>

            <div className={s.prip}>
            <h1>ПОС 40 прв d=1.0мм 1м спираль, Припой</h1>
            <FaArrowUpFromBracket  style={{fontSize:'30px'}} />
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
                            <span>123 шт. со склада г.Москва</span>
                            <h1>230 руб.
</h1>

<div className={s.btn1}>
    <div className={s.buttons}>
        <button>-</button>
        <span>1</span>
        <button>+</button>
    </div>
    <p>от <strong>3 шт</strong>. — 195 руб.</p>
</div>
<p>Добавить в корзину 1 шт. на сумму 230 руб.
</p>
<button>Добавить в корзину</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
