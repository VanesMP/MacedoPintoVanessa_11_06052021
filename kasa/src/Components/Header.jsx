import { Link} from "react-router-dom"
import logo from '../assets/LOGO.png'
import '../styles/components-style/Header.css'

function Header(){
    return (
        <header className='App-header'>
               <img src={logo} alt="kasa-entreprise-location-appartement" className='Logo'/>
               <nav className='App-nav'>
                   <ul className='App-nav'>
                    <li><Link to='/' className="accueil">Accueil</Link></li>                       
                    <li><Link to='/about' className="propos" >A propos</Link></li>
                   </ul>
               </nav>
            </header>
    )
};

export default Header;