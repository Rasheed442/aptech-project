import React from 'react'
import style from '../styles/faq.module.css'
import {GrAddCircle} from 'react-icons/gr'
import Image from 'next/image'
import Link from 'next/link'
function Faq() {
  return (
    <>
      <div className={style.container}>
           <h1>Frequently asked <br/>questions</h1>

<div className={style.main}>
            <div className={style.question}>
                  <div className={style.order}>
                      <p>How do i order?</p>
                      <GrAddCircle size={25}/>
                  </div>
              </div>
            <div className={style.question}>
                  <div className={style.order}>
                      <p>Top up my wallet</p>
                      <GrAddCircle size={25}/>
                  </div>
              </div>
            <div className={style.question}>
                  <div className={style.order}>
                      <p>Our Discount rate</p>
                      <GrAddCircle size={25}/>
                  </div>
              </div>
            <div className={style.question}>
                  <div className={style.order}>
                      <p>Our Deliver fees</p>
                      <GrAddCircle size={25}/>
                  </div>
              </div>
            <div className={style.question}>
                  <div className={style.order}>
                      <p>Issues & disputes</p>
                      <GrAddCircle size={25}/>
                  </div>
              </div>
            <div className={style.question}>
                  <div className={style.order}>
                      <p>edit your cart order</p>
                      <GrAddCircle size={25}/>
                  </div>
              </div>
            <div className={style.question}>
                  <div className={style.order}>
                      <p>our payment options</p>
                      <GrAddCircle size={25}/>
                  </div>
              </div>
</div>

      </div>

    <h1 className={style.h1} style={{textAlign:"center", margin:"30px"}}>Got more questions, let us knoow</h1>

    
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

export default Faq