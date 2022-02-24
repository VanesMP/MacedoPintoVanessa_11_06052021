import React, { useState } from "react";
import "../data.json";
import arrowslide from "../assets/arrowSlide.png"

import "../styles/components-style/SlideShow.css"


function SlideShow ({views}) {

    const [page, setPage] = useState(0)

    const nextSlide = () => {
        console.log('image suivante')
        setPage(page < views.length - 1 ? page + 1 : 0);
    }
    
    const prevSlide = () => {
        console.log('image précédente')
        setPage(page > 0 ? page - 1 : views.length - 1)
    }

    return (
        <section>
            <div className="containerSlide">
        {views.map((picture, index) => (
                <img key={index} src={picture} alt="galerie de la location" className= {"sliderItem"+ (page === index ? ' active' : "")} />
                ))}
            <div className="buttonSlide">
            <img className="prevButton" src={arrowslide} alt="arrow prev"  onClick={prevSlide}/>
            <img className="nextButton" src={arrowslide} alt="arrow next" onClick={nextSlide}/>
            </div>
            
            
        </div>
        </section>
    )
}

export default SlideShow;