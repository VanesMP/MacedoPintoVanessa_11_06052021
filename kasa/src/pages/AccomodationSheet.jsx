import React from "react";
import '../styles/pages-style/index-style.css';
import Header from "../Components/Header";
import data from "../data.json"

function AccomodationSheet() {
    return ( 
        <div>
        <Header />
        <div>
        {data.logements.map((logement) => (
            <h1 className="nameAccomodation">{logement.title}</h1>
        ))}
        </div>
        </div>
    )
}

export default AccomodationSheet;