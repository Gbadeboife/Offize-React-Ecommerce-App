import React from "react";
import {AdvancedImage} from '@cloudinary/react';
import {Link} from "react-router-dom"
import {faStar} from '@fortawesome/free-solid-svg-icons';
import {faStar as faRegStar} from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
    
import { ScrollTrigger } from "gsap/ScrollTrigger";



function Topselling ({list,cld}){
    const slicedList=list.slice(0,5)

    gsap.registerPlugin(useGSAP,ScrollTrigger);

    useGSAP(()=>{
        const tl1= gsap.timeline({
            scrollTrigger: {
                trigger: '.top-selling',
                start: 'top 90%',
            }
        })

        tl1.from('.top-selling h2', {
            y: 20,
            opacity: 0,
            duration: 0.7,
        })

    })

    return(
      <div id="top-selling">
        <h2>Top selling items</h2>
        <div className="top-s-scr">
          <div className="top-selling">
          {slicedList.map((item)=>{
            var myImage=cld.image(`office ecommerce/products/${item.categ}/${item.title}`);
            const calcDisc=100 - parseInt(item.discount)
            const origPrice=parseInt(parseInt(item.price) * 100 / calcDisc)
            let stars = []
            let regStars= []
              for(let i=1;i<= parseInt(item.rating);i++){
                stars.push(<FontAwesomeIcon icon={faStar} />);
              }
              for(let i=1;i<= 5-stars.length;i++){
                regStars.push( <FontAwesomeIcon icon={faRegStar} />);
              }
              
            return(
              <div className="product">
                <Link to={`/product: ${item.name}`}  className='product-link'>
                  <figure>
                    <AdvancedImage cldImg={myImage} className="image"/>
                  </figure>
                  <p>{item.name}</p>
                  <span>${item.price}.99</span>
                  <span className="orig-price">${origPrice}.99</span>
                  <span>{stars}{regStars}</span>
                  <b>-{item.discount}%</b>
                </Link>
              </div>
        )
         })}
          </div>
          </div>
          </div>
      
    )
}

export default Topselling