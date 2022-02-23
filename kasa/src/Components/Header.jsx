import { NavLink} from "react-router-dom"
import logo from '../assets/LOGO.png'
import '../styles/components-style/Header.css'

function Header(){

    let activeStyle = {
        textDecoration: "underline"
      };

    return (
        <header className='App-header'>
               <img src={logo} alt="kasa-entreprise-location-appartement" className='Logo'/>
               <nav className='App-nav'>
                   <ul className='App-nav'>
                    <li><NavLink to='/' 
                    style={({ isActive }) =>
                    isActive ? activeStyle : undefined
                    }
                    className="accueil">Accueil</NavLink></li>                       
                    <li><NavLink to='/about'
                    style={({ isActive }) =>
                    isActive ? activeStyle : undefined
                    }
                    className="propos" >A propos</NavLink></li>
                   </ul>
               </nav>
            </header>
    )
};

export default Header;