import React, { useEffect, useRef } from "react";
import pdf from '../pdf/resume.pdf';
import hero from './data/hero.json';
import Typed from "typed.js";




 const Home =()=>{
   const typedRef = useRef(null)
   useEffect(()=>{
      const options ={
         strings:["welcome to my profile","i am Abhishek Nishad",
         "i am full stack developer"],
         typedSpeed:80,
         backSpeed:80,
         loop:true
      }
      const typed = new Typed(typedRef.current , options)
      return()=>{
         typed.destroy()
      }
   })
    return(
    <>
    <div className="container home" id="home">
     <div className="left" data-aos="fade-up-right"
        data-aos-duration="1000">
      <h1 ref={typedRef}> </h1>

      <a href={pdf}download="resume.pdf" className="btn btn-outline-warning my-3">Download Resume</a>
    
      </div>

    <div className="right">
      <div className="img" data-aos="fade-up-left"
        data-aos-duration="1000">
         <img src={`/assets/images/${hero.imgSrc}`} alt="hero" />
      </div>
     </div>
    </div>
    </>
    )
 }

 export default Home