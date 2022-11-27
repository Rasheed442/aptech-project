import React from 'react'
import style from '../styles/main.module.css'
import Image from 'next/image'
import {AiFillStar} from 'react-icons/ai'
function Main() {
  return (
    <>
       <div className={style.header}>
          <p>Discover</p>
          <h1>Most Popualar Dishes</h1>
       </div>

<div className={style.flex} >

       <div className={style.dish} data-aos='slide-up' data-aos-duration='500'>
          <Image
          priority
          src='/meal.jpeg'
          height={300}
          width={300}
          />
          <p>ITALIAN SOURCE MUSHROOM</p>
          <p>$19.9</p>
        <div className={style.star}>
            <AiFillStar/>
            <AiFillStar/>
            <AiFillStar/>
            <AiFillStar/>
            <AiFillStar/> 
          </div>
       </div>

       <div className={style.dish} data-aos='slide-up' data-aos-duration='700'> 
          <Image
          priority
          src='/meal.jpeg'
          height={300}
          width={300}
          />
          <p>CRAS WITH CURRY SOURCES</p>
          <p>$13.9</p>
        <div className={style.star}>
            <AiFillStar/>
            <AiFillStar/>
            <AiFillStar/>
            <AiFillStar/>
            <AiFillStar/> 
          </div>
       </div>
       
       <div className={style.dish} data-aos='slide-up' data-aos-duration='900'>
          <Image
          priority
          src='/meal.jpeg'
          height={300}
          width={300}
          />
          <p>ITALIAN SOURCE MUSHROOM</p>
          <p>$14.9</p>
        <div className={style.star}>
            <AiFillStar/>
            <AiFillStar/>
            <AiFillStar/>
            <AiFillStar/>
            <AiFillStar/> 
          </div>
       </div>
       
       <div
       className={style.dish}
       data-aos='slide-up' data-aos-duration='1100'
       >
          <Image
          priority
          src='/meal.jpeg'
          height={300}
          width={300}
          />
          <p>PORK WITH ITALIAN SALSA</p>
          <p>$22.9</p>
        <div className={style.star}>
            <AiFillStar/>
            <AiFillStar/>
            <AiFillStar/>
            <AiFillStar/>
            <AiFillStar/> 
          </div>
       </div>
       <div
       className={style.dish}
       data-aos='slide-up' data-aos-duration='1300'
       >
          <Image
          priority
          src='/meal.jpeg'
          height={300}
          width={300}
          />
          <p>PORK WITH ITALIAN SALSA</p>
          <p>$22.9</p>
        <div className={style.star}>
            <AiFillStar/>
            <AiFillStar/>
            <AiFillStar/>
            <AiFillStar/>
            <AiFillStar/> 
          </div>
       </div>
       <div
       className={style.dish}
       data-aos='slide-up' data-aos-duration='1500'
       >
          <Image
          priority
          src='/meal.jpeg'
          height={300}
          width={300}
          />
          <p>PORK WITH ITALIAN SALSA</p>
          <p>$22.9</p>
        <div className={style.star}>
            <AiFillStar/>
            <AiFillStar/>
            <AiFillStar/>
            <AiFillStar/>
            <AiFillStar/> 
          </div>
       </div>
      
       
</div>
    </>
  )
}

export default Main