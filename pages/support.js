import React from 'react'
import style from '../styles/support.module.css'
import Link from 'next/link'
import Image from 'next/image'
function support() {
  return (
    <>
        <div className={style.container}>
           <div className={style.main}>
               <h1>Contact Our Support</h1>
      <p>Got questions or concerns about our service, send us a message <br/>and we will get back to you soonest</p>
           </div>
        </div>

        <form className={style.center}>

        <div className={style.form}>

          <div className={style.mail}>
            <label>Email:</label>
            <input type='email' placeholder='Your email:'/>
          </div>

          <div className={style.message}>
            <label>Message:</label>
            <input type='text' placeholder='Drop a message:'/>
          </div>

          <button>Submit</button>

        </div>

   </form>

   <div className={style.back}> 
      <div className={style.app}>
        <div>
          <h1>Limiteles convenience<br/>on-demand.</h1>
         <Link href='book'><button>Book Now</button></Link> 
          </div>
              <Image
              priority
              src='/app.webp'
              height={500}
              width={350}
              />
      </div>
  </div>  

    </>
  )
}

export default support