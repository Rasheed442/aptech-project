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
      <div className={style.navmenu} data-aos='fade-down'>
        <Link href="/">
          <p>Home</p>
        </Link>
        <Link href="/">
          <p>Menu</p>
        </Link>
        <Link href="/">
          <p>Reservation</p>
        </Link>
        <Link href="/">
          <p>Shop</p>
        </Link>
        <Link href="/">
          <h2>
            <span style={{ color: "goldenrod" }}>Tani&apos;s </span>Restaurant
          </h2>
        </Link>
        <Link href="/">
          <p>Blog</p>
        </Link>
        <Link href="/">
          <p>About Us</p>
        </Link>
        <Link href="/">
          <p>Page</p>
        </Link>
        <Link href="/">
          <p>Contact</p>
        </Link>
      </div>
    </div>
  );
}

export default Navbar;
