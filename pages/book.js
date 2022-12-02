import React, { useEffect, useState } from "react";
import styles from "../styles/book.module.css";
import Link from "next/link";
import Aos from "aos";
import "aos/dist/aos.css";
function Book() {
  const [open , setOpen] = useState()
  const [name , setName] = useState()
  const [number , setNumber] = useState()
  const [email , setEmail] = useState()
  const [deitary, setDeitary] = useState()
  const [addresse, setAddresse] = useState()

  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);
 
  const details = {name, number,email,deitary,addresse}
  
  function handle(e) {
    e.preventDefault();    
    
     if( addresse  === undefined){
        alert("Please fill in the inputs")
     }
     else{
         console.log(details)
        setOpen(true)
     }

  }

  return (
    <div className={styles.background}>

     <div className={styles.contain} >
        {open ? "" : <form onSubmit={handle}>
          <div className={styles.main}>
            <h1>Place Your Orders &#128522;</h1>
            <div className={styles.flex}>
              <label>First Name:</label>
              <input type="text" onChange={(e)=> {setName(e.target.value)}}/>
            </div>
            <div className={styles.flex}>
              <label>Email:</label>
              <input type="email"  onChange={(e)=> {setEmail(e.target.value)}}/>
            </div>
            <div className={styles.flex}>
              <label>Phone Number</label>
              <input type="text"  onChange={(e)=> {setNumber(e.target.value)}}/>
            </div>
            <div className={styles.specific}>
              <label>Dietary Needs</label>
              <input type="text" onChange={(e)=> {setDeitary(e.target.value)}}/>
            </div>
            <div className={styles.flex}>
              <label>Home addresse:</label>
              <input type="text"  onChange={(e)=> {setAddresse(e.target.value)}} />
            </div>
            <button type="submit" >Submit,..</button>

            
          </div>
        </form>}
        
       { open ?<div data-aos='zoom-in' className={styles.main}>
            <h1>Thank You! {name}&#128522;</h1>
            <h2>Your Order Has Been Placed. </h2>
            <h2>You'll get them soon!!&#127939; &#127788;</h2>
        </div> :""}
    

      </div>
    </div>
  );
}

export default Book;
