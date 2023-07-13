import React, { useState } from "react";
import { Link } from "react-router-dom";
import {AdvancedImage} from '@cloudinary/react';
import {useParams} from "react-router-dom";
import { faStar } from '@fortawesome/free-solid-svg-icons';
import {faStar as faRegStar} from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';



function Productpage({addToCart,list,removeFromCart,cld}){
      const {name}=useParams()
      const [successMessage,setSuccessMessage]=useState(false)
      
      function displaySuccessMessage(){
        setTimeout(()=>{setSuccessMessage(true)},200)
        setTimeout(()=>{setSuccessMessage(false)},2000)
      }

    return(
      <div>
          <div className="dir">
            <span><Link to='/'>Home /</Link> <Link to='/shop'>Shop /</Link> {name}</span>
          </div>
            {list.filter((item)=>item.name === name).map((item)=>{
              var myImage=cld.image(`office ecommerce/products/${item.categ}/${item.title}`)
              const calcDisc=100 - parseInt(item.discount)
              const origPrice=parseInt(item.price) * 100 / calcDisc
              let stars = []
              let regStars= []
                for(let i=1;i<= parseInt(item.rating);i++){
                  stars.push(<FontAwesomeIcon icon={faStar}/>);
                }
                for(let i=1;i<= 5-stars.length;i++){
                  regStars.push( <FontAwesomeIcon icon={faRegStar} />);
                }
        
              return(
                    <div className="product-page">
                      <AdvancedImage cldImg={myImage} className="big-image"/>
                      <div>
                        <h5>{item.name}</h5>
                        <h6>Brand: {item.brand.charAt().toUpperCase()}{item.brand.slice(1)}</h6>
                        <span>{stars}{regStars} (21 product ratings)</span>
                        <p>${item.price}.99<br/><span className="orig-price-lg">${parseInt(origPrice)}.99</span><b>-{item.discount}%</b></p>
                        <p className="product-desc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis dolorem aliquam vitae possimus 
                        porro pariatur itaque nesciunt totam at dolor voluptatum, nihil rerum recusandae quas, unde error tenetur distinctio amet.
                        Viral typewriter fingerstache pinterest pork belly narwhal. Schlitz venmo everyday carry kitsch pitchfork chillwave iPhone.</p>
                        <button className="firstbtn">Buy Now</button>
                        
                        { item.amountInCart>0?
                          <div>
                            <button className="decrease" onClick={()=>{if (item.amountInCart > 1) {
                              item.amountInCart-= 1;
                            } else {
                              item.amountInCart=0;  
                              removeFromCart(item.id)
                            };displaySuccessMessage()}}>
                              -</button>
                          <span>{item.amountInCart}</span>
                          <button className="increase" onClick={()=>{item.amountInCart+=1;displaySuccessMessage()}}>+</button>
                          </div>
                          :
                          <button  onClick={()=>{
                            addToCart(item.id);
                            item.amountInCart=1
                            displaySuccessMessage()
                            }}
                            >Add to Cart</button>
                        }
                        {successMessage?
                          <span className="success-msg">{item.amountInCart} Product(s) added successfully</span>
                          :
                          null
                        }
                      </div>
                    </div>
              )})}
      </div>
    )
}

export default Productpage