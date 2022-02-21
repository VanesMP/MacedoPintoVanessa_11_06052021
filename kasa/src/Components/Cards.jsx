import "../styles/components-style/Cards.css"
/*import { NavLink} from "react-router-dom" = <NavLink className="lien" exact to='/fiche-logement/:id'></NavLink>*/
/*import cover from '../assets/backgroundLogement.png'*/

function Cards({id, cover, title}) {
    return (
            <li className="elementCard" key={id}>
            <img src={cover} alt='' className="cover"/>
            <p className="titre">Titre de la location, {title}</p>
            </li>
    )
};

export default Cards;