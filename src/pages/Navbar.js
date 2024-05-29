import React, { useEffect, useState } from 'react'
import s from "../styles/Navbar.module.css"
import Image from 'next/image'
import { IoCartOutline } from "react-icons/io5";
import { CgMenuGridR } from "react-icons/cg";
import { AiOutlineEyeInvisible } from "react-icons/ai";
import { FaRegUserCircle } from "react-icons/fa";
import { LiaSearchSolid } from "react-icons/lia";
import { MdArrowForwardIos } from "react-icons/md";
import { BsFillBoxSeamFill } from "react-icons/bs";
import { HiOutlineClipboardDocumentList } from "react-icons/hi2";
import img1 from "../images/logo1.png"
import { BsEye } from "react-icons/bs";
// import GlobalStore from './GlobalStore';
import { IoLocationSharp } from "react-icons/io5";
import { IoCloseSharp } from "react-icons/io5";
import axios from 'axios';
import url from "./host.js"
export default function Navbar() {
  const [showNavbar, setShowNavbar] = useState(true);
  var [category, setCategory] = useState([])
  var [allSubcategory, setAllSubCategory] = useState([])
  var [company, setCompany] = useState([{}])
  var [subId, setSubId] = useState(0)
  function getCategory() {
    axios.get(`${url()}/api/category`).then(res => {
      var a = []
      var b = []
      for (let i = 0; i < res.data.length; i++) {
        if (res.data[i].subcategory == 0) {
          a.push(res.data[i])
        } else {
          b.push(res.data[i])
        }
      }
      for (let i = 0; i < a.length; i++) {
        a[i].big = false
        for (let j = 0; j < b.length; j++) {
          if (a[i].id == b[j].subcategory) {
            a[i].big = true
          }
        }
      }

      setAllSubCategory(b)
      setCategory(a)
    }).catch(err => {

    })
  }
  function getCompany1() {
    axios.get(`${url()}/api/company`).then(res => {
      console.log(res.data);
      if (res.data.length > 0) {
        setCompany(res.data)
      }
    })
  }

  var [searchCategory, setSearchCategory] = useState([])
  var [searchProduct, setSearchProduct] = useState([])
  var [count, setCount] = useState(0)
  function search_d(inp) {
    console.log(inp);
    var a = 7
    axios.get(`${url()}/api/category`).then(res => {
      setSearchCategory([])
      setSearchProduct([])
      var b = res.data.filter(item => item.category_title.includes(inp))
      if (b.length < 7) {
        setSearchCategory(b)
        a = a - b.length
        axios.get(`${url()}/api/product?limit=100`).then(res1 => {
          var d = res1.data.filter(item => item.name.includes(inp))
          setSearchProduct(d.slice(0, a))
        })
      } else {
        setSearchCategory(b.slice(0, 7))
      }
    })
  }
  useEffect(() => {
    if (localStorage.getItem('buy')) {
      setCount((JSON.parse(localStorage.getItem('buy'))).length)
    }

  })
  var [search_vid, setSearchVid] = useState(false)
  useEffect(() => {
    getCategory()
    getCompany1()
    const handleScroll = () => {
      if (window.pageYOffset >= 530) {
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
      {/* <div className={s.navbar}>
        <a style={{ textDecoration: 'none', color: 'black' }} href={`tel:+${company[0].phone}`} className={s.border}>+{company[0].phone}</a>
        <div className={s.chipdip}>
          <span>CHIPDIP организациям</span>
        </div>
      </div> */}
      <div className={s.status}>
        {!showNavbar ? (<><div id={s.search1} className={s.search}>
          <div onMouseLeave={() => {
            document.querySelector("#menu").style = "display:none"

          }} onClick={() => {
            document.querySelector("#menu").style = "display:block"
          }} className={s.red}>
            <CgMenuGridR style={{ fontSize: '30px' }} />
            <span>Maxsulot turlari</span>

            <div id='menu' className={s.catalog_menu}>
              <div className={s.catalog_toolbar}>
                <div className={s.bigac}>
                  <div className={s.accor}>
                    {category.map((item, key) => {
                      if (item.big) {
                        return <div style={{ cursor: 'pointer' }} onClick={() => { window.location = `/popular/${item.id}?title=${item.category_title}` }} onMouseEnter={() => {
                          document.querySelector("#nom").style = 'display:grid'; setSubId(item.id)
                        }} className={s.accordf}>
                          <h3 style={{ textAlign: 'left' }}>{item.category_title}</h3>
                          <MdArrowForwardIos className={s.forward} />
                        </div>
                      } else {
                        return <div onClick={() => { window.location = `/catalog/${item.category_id}?title=${item.category_title}` }} style={{ cursor: 'pointer' }} onMouseEnter={() => {
                          document.querySelector("#nom").style = 'display:none'
                        }} className={s.accordf}>
                          <h3 style={{ textAlign: 'left' }}>{item.category_title}</h3>
                        </div>
                      }


                    })}


                  </div>
                </div>
                <div className={s.yoq}>
                  <div id='nom' className={s.sub_category}>
                    <div onMouseLeave={() => {
                      document.querySelector("#nom").style = 'opacity:0;'

                    }} className={s.modul}>
                      <ul>
                        {allSubcategory.map((item, key) => {
                          if (item.subcategory == subId) {
                            return <li onClick={() => { window.location = `/catalog/${item.category_id}?title=${item.category_title}` }} style={{ cursor: 'pointer' }}  >{item.category_title}</li>
                          }
                        })
                        }
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>


          </div>
          <div onMouseLeave={() => { setSearchVid(false) }} className={s.search_inp}>
            <LiaSearchSolid style={{ marginLeft: '20px', color: 'red', fontSize: '20px' }} />
            <input onKeyUp={(e) => search_d(e.target.value)} onClick={() => { setSearchVid(true) }} type="text" placeholder='1000dan ortiq maxsulotlar, elektronika, maishiy texnika, elektrotexnika, avtomobil qismlari, asboblar, sanitariya-tesisat...' />
            {search_vid ? (<div id='search_res' className={s.search_result}>
             {searchCategory.length>0 && <><h5>Maxsulot turlari</h5>
              <ul>
                {  searchCategory.map(item => {
                  return <li onClick={() => { window.location = `/catalog/${item.category_id}?title=${item.category_title}` }} >{item.category_title}</li>
                })}
              </ul></> } 
            { searchProduct.length>0 && <>
              <h5>Tezroq topish</h5>
              <ul className={s.product_search} >
                {searchProduct.map(item => {
                  return <li onClick={() =>{window.location=`/productone/${item.id}?dr=${item.productFolder.meta.href.slice(-36)}` }} ><img src={`${item.images && item.images.rows && item.images.rows[0].miniature.downloadHref}`} style={{ height: '30px' }} alt="" />{item.name}<h6>{item.minPrice.value / 100} so`m</h6></li>
                })}

              </ul></> }  
            </div>) : (<></>)}

          </div>
        </div></>) : (<div className={s.logo}>
          <div onClick={() => window.location = "/"} className={s.img_logo}>
            <img src={company[0].image} alt="" />
          </div>
          <div className={s.loc}>
            <IoLocationSharp style={{ marginTop: '5px' }} />
            <p><strong>{company[0].address}</strong> <br /> Do'konlar va ulgurji bo'limlar</p>
          </div>
        </div>)}

        <div className={s.kirish}>
          <div onClick={()=>{
            document.querySelector("#modalk").style='display:flex'
          }} className={s.order}>
            <FaRegUserCircle className={s.navbar_icon} /><br />
            <span>Kirish</span>
          </div>
          {/* <div className={s.order}>
<BsFillBoxSeamFill style={{fontSize:'30px'}} /><br />
<span>Статус заказа</span>
</div>
<div className={s.order}>
<HiOutlineClipboardDocumentList style={{fontSize:'30px'}} /><br />
<span>BOM</span>
</div> */}
          <div style={{cursor:'pointer'}} onClick={() => window.location = "/cart_empty"} className={s.order}>
            <IoCartOutline className={s.navbar_icon} /><sup>{count}</sup><br />

            <span>Karzinka</span>
          </div>
        </div>
      </div>
      <div className={s.search}>
        <div onClick={() => {
          document.querySelector("#nom1").style = "opacity:0"
          document.querySelector("#menu1").style = "display:block"
        }} className={s.red}>
          <CgMenuGridR style={{ fontSize: '30px' }} />
          <span>Maxsulot turlari</span>
        </div>
        <div onMouseLeave={() => setSearchVid(false)} className={s.search_inp}>
          <LiaSearchSolid style={{ marginLeft: '20px', color: 'red', fontSize: '20px' }} />
          <input onKeyUp={(e) => search_d(e.target.value)} type="text" onClick={() => { setSearchVid(true) }} placeholder='1000dan ortiq maxsulotlar, elektronika, maishiy texnika, elektrotexnika, avtomobil qismlari, asboblar, sanitariya-tesisat...' />
          {search_vid ? (<div id='search_res' className={s.search_result}>
             {searchCategory.length>0 && <><h5>Maxsulot turlari</h5>
              <ul>
                {  searchCategory.map(item => {
                  return <li style={{cursor:'pointer'}}  onClick={() => { window.location = `/catalog/${item.category_id}?title=${item.category_title}` }} >{item.category_title}</li>
                })}
              </ul></> } 
            { searchProduct.length>0 && <>
              <h5>Tezroq topish</h5>
              <ul className={s.product_search} >
                {searchProduct.map(item => {
                  return <li onClick={() =>{window.location=`/productone/${item.id}?dr=${item.productFolder.meta.href.slice(-36)}` }} ><img src={`${item.images && item.images.rows && item.images.rows[0].miniature.downloadHref}`} style={{ height: '30px' }} alt="" />{item.name}<h6>{item.minPrice.value / 100} so`m</h6></li>
                })}

              </ul></> }  
            </div>) : (<></>)}
        </div>
        <div id='menu1' onMouseLeave={() => {
          document.querySelector("#menu1").style = "display:none"
        }} className={s.catalog_menu}>
          <div className={s.catalog_toolbar}>
            <div className={s.bigac}>
              <div className={s.accor}>
                {category.map((item, key) => {
                  if (item.big) {
                    return <div style={{ cursor: 'pointer' }} onClick={() => { window.location = `/popular/${item.id}?title=${item.category_title}` }} onMouseEnter={() => {
                      document.querySelector("#nom1").style = 'display:grid'; setSubId(item.id)
                    }} className={s.accordf}>
                      <h3 style={{ textAlign: 'left' }}>{item.category_title}</h3>
                      <MdArrowForwardIos className={s.forward} />
                    </div>
                  } else {
                    return <div onClick={() => { window.location = `/catalog/${item.category_id}?title=${item.category_title}` }} style={{ cursor: 'pointer' }} onMouseEnter={() => {
                      document.querySelector("#nom1").style = 'display:none'
                    }} className={s.accordf}>
                      <h3 style={{ textAlign: 'left' }}>{item.category_title}</h3>
                    </div>
                  }


                })}

              </div>
            </div>
            <div className={s.yoq}>
              <div id='nom1' className={s.sub_category}>
                <div onMouseLeave={() => {
                  document.querySelector("#nom1").style = 'opacity:0;'

                }} className={s.modul}>
                  <ul>
                    {allSubcategory.map((item, key) => {
                      if (item.subcategory == subId) {
                        return <li onClick={() => { window.location = `/catalog/${item.category_id}?title=${item.category_title}` }} style={{ cursor: 'pointer' }}  >{item.category_title}</li>
                      }

                    })

                    }
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>


      
      </div>
  <div id='modalk'  className={s.modalkir}>
            <div className={s.whitemodal}>
              <div className={s.white}>
                <IoCloseSharp onClick={()=>{
                  document.querySelector("#modalk").style='display:none'
                }} className={s.sharp} />
                <h3>Kirish yoki ro'yxatdan o'tish</h3>
                <label htmlFor="">Login yoki elektron pochta
</label>
                <input type="text" />

                <label htmlFor="">Parol</label>
                    <input className={s.rela} type="password" name="" id="pass" /><AiOutlineEyeInvisible className={s.invisible} id='bse' onClick={()=>{
                      document.querySelector("#bse1").style='display:block'
                      document.querySelector("#pass").type='text'
                      document.querySelector("#bse").style='display:none'
                    }} />
                    <BsEye id='bse1' className={s.invisible1} onClick={()=>{
                      document.querySelector("#bse1").style='display:none'
                      document.querySelector("#pass").type='password'
                      document.querySelector("#bse").style='display:block'
                    }} />
                    <button>Kirish</button><br />
                    <a href="">Parolni unutdingizmi?</a><br />
                   
                    <span>Hisob yo'qmi?<a href="">Roʻyxatdan oʻtish</a> </span>
                    <h4>Ijtimoiy tarmoqlar orqali</h4>
                    <div className={s.sayt}>
                    <div className={s.google}>
                      <img src="https://cdn1.iconfinder.com/data/icons/google-s-logo/150/Google_Icons-09-512.png" alt="" />
                    </div>
                    <div className={s.google}>
                      <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f3/VK_Compact_Logo_%282021-present%29.svg/2048px-VK_Compact_Logo_%282021-present%29.svg.png" alt="" />
                    </div>
                    <div className={s.google}>
                      <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/58/Yandex_icon.svg/2048px-Yandex_icon.svg.png" alt="" />
                    </div>
                    <div className={s.google}>
                      <img src="https://companieslogo.com/img/orig/RL9A.F-1749ce42.png?t=1604430964" alt="" />
                    </div>
                    </div>
              </div>
              </div>        
        </div>
    </>
  )
}
