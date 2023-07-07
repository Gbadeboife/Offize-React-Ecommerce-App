import React from "react";
import {AdvancedImage} from '@cloudinary/react';
import {Cloudinary} from "@cloudinary/url-gen";
import { Link } from "react-router-dom";
import { useState,useEffect } from "react";
import { CardElement, useStripe, useElements, Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js'


const stripePromise = loadStripe('pk_test_51NP6OKJ7ASKs4YiQNNnlXYKfwKW61Kv5hjrKggH5UjokFqI45ImziNo8t7JdyIzX8A833FO2NDNQmZPFW6sXE4kl008llrPcd5');


function Cart({cartItems,removeFromCart}){

      const [subTotal,setSubTotal]=useState()
      const [summaryStatus,setSummaryStatus]=useState()
      const [successMessage,setSuccessMessage]=useState(false)


      function displaySuccessMessage(){
            setTimeout(()=>{setSuccessMessage(true)},200)
            setTimeout(()=>{setSuccessMessage(false)},2000)
      }

      const cld = new Cloudinary({
        cloud: {
          cloudName: 'dhdmchgsh'
        }
      })

      useEffect(()=>{
        if(cartItems.length > 0){
            var sum=0
            for(let i=0;i < cartItems.length;i++){
                sum += (1 + parseInt(cartItems[i].price)) * cartItems[i].amountInCart
            }
            setSubTotal(sum-1)
            setSummaryStatus(true)
        } else {
                setSummaryStatus(false)
                setSubTotal()
            };
      }
      )



    return(
        <div className="cart">
            <div className="cart-products">
                <h2>Cart ({cartItems.length})</h2>
                { successMessage?
                    <h4>Cart Updated Successfully!</h4>
                    :
                    null
                }

                {cartItems.length >=1 ? 
                cartItems.map((item)=>{
                    var myImage=cld.image(`office ecommerce/products/${item.categ}/${item.title}`)
                    return (
                    <div className="cart-item">
                        <div className="cart-item-info">
                            <figure>
                                <AdvancedImage cldImg={myImage} className="cart-image"/>
                            </figure>
                            <h6><Link to={`/product: ${item.name}`}>{item.name}</Link></h6>
                        </div>

                        <div className="mid">
                          <div>
                            <button className="decrease" onClick={()=>{displaySuccessMessage();if (item.amountInCart > 1) {
                                item.amountInCart-= 1;
                                } else {
                                    item.amountInCart=0;  
                                    removeFromCart(item.id)
                            }}}>
                              -</button>
                            <span>{item.amountInCart}</span>
                            <button className="increase" onClick={()=>{item.amountInCart+=1;displaySuccessMessage();setSubTotal(subTotal)}}>+</button>
                          </div>
                            <button className="remove" onClick={()=>{removeFromCart(item.id);item.amountInCart=0;}}>REMOVE</button>
                        </div>
                        <div className="price">
                            <p>${item.price}.99</p>
                        </div>
                    </div>
                    )})
                
                
                : 
                    <div className="empty-cart-msg">
                        <h1>Your cart is empty!</h1>
                        <p>Browse our products and discover our best deals!</p>
                        <Link to='shop'>GO TO SHOP</Link>
                    </div>
                
                }
                </div>
                { summaryStatus?
                <div className="cart-summary">
                    <h4>CART SUMMARY</h4>
                    <p>Subtotal<span>${subTotal}.99</span></p>
                        <form >
                            <button type="submit" >
                            </button>
                        </form>

                    <div className="returns">
                        <h4>Returns are easy</h4>
                        <p>Free return within 15 days for eligible items.</p>
                    </div>
                </div>
                
                :
                null
                }
        </div>
    )
}

export default Cart








