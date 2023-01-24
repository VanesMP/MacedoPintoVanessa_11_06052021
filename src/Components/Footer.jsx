import Logo from '../assets/LogoFooter.png'
import '../styles/components-style/Footer.css'

function Footer(){
    return (
        <footer className='containerfooter'>
               <div className='container'>
               <img src={Logo} alt="kasa-entreprise-location-appartement" className='logoFooter'/>
               <p className='allRight'>© 2020 Kasa. All rights reserved</p>
               </div>
            </footer>
    )
};

export default Footer;