import React from "react";
import {faStar} from '@fortawesome/free-solid-svg-icons';
import {faStar as faRegStar} from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';



function Productsfilter({updateFilter,setChangedFilter,selectedFilters,clearFilters}){

    const changeBrand=(e)=>{
      updateFilter(prevState => ({...prevState,brand: e.target.value}))
      setChangedFilter('brand')
    }
    const changeDiscount=(e)=>{
      updateFilter(prevState => ({...prevState,discount: e.target.value}))
      setChangedFilter('discount')

    }
    const changeRating=(e)=>{
      updateFilter(prevState => ({...prevState,rating: e.target.value}))
      setChangedFilter('rating')
    }
    const changePrice=(e)=>{
      updateFilter(prevState => ({...prevState,price: e.target.value}))
      setChangedFilter('price')
    }
    
    function calcStars(e){
      let stars = [];
      let regStars= []
      for(let i=1;i<= e ;i++){
        stars.push(<FontAwesomeIcon icon={faStar} />);
      }
      for(let i=1;i<= 5-stars.length;i++){
        regStars.push( <FontAwesomeIcon icon={faRegStar} />);
      }
      stars.push(regStars)
      return stars 
    }

    return(
        <div className="filter" >
            <div>
              <span>BRAND</span>
              <form onChange={changeBrand} value={selectedFilters.brand}>
                <input type='radio' name='brand' value='' defaultChecked checked={selectedFilters.brand === ''}/>
                <label>All</label><br/>

                <input type='radio' name='brand' value='lyloop' checked={selectedFilters.brand === 'lyloop'}/>
                <label>Lyloop</label><br/>

                <input type='radio' name='brand' value='gameopp' checked={selectedFilters.brand === 'gameopp'}/>
                <label>Gameopp</label><br/>

                <input type='radio' name='brand' value='reverb' checked={selectedFilters.brand === 'reverb'}/>
                <label>Reverb</label><br/>

                <input type='radio' name='brand' value='creede' checked={selectedFilters.brand === 'creede'}/>
                <label>Creede</label><br/>
              </form>
            </div>    
            
            <div>
              <span>PRICE</span>
              <input type='range' defaultValue='1000' value={selectedFilters.price} step='10' max='1000' min='10' onChange={changePrice}></input>
              <b>${selectedFilters.price}</b>
            </div>  

            <div>
              <span>DISCOUNT</span>
                <form onChange={changeDiscount}>
                    <input type='radio' name='brand' value='' style={{display:'none'}} defaultChecked checked={selectedFilters.discount === ''}/>
                    
                    <input type='radio' name="discount" value='80' checked={selectedFilters.discount === '80'}/>
                    <label>80% or more</label><br/>

                    <input type='radio' name="discount" value='60' checked={selectedFilters.discount === '60'}/>
                    <label>60% or more</label><br/>
                    
                    <input type='radio' name="discount" value='40' checked={selectedFilters.discount === '40'}/>
                    <label>40% or more</label><br/>
                    
                    <input type='radio' name="discount" value='20' checked={selectedFilters.discount === '20'}/>
                    <label>20% or more</label><br/>
                </form>
            </div>

            <div>
                <span>PRODUCT RATING</span>
                <form onChange={changeRating}>
                    <input type='radio' name='brand' value='' style={{display:'none'}} defaultChecked checked={selectedFilters.rating === ''}/>
                    
                    <input type='radio' name="rating" value='4' checked={selectedFilters.rating === '4'}/>
                    <label>{calcStars(4)} & above</label><br/>

                    <input type='radio' name="rating" value='3' checked={selectedFilters.rating === '3'}/>
                    <label>{calcStars(3)} & above</label><br/>
                    
                    <input type='radio' name="rating" value='2' checked={selectedFilters.rating === '2'}/>
                    <label>{calcStars(2)} & above</label><br/>
                    
                    <input type='radio' name="rating" value='1' checked={selectedFilters.rating === '1'}/>
                    <label>{calcStars(1)} & above</label><br/>
                </form>
            </div>

            <div>
              <button className="clr-filters" onClick={clearFilters}>CLEAR FILTERS</button>
            </div>

          </div>




    )


}



export default Productsfilter