import React, { useState } from "react";
import "../data.json";
import PropTypes from 'prop-types';
import arrowslide from "../assets/arrowSlide.png"

import "../styles/components-style/Gallery.css"

function Gallery ({views}) {

    //etat initail du state
    const [page, setPage] = useState(0)

    //methode: image suivant
    //si l'image affichée est la dernière de la galerie, qaund l'utilisateur clique sur "image suivante", la galerie affiche la première image. 
    const nextSlide = () => {
        setPage(page < views.length - 1 ? page + 1 : 0);
    }
    
    //methode: image precedente
    //Si l'utilisateur se trouve à la première image et qu'il clique sur "image précédente", la galerie affiche la dernière image.
    const prevSlide = () => {
        setPage(page > 0 ? page - 1 : views.length - 1)
    }

            return (
                <section className="sectionSheet">
                    <div className="containerSlide">
                {views.map((picture, index) => (
                        <img key={index} src={picture} alt="galerie de la location" className= {"sliderItem"+ (page === index ? ' active' : "")} />
                        ))}
                {views.length > 1 &&
                    <div className="buttonSlide">
                    <img className="prevButton " src={arrowslide} alt="arrow prev"  onClick={prevSlide}/>
                    <img className="nextButton " src={arrowslide} alt="arrow next" onClick={nextSlide}/>
                    </div>}      
                <span className="numberOfPages">{page +1} / {views.length}</span>
                </div>
                </section>
            )
}

Gallery.propTypes = {
    picture: PropTypes.string,
}

export default Gallery;

/*Condition à la volée avec l’opérateur logique &&
Ça fonctionne parce qu’en JavaScript, true && expression est toujours évalué 
à expression, et false && expression est toujours évalué à false.
Du coup, si la condition vaut true, l’élément juste après && sera affiché. 
Si elle vaut false, React va l’ignorer et le sauter.*/

