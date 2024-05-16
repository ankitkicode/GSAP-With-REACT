import { useGSAP } from '@gsap/react'
import React, { useRef } from 'react'
import gsap from 'gsap';


const App = () => {
  const gsapRef = useRef();
  
 
  useGSAP(()=>{
      gsap.to(gsapRef.current,{
        x:300,
        duration:2,
        repeat:-1,
        yoyo:true,
        ease:"power1.inOut",
      });
    })
    
  // useGSAP(()=>{
  //   gsap.to('.box',{
  //     x:300,
  //     duration:2,
  //     repeat:-1,
  //     yoyo:true,
  //     ease:"power1.inOut",
  //   });
  // })

  return (
    <main>
      <div ref={gsapRef} className="box"></div>
    </main>
  )
}

export default App
