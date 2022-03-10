import React from "react";
import { Link } from "react-router-dom";
import "../styles/components-style/Cards.css";
import PropTypes from 'prop-types';
import data from "../data.json"

 function Cards () {
    return (
        <ul className="listCards">
            {data.logements.map((logement) => ( 
            <Link className="elementCard" key={logement.id} to={`/AccomodationSheet/${logement.id}`}>
            <li className="elementCard" >
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
