import React, { useEffect, useState } from 'react'
import s from "../styles/Navbar.module.css"
import Image from 'next/image'
import { IoCartOutline } from "react-icons/io5";
import { CgMenuGridR } from "react-icons/cg";
import { FaRegUserCircle } from "react-icons/fa";
import { LiaSearchSolid } from "react-icons/lia";
import { BsFillBoxSeamFill } from "react-icons/bs";
import { HiOutlineClipboardDocumentList } from "react-icons/hi2";
import img1 from "../images/logo1.png"

import { IoLocationSharp } from "react-icons/io5";
export default function Navbar() {
  const [showNavbar, setShowNavbar] = useState(true);
 

  useEffect(() => {
    const handleScroll = () => {
      if (window.pageYOffset >= 100) {
        console.log(window.pageYOffset);
        setShowNavbar(false);
      } else {
        setShowNavbar(true);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  return (
    <>
<div className={s.navbar}>
    <span className={s.border}>+7 495 544-00-08</span>
    <div  className={s.chipdip}>
<span>CHIPDIP организациям</span>
    </div>
</div>
<div className={s.status}>
  {!showNavbar?(<><div id={s.search1} className={s.search}>
<div className={s.red}>
<CgMenuGridR style={{fontSize:'30px'}} />
<span>Каталог товаров</span>
</div>
<div className={s.search_inp}>
<LiaSearchSolid style={{marginLeft:'20px',color:'red',fontSize:'20px'}} />
    <input  type="text" placeholder='Поиск среди 8 637 350 компонентов, электроники, приборов, электрики, автозапчастей, инструментов, сантехники…' />
</div>
</div></>):(<div className={s.logo}>
<Image src={img1} alt="" />
<div className={s.loc}>
<IoLocationSharp style={{marginTop:'5px'}} />
        <p><strong>Россия</strong> <br /> Магазины и оптовые отделы</p>
</div>
</div>)}

<div className={s.kirish}>
<div className={s.order}>
<FaRegUserCircle style={{fontSize:'30px'}}  /><br />
<span>Вход</span>
</div>
<div className={s.order}>
<BsFillBoxSeamFill style={{fontSize:'30px'}} /><br />
<span>Статус заказа</span>
</div>
<div className={s.order}>
<HiOutlineClipboardDocumentList style={{fontSize:'30px'}} /><br />
<span>BOM</span>
</div>
<div className={s.order}>
<IoCartOutline style={{fontSize:'30px'}} /><br />
<span>Корзина</span>
</div>
</div>
</div>
<div className={s.search}>
<div className={s.red}>
<CgMenuGridR style={{fontSize:'30px'}} />
<span>Каталог товаров</span>
</div>
<div className={s.search_inp}>
<LiaSearchSolid style={{marginLeft:'20px',color:'red',fontSize:'20px'}} />
    <input type="text" placeholder='Поиск среди 8 637 350 компонентов, электроники, приборов, электрики, автозапчастей, инструментов, сантехники…' />
</div>
</div>

    </>
  )
}
