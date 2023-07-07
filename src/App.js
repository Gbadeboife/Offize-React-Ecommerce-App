import './App.css'
import React,{useState,useEffect} from "react";
import {BrowserRouter as Router,Route,useLocation, withRouter} from "react-router-dom"
import Header from "./components/Header";
import Home from './components/Home';
import Productlist from "./components/Productlist";
import Cart from "./components/Cart";
import Topselling from "./components/Topselling";
import Shop from './components/Shop';
import Preference from './components/Preference';
import Subscribe from './components/Subscribe';
import Footer from './components/Footer';
import Productpage from "./components/Productpage";
import {v4 as uuid} from 'uuid'



import Payment from './components/payment';

function App (){
    const [cartItems,setCartItems]=useState([])
    const [categ,setCateg]=useState()
    
    function ScrollToTop() {
        const { pathname } = useLocation();
      
        useEffect(() => {
          window.scrollTo(0, 0);
        }, [pathname]);
      
        return null;
      }
      
      const ScrollToTopWithRouter = withRouter(ScrollToTop);

    const [products,setProducts]=useState([
        {   
            name:'High Resolution Monitor',
            title:'eqp-1',
            price:'199',
            categ:'equipment',
            brand:'reverb',
            discount:'40',
            amountInCart:0,
            id:uuid(),
            rating: '4'
        },
        {   
            name:'Quick Response Gaming Mouse',
            title:'eqp-2',
            price:'49',
            categ:'equipment',
            brand:'lyloop',
            discount:'60',
            amountInCart:0,
            id:uuid(),
            rating: '2'
        },
        {   
            name:'PS4 Controller White',
            title:'acs-11',
            price:'39',
            categ:'accessories',
            brand:'gameopp',
            discount:'21',
            amountInCart:0,
            id:uuid(),
            rating: '5'
        },

        {   
            name:'RGB Backlit Keyboard',
            title:'eqp-5',
            price:'79',
            categ:'equipment',
            brand:'reverb',
            discount:'45',
            amountInCart:0,
            id:uuid(),
            rating: '2'
        },
        {   
            name:'Laser SmartHome LED USB Strip Light',
            title:'acs-1',
            price:'14',
            categ:'accessories',
            brand:'creede',
            discount:'82',
            amountInCart:0,
            id:uuid(),
            rating: '4'
        },
        {   
            name:'Blue Light Protective Glasses',
            title:'acs-2',
            price:'19',
            categ:'accessories',
            brand:'creede',
            discount:'80',
            amountInCart:0,
            id:uuid(),
            rating: '2'
        },
        {   
            name:'500gb SSD Hard Disk',
            title:'acs-3',
            price:'99',
            categ:'accessories',
            brand:'Reverb',
            discount:'20',
            amountInCart:0,
            id:uuid(),
            rating: '5'
        },
        {   
            name:'1 Terabyte HDD Hard Disk',
            title:'acs-4',
            price:'119',
            categ:'accessories',
            brand:'creede',
            discount:'41',
            amountInCart:0,
            id:uuid(),
            rating: '4'
        },

        {   
            name:'Cream Office Chair',
            title:'fur-2',
            price:'239',
            categ:'furniture',
            brand:'creede',
            discount:'20',
            amountInCart:0,
            id:uuid(),
            rating: '4'
        },
        {   
            name:'Customisable Sound Board',
            title:'aud-2',
            price:'519',
            categ:'audio',
            brand:'reverb',
            discount:'80',
            amountInCart:0,
            id:uuid(),
            rating: '5'
        },
        {   
            name:'Gaming Laptop 16gb RAM, 1tb SSD',
            title:'eqp-7',
            price:'989',
            categ:'equipment',
            brand:'lyloop',
            discount:'27',
            amountInCart:0,
            id:uuid(),
            rating: '5'
        },
        {   
            name:'Multiple Level Table',
            title:'fur-3',
            price:'179',
            categ:'furniture',
            brand:'creede',
            discount:'40',
            amountInCart:0,
            id:uuid(),
            rating: '4'
        },
        {   
            name:'Gaming Chair',
            title:'fur-4',
            price:'324',
            categ:'furniture',
            brand:'gameopp',
            discount:'32',
            amountInCart:0,
            id:uuid(),
            rating: '2'
        },
        {   
            name:'Green Gaming Chair',
            title:'fur-5',
            price:'384',
            categ:'furniture',
            brand:'lyloop',
            discount:'60',
            amountInCart:0,
            id:uuid(),
            rating: '4'
        },
        {   
            name:'Laptop Silver 500gb HDD',
            title:'eqp-9',
            price:'699',
            categ:'equipment',
            brand:'reverb',
            discount:'35',
            amountInCart:0,
            id:uuid(),
            rating: '4'
        },
        {   
            name:'Headset With Mic',
            title:'aud-1',
            price:'239',
            categ:'audio',
            brand:'gameopp',
            discount:'33',
            amountInCart:0,
            id:uuid(),
            rating: '3'
        },

        {   
            name:'Headset With Sorround Sound',
            title:'aud-4',
            price:'89',
            categ:'audio',
            brand:'reverb',
            discount:'75',
            amountInCart:0,
            id:uuid(),
            rating: '4'
        },
        {   
            name:'Headset With Audio Cable',
            title:'aud-5',
            price:'149',
            categ:'audio',
            brand:'reverb',
            discount:'25',
            amountInCart:0,
            id:uuid(),
            rating: '5'
        },
        {   
            name:'Gaming Mouse With Adjustible DPI',
            title:'eqp-11',
            price:'49',
            categ:'equipment',
            brand:'gameopp',
            discount:'67',
            amountInCart:0,
            id:uuid(),
            rating: '4'
        },
        {   
            name:'Gaming Laptop 16gb RAM, 500gb SSD',
            title:'eqp-6',
            price:'799',
            categ:'equipment',
            brand:'lyloop',
            discount:'84',
            amountInCart:0,
            id:uuid(),
            rating: '3'
        },

        {   
            name:'Laptop 8gb RAM 256gb HDD',
            title:'eqp-8',
            price:'499',
            categ:'equipment',
            brand:'gameopp',
            discount:'40',
            amountInCart:0,
            id:uuid(),
            rating: '5'
        },
        {   
            name:'Portable Laptop Stand',
            title:'acs-5',
            price:'29',
            categ:'accessories',
            brand:'creede',
            discount:'62',
            amountInCart:0,
            id:uuid(),
            rating: '4'
        },

        {   
            name:'Laptop Silver 1tb SSD',
            title:'eqp-10',
            price:'899',
            categ:'equipment',
            brand:'reverb',
            discount:'83',
            amountInCart:0,
            id:uuid(),
            rating: '3'
        },

        {   
            name:'Keyboard With Fast Response Time',
            title:'eqp-12',
            price:'74',
            categ:'equipment',
            brand:'gameopp',
            discount:'22',
            amountInCart:0,
            id:uuid(),
            rating: '5'
        },
        {   
            name:'144Hz Monitor',
            title:'eqp-13',
            price:'279',
            categ:'equipment',
            brand:'lyloop',
            discount:'40',
            amountInCart:0,
            id:uuid(),
            rating: '4'
        },
        {   
            name:'5G Router',
            title:'acs-6',
            price:'49',
            categ:'accessories',
            brand:'creede',
            discount:'29',
            amountInCart:0,
            id:uuid(),
            rating: '4'
        },
        {   
            name:'Light Purple Wrist Pad',
            title:'acs-7',
            price:'14',
            categ:'accessories',
            brand:'creede',
            discount:'80',
            amountInCart:0,
            id:uuid(),
            rating: '4'
        },
        {   
            name:'White Keyboard RGB Backlit',
            title:'eqp-4',
            price:'79',
            categ:'equipment',
            brand:'lyloop',
            discount:'81',
            amountInCart:0,
            id:uuid(),
            rating: '5'
        },
        {   
            name:'White Wrist Pad',
            title:'acs-8',
            price:'50',
            categ:'accessories',
            brand:'reverb',
            discount:'43',
            amountInCart:0,
            id:uuid(),
            rating: '4'
        },
        {   
            name:'Laser Printer',
            title:'acs-9',
            price:'299',
            categ:'accessories',
            brand:'reverb',
            discount:'26',
            amountInCart:0,
            id:uuid(),
            rating: '3'
        },
        {   
            name:'Red and Black Gaming Headset',
            title:'aud-6',
            price:'139',
            categ:'audio',
            brand:'lyloop',
            discount:'47',
            amountInCart:0,
            id:uuid(),
            rating: '5'
        },
        {   
            name:'Streamer Microphone',
            title:'aud-7',
            price:'79',
            categ:'audio',
            brand:'reverb',
            discount:'63',
            amountInCart:0,
            id:uuid(),
            rating: '3'
        },
        {   
            name:'PS5 Controller White',
            title:'acs-10',
            price:'59',
            categ:'accessories',
            brand:'gameopp',
            discount:'26',
            amountInCart:0,
            id:uuid(),
            rating: '3'
        },

        {   
            name:'X-box One Controller',
            title:'acs-12',
            price:'49',
            categ:'accessories',
            brand:'lyloop',
            discount:'20',
            amountInCart:0,
            id:uuid(),
            rating: '4'
        },
        {   
            name:'Podcast Microphone',
            title:'aud-8',
            price:'199',
            categ:'audio',
            brand:'creede',
            discount:'44',
            amountInCart:0,
            id:uuid(),
            rating: '4'
        },
        {   
            name:'Adjustible Standing Desk',
            title:'fur-6',
            price:'129',
            categ:'furniture',
            brand:'reverb',
            discount:'80',
            amountInCart:0,
            id:uuid(),
            rating: '3'
        }
        
    ])

    const addToCart=(id)=>{
        setCartItems((prevState)=>[...prevState,
            products.find((item)=>item.id===id)
        ]);
    }

 
    const removeFromCart =(id)=>{
        setTimeout(()=>{
            setCartItems(cartItems.filter((item)=> item.id !== id))
        },0)
    }


    return(
        <div>
                <Router>
                    <Route path='/'><Header pickCateg={setCateg} list={products} cartAmt={cartItems.length}/></Route>
                <div className="page">
                    <ScrollToTopWithRouter/>
                    <Route exact path='/'><Home/></Route>
                    <Route exact path='/'><Topselling list={products}/></Route>
                    <Route exact path='/'><Subscribe/></Route>
                    <Route exact path='/shop'><Shop list={products} pickCateg={setCateg}/></Route>
                    <Route exact path='/:preference products'><Preference list={products}/></Route>
                    <Route exact path='/category'><Productlist list={products} category={categ} /></Route>
                    <Route exact path='/product: :name'><Productpage list={products} addToCart={addToCart} removeFromCart={removeFromCart}/></Route>
                    <Route exact path='/cartj'><Cart cartItems={cartItems}removeFromCart={removeFromCart} list={products}/></Route>
                    <Route exact path='/cart'><Payment/></Route>
                </div>
                    <Route path='/'><Footer/></Route>
                </Router>


        </div>
    )

}

export default App