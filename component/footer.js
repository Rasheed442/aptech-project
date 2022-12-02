import React from 'react'
import Link from 'next/link'
import style from '../styles/footer.module.css'
function Footer() {
  return (
<div>
    <div className={style.container}>
            <div className={style.main}>
                <Link href="/">
                <h1>
                    <span style={{ color: "gold" }}>Tani&apos;s </span>Restaurant
                </h1>
                </Link>
                <p>Home</p>
                <p>About Us</p>
                <p>Restaurant</p>
                <p>Bar & Lounge</p>
            </div>
            <div className={style.main}>
                <p>Hotel</p>
                <p>Career</p>
                <p>News & Update</p>
                <p>Contact</p>
                <p>Locations</p>
            </div>
            <div className={style.main}>
                <p>Get in Touch</p>
                <p>+2346672927726</p>
                <p>info@tanirestaurant.com</p>
                <p>aptech education Victoria Island</p>
                <p>copyright &copy; 2022 | Powered by the Aptech </p>
            </div>
    </div>
 </div>
  )
}

export default Footer