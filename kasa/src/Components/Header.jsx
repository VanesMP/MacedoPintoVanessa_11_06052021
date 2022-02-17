import { NavLink} from "react-router-dom"
import logo from '../assets/LOGO.png'
import '../styles/components-style/Header.css'

function Header(){
    return (
        <header className='App-header'>
               <img src={logo} alt="kasa-entreprise-location-appartement" className='Logo'/>
               <nav className='App-nav'>
                   <ul className='App-nav'>
                    <li><NavLink exact to='/' activeClassName="linkActive" className="accueil">Accueil</NavLink></li>                       
                    <li><NavLink exact to='/a-propos' activeClassName="linkActive" className="propos" >A propos</NavLink></li>
                   </ul>
               </nav>
            </header>
    )
};

export default Header;