import React from "react";
import "../styles/components-style/Values.css"
/*import arrow from "../assets/arrowDropdown.png"*/

function Values ({title, text}) {
return (
    <div className="containerValue">
        <div className="dropdown">
        <h2 className="valueTitle">{title}</h2>
        <div className="arrowIcon"></div>
        </div>
        <div className="descriptionValue">
        <p className="valueText">{text}</p>
        </div>
    </div>
)
}

export default Values;