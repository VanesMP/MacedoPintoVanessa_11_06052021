import React from "react";
import { Link } from "react-router-dom";
import "../styles/components-style/Cards.css";
import PropTypes from 'prop-types';
import data from "../data.json"
/*import { NavLink} from "react-router-dom" = <NavLink className="lien" exact to='/fiche-logement/:id'></NavLink>*/
/*import cover from '../assets/backgroundLogement.png'*/

 function Cards () {
    return (
        <ul className="listCards">
            {data.logements.map((logement) => ( 
            <Link className="elementCard" to={`/AccomodationSheet/${logement.id}`}>
            <li className="elementCard" key={logement.id}>
            <img src={logement.cover} alt='' className="cover"/>
            <p className="titre">{logement.title}</p>
            </li>
            </Link>
            ))}
       </ul>
    )
};

Cards.propTypes = {
    id: PropTypes.string,
    cover: PropTypes.string,
    title: PropTypes.string,
}

export default Cards;
