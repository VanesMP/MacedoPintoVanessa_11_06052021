import React from "react";

import starGrey from "../assets/starGrey.png"
import starRed from "../assets/starRed.png"
import "../styles/components-style/RatingStar.css";

function RatingStar ( {star} ) {
 
    const numberStar = parseInt(star)
    console.log(numberStar)

    return (
        <div className="containerStars">
            {Array(5).fill().map((index, numberStar) => (
                <img key={index} className="star" src={ numberStar ? starRed : starGrey} alt="etoile de notation" />
            ))}
        </div>
    )
}

export default RatingStar;