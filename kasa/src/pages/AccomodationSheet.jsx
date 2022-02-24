import React,  { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import '../styles/pages-style/index-style.css';
import Header from "../Components/Header";
import SlideShow from "../Components/SlideShow";
import Host from "../Components/Host";
import Tags from "../Components/Tags";

import Error from "./Error";
import data from "../data.json";

import "../styles/pages-style/AccomodationSheet.css";

/*Recuperer l'id du logement de lurl*/

function AccomodationSheet() {
    
    const { id } = useParams()
    const [sheet, setSheet] = useState(null)
    
    useEffect(() => {
      const myAccomodation = data.logements.filter((logement)=>logement.id  === id)[0]
      setSheet(myAccomodation)
    }, [id]);
    
    if (!sheet) {
      return (
        <div>
           <Error/> 
        </div>
      )
    }

    return ( 
        <div>
        <Header />
        <SlideShow views={sheet.pictures}/>
        <div className="partOne">
        <div className="enTete">
            <h1 className="nameAccomodation" key={sheet.id}>{sheet.title}</h1>
            <h2 className="locationAccomodation">{sheet.location}</h2>
        </div>
        <Host realtor={sheet.host}/>
        </div>
        <div className="partTwo">
            <Tags/>
            
        </div>
        </div>
    )
}

export default AccomodationSheet;