import React from 'react'
import style from '../styles/main.module.css'
import Image from 'next/image'
import {AiFillStar} from 'react-icons/ai'
import Link from "next/link"
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
          src='/food.jpeg'
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
          src='/food1.webp'
          height={300}
          width={300}
          />
          <p>WING KINGS...</p>
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
          src='/food2.jpeg'
          height={300}
          width={300}
          />
          <p>SUNNY SIDE CLUB</p>
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
          src='/food3.jpeg'
          height={300}
          width={300}
          />
          <p>ITALIAN SPAGHETTI AND MUSH...</p>
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
          src='/food4.jpeg'
          height={300}
          width={300}
          />
          <p>Frankies</p>
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
    


    <div className={style.headline}>
        <h1>Made To Order </h1> 
        <p>Swift speed of service, freshly prepared tasty meals, served to your specification and dining pleasure.</p>
        <h1>Inter-continental Dishes</h1>
        <p>Enjoy the Dining adventures all day, everyday.</p>
       <Link href='book'><button>Book Now</button></Link> 
    </div>


    </>
  )
}

export default Main