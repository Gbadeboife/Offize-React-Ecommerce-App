import React from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
    
import { ScrollTrigger } from "gsap/ScrollTrigger";


function Subscribe(){    


    gsap.registerPlugin(useGSAP,ScrollTrigger);

    useGSAP(()=>{
        const tl1= gsap.timeline({
            scrollTrigger: {
                trigger: '.subscribe',
                start: 'top 90%',
            }
        })

        tl1.from('.subscribe h2', {
            y: 40,
            opacity: 0,
            duration: 0.5,
        })

    })

    return(
        <div className='subscribe'>
            <h2>Subscribe to our newsletter and get updates on our latest discounts</h2>
            <p>Get up to 20% off on your first order by subscribing to our newsletter</p>
            <input type="email"  placeholder='Enter your email'/>
            <button>Subscribe</button>
        </div>
    )
 }


 export default Subscribe