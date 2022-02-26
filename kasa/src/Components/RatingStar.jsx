import React from "react";

import starGrey from "../assets/starGrey.png"
import starRed from "../assets/starRed.png"
import "../styles/components-style/RatingStar.css";

function RatingStar ( {star} ) {
 
    const numberStar = parseInt(star)
    console.log(numberStar)
    
    let starArray = [...new Array(numberStar)].map(() => ({starRed}));
    console.log('starArray :',starArray);

/*
starArray.map((number) =>
  console.log('number :',number)
);*/

    return (
        <div className="containerStars" >      
            {starArray.map((index, number) => (
                <img key={index} className="star" src={number = starRed } alt="etoile de notation" />
            ))}
        </div>
    )
}

export default RatingStar;

/*src={numberStar ? starRed : greyStar}*/