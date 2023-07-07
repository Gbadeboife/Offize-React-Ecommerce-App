import logo from '../images/logo.png'


function Footer(){
    return(
        <div className='footer-con'>
        <div className="footer">
            <div>
                <span className="logo"><img src={logo} alt=''/></span>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus magni.</p>
            </div>
            <div>
                <h5>Contact us</h5>
                <p>Address: 13b,nunde mindus</p>
                <p>Phone: +234 098 876 6543</p>
                <p>Email: ebuyshop@email.com</p>
            </div>
            <div>
                <h5>Help & Support</h5>
                <p>FAQ</p>
                <p>Delivery & Returns</p>
                <p>Privacy Policy</p>
            </div>
            <div>
                <h5>Social</h5>
                <p>Instagram</p>
                <p>Twitter</p>
                <p>LinkedIn</p>

            </div>
        </div>
        </div>
    )
}

export default Footer