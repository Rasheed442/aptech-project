import React from 'react'
import style from '../styles/brand.module.css'
import Image from 'next/image'
import Link from 'next/link'
function Brands() {
  return (
    <>
      <div className={style.header}>
          <h1>Meet the brands.</h1>
        <p>A curation of the best on-demand delivery brands</p>
      </div>

      <div className={style.grid}>
           <div className={style.main}>
               <Image
               priority
               src='/mil.jpg'
               height={200}
               width={350}
               />
               <h3>Jollof & co..</h3>
               <div className={style.detail}>
                <h5>Everyday naija favorite</h5>
                 <Link href='/'><p>View more</p></Link>
               </div>
           </div>
           <div className={style.main}>
               <Image
               priority
               src='/meal1.png'
               height={200}
               width={350}
               />
               <h3>Wing Kings</h3>
               <div className={style.detail}>
                <h5>Good chicken and more</h5>
                 <Link href='/'><p>View more</p></Link>
               </div>
           </div>
           <div className={style.main}>
               <Image
               priority
               src='/meal2.webp'
               height={200}
               width={350}
               />
               <h3>CHòW Asian</h3>
               <div className={style.detail}>
                <h5>Delicious & authentic<br/>Asian flavours</h5>
                 <Link href='/'><p>View more</p></Link>
               </div>
           </div>
           <div className={style.main}>
               <Image
               priority
               src='/meal3.jpg'
               height={200}
               width={350}
               />
               <h3>Sunny Side Club</h3>
               <div className={style.detail}>
                <h5>Breakfast to start your<br/> day right</h5>
                 <Link href='/'><p>View more</p></Link>
               </div>
           </div>
           <div className={style.main}>
               <Image
               priority
               src='/meal4.jpg'
               height={200}
               width={350}
               />
               <h3>Mama's Kitchen</h3>
               <div className={style.detail}>
                <h5>Mama&apos; special native<br/> dishes</h5>
                 <Link href='/'><p>View more</p></Link>
               </div>
           </div>
           <div className={style.main}>
               <Image
               priority
               src='/meal5.webp'
               height={200}
               width={350}
               />
               <h3>Sweat Treats</h3>
               <div className={style.detail}>
                <h5>All day Treats</h5>
                 <Link href='/'><p>View more</p></Link>
               </div>
           </div>
           <div className={style.main}>
               <Image
               priority
               src='/meal6.webp'
               height={200}
               width={350}
               />
               <h3>Frankies</h3>
               <div className={style.detail}>
                <h5>Burger, hotdogs more!</h5>
                 <Link href='/'><p>View more</p></Link>
               </div>
           </div>
           <div className={style.main}>
               <Image
               priority
               src='/meal7.jpg'
               height={200}
               width={350}
               />
               <h3>Wrap City</h3>
               <div className={style.detail}>
                <h5>Delicious shawarma<br/> wraps & more.</h5>
                 <Link href='/'><p>View more</p></Link>
               </div>
           </div>
           <div className={style.main}>
               <Image
               priority
               src='/meal8.webp'
               height={200}
               width={350}
               />
               <h3>FC Shops</h3>
               <div className={style.detail}>
                <h5>Snacks,liquor<br/>essentials & more</h5>
                 <Link href='/'><p>View more</p></Link>
               </div>
           </div>
      </div>

    </>
  )
}

export default Brands