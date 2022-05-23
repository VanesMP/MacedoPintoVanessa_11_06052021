import React from "react";

import starGrey from "../assets/starGrey.png"
import starRed from "../assets/starRed.png"
import "../styles/components-style/RatingStar.css";

function RatingStar ( {star} ) {
 
    const numberStar = parseInt(star)
    
    let index = 0;
    let starRedArray = [...new Array(numberStar)].map(() => ({index : 'star' + ++index, img : starRed}));

    const numberStarGrey = 5-numberStar;

    let starGreyArray = [...new Array(numberStarGrey)].map(() => ({ index : 'star' + ++index , img: starGrey}));

    return (
        <div className="containerStars" >      
            {starRedArray.map((element) => (
                <img key={element.index} className="star" src={element.img  } alt="etoile de notation rouge" />
            ))}
             {starGreyArray.map((element) => (
                <img key={element.index} className="star" src={element.img } alt="etoile de notation grise" />
            ))}
        </div>
    )
}

export default RatingStar;
