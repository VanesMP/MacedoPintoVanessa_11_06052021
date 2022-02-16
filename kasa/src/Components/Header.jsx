
import logo from '../assets/LOGO.png'
import '../styles/components-style/Header.css'

function Header(){
    return (
        <header className='App-header'>
               <img src={logo} alt="kasa-entreprise-location-appartement" className='Logo'/>
               <nav className='App-nav'>
               <a href="/" className="accueil">Accueil</a>
            <a href="/a-propos" className="propos">A propos</a>
               </nav>
            </header>
    )
};

export default Header;