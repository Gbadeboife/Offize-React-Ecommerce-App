import React from "react";
import {AdvancedImage} from '@cloudinary/react';
import {Link} from "react-router-dom"
import {useParams} from "react-router-dom";
import { useState,useEffect} from "react";



function Preference ({list,cld}){
      const[filteredProducts,setFilteredProducts]=useState([])
      const {preference}=useParams()

      useEffect(()=>{
        switch (preference){
          case 'work':
            setFilteredProducts(list.filter((item)=> item.brand === 'reverb' || item.brand === 'creede'));
            break;
          case 'gaming':
            setFilteredProducts(list.filter((item)=> item.brand === 'gameopp' || item.brand === 'lyloop'));
            break;
        }
      },[])

    return(
      <div>
        <div className="dir">
          <span><Link to='/'>Home /</Link>  {preference.charAt().toUpperCase()}{preference.slice(1)} products</span>
        </div>

        <div className="product-list">
        {filteredProducts.map((item)=>{
        var myImage=cld.image(`office ecommerce/products/${item.categ}/${item.title}`);
        const calcDisc=100 - parseInt(item.discount)
        const origPrice=parseInt(parseInt(item.price) * 100 / calcDisc)
          return(
            <div className="product">
              <Link to={`/product: ${item.name}`}  className='product-link'>
                <figure>
                  <AdvancedImage cldImg={myImage} className="image"/>
                </figure>
                <p>{item.name}</p>
                <span>${item.price}.99</span>
                <span className="orig-price">${origPrice}.99</span>
                <b>-{item.discount}%</b>
              </Link>
            </div>
          )
        })}
        </div>
      </div>
    )
}

export default Preference