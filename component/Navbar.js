import React, { useState, useEffect } from "react";
import Link from "next/link";
import style from "../styles/navbar.module.css";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import Aos from "aos";
import "aos/dist/aos.css";

function Navbar() {
  const [open, setOpen] = useState(true);
  const [color, setColor] = useState(false);
  const [color1, setColor1] = useState(false);
  const [color2, setColor2] = useState(false);
  useEffect(() => {
    Aos.init({ duration: 500 });
  }, []);
  return (
    <div>
      <div className={style.header}>
        <Link href="/">
          <h1 >
            <span style={{ color: "gold" }}>Tani&apos;s </span>Restaurant
          </h1>
        </Link>
        <div
          onClick={() => {
            setOpen(!open);
          }}
        >
          {open ? <AiOutlineMenu size={30} /> : <AiOutlineClose size={30} data-aos='zoom-in'/>}
        </div>
      </div>


  <div className={style.navlink} >
        <div className={style.name}>
        <Link href="/" data-aos='fade-down' data-aos-duration='1300'>
          <h2>
            <span style={{ color: "goldenrod" }}>Tani&apos;s </span>Restaurant
          </h2>
        </Link>
       <div className={style.link}>
       <Link href='brands' onClick={()=> {setColor(true), setColor1(false), setColor2(false)}}><p style={{color: color ?"red":""}}>Brands</p></Link> 
        <Link href='faqs' onClick={()=> {setColor(false),setColor2(false), setColor1(true)}}><p style={{color: color1 ?"red":""}}>FAQs</p></Link>
        <Link href='support' onClick={()=> {setColor2(true), setColor(false), setColor1(false)}}><p style={{color: color2 ?"red":""}}>Support</p></Link> 
       </div> 
      </div>
    
        <Link href="book" data-aos='fade-down' data-aos-duration='2100' className={style.special}>
          <p>Book Now</p>
        </Link>
      </div>



      {open  ?"": <div className={style.navmenu} data-aos='slide-right'>
      <Link href='brands'><p>Brands</p></Link> 
        <Link href='faqs'><p>FAQs</p></Link>
        <Link href='support'><p>Support</p></Link> 
        
        <Link href="book" data-aos='fade-down' data-aos-duration='2100' className={style.special}>
          <p>Book Now</p>
        </Link>
      </div>}
    </div>
  );
}

export default Navbar;
