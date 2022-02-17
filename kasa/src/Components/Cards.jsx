import "../styles/components-style/Cards.css"
import { NavLink} from "react-router-dom"
import cover from '../assets/backgroundLogement.png'

function Cards() {
    return (
            <li className="elementCard">
            <NavLink className="lien" exact to='/fiche-logement/:id'>
            <img src={cover} alt='' className="cover"/>
            <p className="titre">Titre de la location</p>
            </NavLink>
            </li>
    )
};

export default Cards;