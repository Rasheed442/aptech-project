import React, { useEffect, useState } from "react";
import styles from "../styles/signup.module.css";
import Link from "next/link";
import Aos from "aos";
import "aos/dist/aos.css";
function Signup() {
  const [name , setName] = useState()
  const [password , setPassword] = useState()
  const [email , setEmail] = useState()


  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);
  
  async function handle(e){
    const details = {name,password,email}
    e.preventDefault();
    const response = await fetch ("https://x8ki-letl-twmt.n7.xano.io/api:O8cBFVK1/authentication",{
        method:"POST",
        headers:{"Content-Type":"application/json"},
        body:JSON.stringify(details)
    })
      const data = await response.json();
      console.log(data)
  }

  return (
    <div className={styles.background}>

     <div className={styles.contain} >
        <form onSubmit={handle}>
          <div className={styles.main}>
            <h1>Signup &#128522;</h1>
            <div className={styles.flex}>
              <label>First Name:</label>
              <input type="text" onChange={(e)=> {setName(e.target.value)}}/>
            </div>
            <div className={styles.flex}>
              <label>Email:</label>
              <input type="email"  onChange={(e)=> {setEmail(e.target.value)}}/>
            </div>
            <div className={styles.flex}>
              <label>Password</label>
              <input type="password"  onChange={(e)=> {setPassword(e.target.value)}}/>
            </div>
           
            <button type="submit" >Signup</button>

            
          </div>
        </form>
        
    
    

      </div>
    </div>
  );
}

export default Signup;
