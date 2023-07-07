import React from 'react'
import { useState,useEffect,useRef} from 'react'
import {Link} from 'react-router-dom'
import logo from '../images/logo.png'
import {AdvancedImage} from '@cloudinary/react';
import {Cloudinary} from "@cloudinary/url-gen";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { faClose } from '@fortawesome/free-solid-svg-icons';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';


function Header({pickCateg,list,cartAmt,ref}){

    const [search,setSearch]=useState('')
    const [menuOpen,setMenuOpen]=useState(false)

    const cld = new Cloudinary({
        cloud: {
          cloudName: 'dhdmchgsh'
        }
      });
    

      const divRef = useRef(null);
      useEffect(() => {
        const handleOutsideClick = (event) => {
          if (divRef.current && !divRef.current.contains(event.target)) {
            setMenuOpen(false);
          }
        }
    
        document.addEventListener('click', handleOutsideClick);
    
        return () => {
          document.removeEventListener('click', handleOutsideClick);
        };
      },[divRef]);
    
    return(
           <div className='header-par'>

            <div className="header"  ref={divRef}>
                <div className='menu-btn' >
                    <FontAwesomeIcon icon={faBars} onClick={()=>setMenuOpen(true)}/>
                </div>

                <div className="logo">
                    <Link to='/'>
                        <img src={logo} alt=''/>
                    </Link>
                </div>

                <div className="links">
                    <div className='search-bar'>
                        <div>
                            <FontAwesomeIcon icon={faMagnifyingGlass} className='search-icon'/>
                            <input onChange={(e)=>{setSearch(e.target.value)}} value={search} placeholder='Search products'/>
                            <FontAwesomeIcon icon={faClose} className='search-close-icon' onClick={()=>{setSearch('')}} style={search.length < 1? {color:'transparent'} : null }/>
                        </div>
                        <div className='search-result'> 
                                    {list.filter((item)=>{
                                        return search.toLowerCase()==='' || search.toLowerCase()===' ' ?
                                        null : item.name.toLowerCase().includes(search.toLocaleLowerCase())
                                    }).map((item)=>{
                                        var myImage=cld.image(`office ecommerce/products/${item.categ}/${item.title}`)                    
                                        return <Link onClick={()=>{setTimeout(setSearch(''),300)}} to={`/product: ${item.name}`}> <AdvancedImage className='search-image' cldImg={myImage}/>
                                                <p>{item.name} <br/>${item.price}.99</p> <span></span>
                                                </Link>
                                    })}
                        </div>

                    </div>
                    <ul className={menuOpen? 'links-ul open' : 'links-ul closed'  }>
                        <div className='menu-btn'>
                            <FontAwesomeIcon icon={faClose} onClick={()=>setMenuOpen(false)}/>
                        </div>

                        <li onClick={()=>setMenuOpen(false)}><Link to='/' className='header-link'><p>Home</p></Link></li>
                        <li onClick={()=>setMenuOpen(false)}><Link to='shop' className='header-link'><p>Shop</p></Link></li>
                        <li className='dropdown-container'>
                            
                            <p className='header-link'>Categories <FontAwesomeIcon className='ang-down' icon={faAngleDown}/></p>

                                <ul className='dropdown-list'>
                                    <li onClick={()=>{pickCateg('equipment');setMenuOpen(false)}}>
                                        <Link to='category'>
                                            PC Equipment
                                        </Link>
                                    </li>
                                    <li onClick={()=>{pickCateg('accessories');setMenuOpen(false)}}>
                                        <Link to='category' >
                                            Accesories
                                        </Link>
                                    </li>
                                    <li onClick={()=>{pickCateg('furniture');setMenuOpen(false)}}>
                                    <Link to='category'>
                                        Furniture
                                    </Link>
                                    </li>
                                    <li onClick={()=>{pickCateg('audio');setMenuOpen(false)}}>
                                    <Link to='category' >
                                        Audio Equipment
                                    </Link>
                                    </li>
                                </ul>
                            </li>
                    </ul>
                </div>
                <div className='account' >
                    <Link to='/cart' className='cart-button-link'>
                        <FontAwesomeIcon icon={faCartShopping} className='cart-icon'/>
                        <span className='cart-amt'>{cartAmt}</span>
                    </Link>
                </div>
            </div>
            </div>
    )
}


export default Header