import React from 'react'
import s from "../styles/onecategory.module.css"
import { IoClose } from "react-icons/io5";
import { FaCheck } from "react-icons/fa";   
export default function onecategory() {
  return (
    <div>
        <div className={s.body}>
          <div className={s.white}>
            <div className={s.white_ich}>
             <div className={s.claos}>
             <h3>DMS-20LCD-2-5-C, Вольтметр цифровой, измерительная головка до 20В</h3>
             <IoClose />
             </div>

             <div className={s.display_white_i}>
                <div className={s.car_img}>
                    <div className={s.img_clock}>
                        <div onClick={()=>{
                            document.querySelector("#back").style="background:url(https://static.chipdip.ru/lib/798/DOC000798578.jpg)no-repeat;width:'90%'"
                        }} className={s.im1}>
                            <img src="https://static.chipdip.ru/lib/798/DOC000798578.jpg" alt="" />
                        </div>
                        <div onClick={()=>{
                            document.querySelector("#back").style="background:url(https://static.chipdip.ru/lib/525/DOC038525114.jpg)no-repeat;width:'90%'"
                        }} className={s.im2}>
                            <img src="https://static.chipdip.ru/lib/525/DOC038525114.jpg" alt="" />
                        </div>
                        <div onClick={()=>{
                            document.querySelector("#back").style="background:url(https://static.chipdip.ru/lib/525/DOC038525118.jpg)no-repeat;width:'90%'"
                        }} className={s.im3}>
                            <img src="https://static.chipdip.ru/lib/525/DOC038525118.jpg" alt="" />
                        </div>

                    </div>
                    <div id='back' className={s.car}>
                        {/* <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRnjDqnWfFYyYGsSDmBdKuj2K5J87CkNCilkPJQBVfMsaUXwLTaVYcbCyBELgmCuLWfTc&usqp=CAU" alt="" /> */}
                    </div>
                </div>

                <div className={s.num_price}>
                    <span>	Номенклатурный номер:</span>
                    <p>9000163835</p>
                    <span>Артикул:</span>
                    <p>DMS-20LCD-2-5-C</p>
                    <span>Бренд:</span>
                    <p>Murata Power Solutions</p>

                    <span><FaCheck />14 шт. со склада г.Москва</span>

                    <div className={s.prc}>
                        <h2>7 780 so`m</h2>
                       <div className={s.bton}>
                       <div className={s.butn}>
                            <button>-</button>
                            <span>1</span>
                            <button>+</button>
                        </div>
                        <p>от 5 шт. — 7 780 руб</p>
                       </div>
                    </div>
                </div>
             </div>
            </div>
            </div>  
        </div>
    </div>
  )
}
