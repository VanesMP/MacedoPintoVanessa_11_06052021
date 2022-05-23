import React from "react";
import { Link } from "react-router-dom";
import "../styles/components-style/Cards.css";
import PropTypes from 'prop-types';
import data from "../data.json"

 function Cards () {
    return (
        <ul className="listCards">
            {data.logements.map((logement) => ( 
            <li className="elementCard"  key={logement.id}>
            <Link className="elementCard" to={`/AccomodationSheet/${logement.id}`}>
            <img src={logement.cover} alt='' className="cover"/>
            <p className="titre">{logement.title}</p>
            </Link>
            </li>
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
