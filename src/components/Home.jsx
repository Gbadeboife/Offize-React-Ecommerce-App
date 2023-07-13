import React, { useState } from "react";
import { Link } from "react-router-dom";
import {AdvancedImage} from '@cloudinary/react';

function Home({cld}){
    const [firstHoverStatus,setFirstHoverStatus]=useState(false)
    const [secondHoverStatus,setSecondHoverStatus]=useState(false)

    var bannerImage=cld.image(`office ecommerce/home page/banner`);
    var aboutImage=(num)=>{return cld.image(`office ecommerce/home page/works-${num}`)};
    var setupImage=(type)=>{return cld.image(`office ecommerce/home page/${type}`) }

    return(
    <div className="home">
        <div className="landing">
            <article>
                <h1>Transform Your Workspace<br/>Elevate Your Productivity</h1>
                <Link to='/shop' >
                    <span>Shop now</span>
                </Link>
            </article>
            <div className='banner'>
                <AdvancedImage cldImg={bannerImage} className="banner-img"/>
            </div>
        </div>

        <div className="experience">
            <h2>We provide best<br/>customer experiences</h2>
              <div className="exp-scr">
                <div className="exp">
                    <div>
                        <h5>Original Products</h5>
                        <p>We provide the best quality and durability of products</p>
                    </div>
                    <div>
                        <h5>Satisfaction Gurantee</h5>
                        <p>Exchange the product bought if it doesn't satisfy you</p>
                    </div>
                    <div>
                        <h5>Products Warranty</h5>
                        <p>Get warranty on faulty products for up to a year </p>
                    </div>
                    <div>
                        <h5>Fast Shipping</h5>
                        <p>We offer fast and reliable shipping to over 15 countries  </p>
                    </div>
                </div>
              </div>
        </div>

        <div className="setup">
            <h2>Build your setup<br/>based on what suits you</h2>
            <section>
              <div>
                <div onMouseOver={()=>{setFirstHoverStatus(true)}} onMouseLeave={()=>{setFirstHoverStatus(false)}}>
                        {firstHoverStatus?
                            <Link to='work products' >Shop products</Link>: null  
                        }
                        <AdvancedImage cldImg={setupImage('working')}   className="setup-img"/>
                </div>
                <p>Work</p>
              </div>
              <div>
                <div onMouseOver={()=>{setSecondHoverStatus(true)}} onMouseLeave={()=>{setSecondHoverStatus(false)}}>
                    {secondHoverStatus?
                            <Link to='gaming products'>Shop products</Link>: null
                    }
                    <AdvancedImage cldImg={setupImage('gaming')}  className="setup-img"/>
                </div>
                <p>Gaming</p>
            </div>
            </section>
        </div>

        <div className="about" >
            <h2>About Us</h2>
            <div id="about">
                <div className="square"></div>
                <span>Creating productive office<br/>workspaces in your home</span>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repudiandae aliquid veritatis itaque nostrum quis consectetur eius blanditiis eveniet commodi, atque accusantium ducimus quos.illum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laboru</p>
            </div>
        </div>

        <div className="services">
            <h2>Our Services</h2>
            <div id="services">
                <div className="square"></div>
                <span>Get your space designed<br/>customly to fit your needs</span>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repudiandae aliquid veritatis itaque nostrum quis consectetur eius blanditiis eveniet commodi, atque accusantium ducimus quos.illum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laboru</p>
            </div>
        </div>

        <div className="works">
            <h2>Some of our works</h2>
            <div id="works">
                <div>
                  <AdvancedImage cldImg={aboutImage(1)} className="works-image"/>
                </div>
                <div className="works-middle">
                  <AdvancedImage cldImg={aboutImage(2)} className="works-image"/>
                </div>
                <div>
                  <AdvancedImage cldImg={aboutImage(3)} className="works-image"/>
                </div>
            </div>
        </div>

    </div>
    )
}

export default Home