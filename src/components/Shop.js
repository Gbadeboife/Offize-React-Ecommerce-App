import React from "react";
import { useState,useEffect } from "react";
import {Link} from "react-router-dom"
import {AdvancedImage} from '@cloudinary/react';
import {Cloudinary} from "@cloudinary/url-gen";
import Productsfilter from "./Productsfilter";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faStar} from '@fortawesome/free-solid-svg-icons';
import {faStar as faRegStar} from '@fortawesome/free-regular-svg-icons';


function Shop({list}){
      const cld = new Cloudinary({
        cloud: {
          cloudName: 'dhdmchgsh'
        }
      })

      const [sortQuery,setSortQuery]=useState('')
      const [changedFilter,setChangedFilter]=useState('')
      const [filteredProducts,setFilteredProducts]=useState(list)
      const [products,setProducts]=useState(list)
      
      const [queries,setQueries]=useState({
        brand:'',
        price:'1000',
        discount:'',
        rating:'',
      })
      function clearFilters(){
        setQueries({
          brand:'',
          price:'1000',
          discount:'',
          rating:'',
        })
      }

      function sortItems(e){
        setSortQuery(e.target.value)
      } 

      useEffect(() => {
          const filtered = products.filter((product) => {
          const { brand, rating, price, discount } = queries;
          const brandMatch = brand ? product.brand === brand : true;
          const ratingMatch = rating ? parseFloat(product.rating) >= parseFloat(rating) : true;
          const priceMatch = price ? parseFloat(product.price) <= parseFloat(price) : true;
          const discountMatch = discount ? parseFloat(product.discount) >= parseFloat(discount) : true;
    
          return brandMatch && ratingMatch && priceMatch && discountMatch;
        });
        setFilteredProducts(filtered);
      }, [queries]);


      useEffect(() => {
        switch(sortQuery){
          case 'L-H': setFilteredProducts(filteredProducts.slice().sort((a,b)=>a.price - b.price))
            break;
      
          case 'H-L': setFilteredProducts(filteredProducts.slice().sort((a,b)=>b.price - a.price))
            break;
      
          case 'A-Z': setFilteredProducts(filteredProducts.slice().sort((a,b) => a.name.localeCompare(b.name)))
            break;
      
          case 'Z-A': setFilteredProducts(filteredProducts.slice().sort((a,b) => b.name.localeCompare(a.name)))
            break;
      
        }
      }, [sortQuery])

    return(
        <div className="shop">
          <div className="dir">
            <span><Link to='/'>Home /</Link> Shop</span>
          </div>
          <section className="side-bar">
            <Productsfilter updateFilter={setQueries} setChangedFilter={setChangedFilter} selectedFilters={queries} clearFilters={clearFilters}/>
          </section>
          <section className="products">
            <div className="top-bar">
              <span>{filteredProducts.length} products found</span>
              <div>
                <p>Sort by: </p>
                <select onChange={sortItems}>
                  <option disabled selected style={{display: 'none'}}></option>
                  <option value='L-H'>Price: Low to High</option>
                  <option value='H-L'>Price: High to Low</option>
                  <option value='A-Z'>Name: A-Z</option>
                  <option value='Z-A'>Name: Z-A</option>
                </select>
              </div>
            </div>
            <div className="prod-container">
              {filteredProducts.map((item)=>{

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

            </section>

    </div>
    )
}

export default Shop 