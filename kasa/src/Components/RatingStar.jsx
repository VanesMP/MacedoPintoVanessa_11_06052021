import React from "react";

import starGrey from "../assets/starGrey.png"
import starRed from "../assets/starRed.png"
import "../styles/components-style/RatingStar.css";

function RatingStar ( {star} ) {
 
    const numberStar = parseInt(star)
    console.log(numberStar)
    
    let index = 0;
    let starRedArray = [...new Array(numberStar)].map(() => ({index : 'star' + ++index, img : starRed}));
    console.log('starArray :',starRedArray);

    const numberStarGrey = 5-numberStar;
    console.log(numberStarGrey) 

    let starGreyArray = [...new Array(numberStarGrey)].map(() => ({ index : 'star' + ++index , img: starGrey}));

/*
starArray.map((number) =>
  console.log('number :',number)
);*/

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

/*src={numberStar ? starRed : greyStar}*/