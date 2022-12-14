import Head from 'next/head'
import React, {useEffect} from 'react'
import Navbar from '../component/Navbar'
import styles from '../styles/Home.module.css'
import Image from 'next/image'
import Aos from "aos";
import "aos/dist/aos.css";
import Main from '../component/Main'

export default function Home() {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);
  return (
    <>
      <Head>
        <title>Tani&apos;s Restaurant</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/food.jpeg" />
      </Head>


      <div className={styles.container}>

      <div className={styles.bg1}>
            <div className={styles.rotate}>   
            <div className={styles.line}></div> 
             <h1>Welcome to the <br/>world of Tasty & <br/>Fresh Food.</h1>
             </div>

             <div className={styles.main} data-aos='zoom-in'  data-aos-duration='2500'> 
              <h1>TANNY&apos;S</h1>
              <h2>RESTAURANT.</h2>
             </div>
       </div>

         <div className={styles.bg2}> </div>

      </div>

          <div className={styles.breakfast} data-aos='fade-right'>
              <h1>Breakfast</h1>
              <p>9:00am - 11:00am</p>
          </div>

    <div className={styles.allmeal} data-aos='zoom-in'>
          <div className={styles.meal}>
            <Image 
            priority
            src='/meal1.webp'
            width={40}
            height={40}
            />
            <p>Tasty & Fresh Food</p>
          </div>
          <div className={styles.meal}>
            <Image 
            priority
            src='/food.jpeg'
            width={40}
            height={40}
            />
            <p>Tasty & Fresh Food</p>
          </div>
          <div className={styles.meal}>
            <Image 
            priority
            src='/tea.jpeg'
            width={40}
            height={40}
            />
            <p>Tasty & Fresh Food</p>
          </div>
          <div className={styles.meal}>
            <Image 
            priority
            src='/fruit.jpeg'
            width={40}
            height={40}
            />
            <p>Tasty & Fresh Food</p>
          </div>
       

</div>




          <div className={styles.breakfast} data-aos='fade-right'>
              <h1>Launch</h1>
              <p>12:00pm - 5:00pm</p>
          </div>

    <div className={styles.allmeal} data-aos='zoom-in'>
          <div className={styles.meal}>
            <Image 
            priority
            src='/meal1.webp'
            width={40}
            height={40}
            />
            <p>Tasty & Fresh Food</p>
          </div>
          <div className={styles.meal}>
            <Image 
            priority
            src='/food.jpeg'
            width={40}
            height={40}
            />
            <p>Tasty & Fresh Food</p>
          </div>
          <div className={styles.meal}>
            <Image 
            priority
            src='/tea.jpeg'
            width={40}
            height={40}
            />
            <p>Tasty & Fresh Food</p>
          </div>
          <div className={styles.meal}>
            <Image 
            priority
            src='/fruit.jpeg'
            width={40}
            height={40}
            />
            <p>Tasty & Fresh Food</p>
          </div>
       

</div>
          <div className={styles.breakfast} data-aos='fade-right'>
              <h1>Dinner</h1>
              <p>5:00pm...........</p>
          </div>

    <div className={styles.allmeal} data-aos='zoom-in'>
          <div className={styles.meal}>
            <Image 
            priority
            src='/meal1.webp'
            width={40}
            height={40}
            />
            <p>Tasty & Fresh Food</p>
          </div>
          <div className={styles.meal}>
            <Image 
            priority
            src='/food.jpeg'
            width={40}
            height={40}
            />
            <p>Tasty & Fresh Food</p>
          </div>
          <div className={styles.meal}>
            <Image 
            priority
            src='/tea.jpeg'
            width={40}
            height={40}
            />
            <p>Tasty & Fresh Food</p>
          </div>
          <div className={styles.meal}>
            <Image 
            priority
            src='/fruit.jpeg'
            width={40}
            height={40}
            />
            <p>Tasty & Fresh Food</p>
          </div>
       

</div>
      






          <div className={styles.content}>
            <Image
            priority
            src='/meal2.png'
            width={700}
            height={600}
            data-aos='slide-right'
            />
            <div className={styles.health} data-aos='fade-up'>
            <h1>The Healthy Food <br/> Walthy Mood</h1>
            <p>Enjoy a curation of chef prepared meals from the<br/> best delivery brands.
            Order across multiple brands <br/>in a single order!,Get food, snacks, liquor &<br/> convenience goods, 
            all in one basket.Order together<br/> with friends from different devices & split the bill.
            </p>
            <button>Learn More</button>
            </div>
          </div>
      <Main/>
    </>
  )
}