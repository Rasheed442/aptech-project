import React, { useState, useEffect } from "react";
import Link from "next/link";
import style from "../styles/navbar.module.css";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import Aos from "aos";
import "aos/dist/aos.css";
function Navbar() {
  const [open, setOpen] = useState(true);

  useEffect(() => {
    Aos.init({ duration: 500 });
  }, []);
  return (
    <div>
      <div className={style.header}>
        <Link href="/">
          <h1>
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
      <Link href="/" data-aos='fade-down' data-aos-duration='500'>
          <p>Home</p>
        </Link>
        <Link href="/" data-aos='fade-down' data-aos-duration='700'>
          <p>Menu</p>
        </Link>
        <Link href="/" data-aos='fade-down' data-aos-duration='900'>
          <p>Reservation</p>
        </Link>
        <Link href="/" data-aos='fade-down' data-aos-duration='1100'>
          <p>Shop</p>
        </Link>
        <Link href="/" data-aos='fade-down' data-aos-duration='1300'>
          <h2>
            <span style={{ color: "goldenrod" }}>Tani&apos;s </span>Restaurant
          </h2>
        </Link>
        <Link href="/" data-aos='fade-down' data-aos-duration='1500'>
          <p>Blog</p>
        </Link>
        <Link href="/" data-aos='fade-down' data-aos-duration='1700'>
          <p>About Us</p>
        </Link>
        <Link href="/" data-aos='fade-down' data-aos-duration='1900'>
          <p>Contact</p>
        </Link>
        <Link href="/" data-aos='fade-down' data-aos-duration='2100' className={style.special}>
          <p>Book Now</p>
        </Link>
      </div>



      {open  ?"": <div className={style.navmenu} data-aos='slide-right'>
        <Link href="/" data-aos='fade-down' data-aos-duration='500'>
          <p>Home</p>
        </Link>
        <Link href="/" data-aos='fade-down' data-aos-duration='700'>
          <p>Menu</p>
        </Link>
        <Link href="/" data-aos='fade-down' data-aos-duration='900'>
          <p>Reservation</p>
        </Link>
        <Link href="/" data-aos='fade-down' data-aos-duration='1100'>
          <p>Shop</p>
        </Link>
        <Link href="/" data-aos='fade-down' data-aos-duration='1300'>
          <h2>
            <span style={{ color: "goldenrod" }}>Tani&apos;s </span>Restaurant
          </h2>
        </Link>
        <Link href="/" data-aos='fade-down' data-aos-duration='1500'>
          <p>Blog</p>
        </Link>
        <Link href="/" data-aos='fade-down' data-aos-duration='1700'>
          <p>About Us</p>
        </Link>
        <Link href="/" data-aos='fade-down' data-aos-duration='1900'>
          <p>Page</p>
        </Link>
        <Link href="/" data-aos='fade-down' data-aos-duration='2100'>
          <p>Contact</p>
        </Link>
      </div>}
    </div>
  );
}

export default Navbar;
