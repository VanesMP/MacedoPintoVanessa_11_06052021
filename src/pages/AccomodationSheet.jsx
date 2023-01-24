
import { useParams } from "react-router-dom";

import '../styles/pages-style/index-style.css';
import "../styles/pages-style/AccomodationSheet.css";

import Header from "../Components/Header";
import Gallery from "../Components/Gallery";
import Host from "../Components/Host";
import Tags from "../Components/Tags";
import RatingStar from "../Components/RatingStar";
import Dropdown from "../Components/Dropdown";
import Footer from "../Components/Footer";
import Error from "./Error";

import data from "../data.json";

function AccomodationSheet() {
    
    //cette variable contient l'id du logement qui se trouve dans l'url
    const { id } = useParams() 

    //variable qui contient le logement dans le fichier json dont son id correspond a l'id de l url
    const myRoom = data.logements.filter((logement) => logement.id === id)[0]
    //condition: afficher la page d'erreur si l'id de l'url ne correspond a un des id des logements du mock
    //sinon afficher la fiche logement
    if (myRoom === undefined){
        return(
        <div>
            <Error />
        </div>
    )} else {
    return ( 
        <div>
        <Header />
        <Gallery pictures={myRoom.pictures}/>
        <div className="partOne">
        <div className="enTete">
            <h1 className="nameAccomodation" key={myRoom.id}>{myRoom.title}</h1>
            <h2 className="locationAccomodation">{myRoom.location}</h2>
        </div>
        <Host realtor={myRoom.host}/>
        </div>
        <div className="partTwo">
            <Tags tag={myRoom.tags}/>
            <RatingStar star={myRoom.rating}/>
        </div>
        <div className="partThree">
            <div className="description" >
            <Dropdown title="Decription" text={[myRoom.description]}/>
            </div>
            <div className="equipements"> 
            <Dropdown className="equipement" title="Équipements" text={myRoom.equipments} />
            </div> 
        </div>
        
        <Footer />
        </div>
    )}
}

export default AccomodationSheet;

/*
<Gallery views={myRoom.pictures}/>
        <div className="partOne">
        <div className="enTete">
            <h1 className="nameAccomodation" key={myRoom.id}>{myRoom.title}</h1>
            <h2 className="locationAccomodation">{myRoom.location}</h2>
        </div>
        <Host realtor={myRoom.host}/>
        </div>
        <div className="partTwo">
            <Tags tag={myRoom.tags}/>
            <RatingStar star={myRoom.rating}/>
        </div>
        <div className="partThree">
            <div className="description" >
            <Dropdown title="Decription" text={[myRoom.description]}/>
            </div>
            <div className="equipements"> 
            <Dropdown className="equipement" title="Équipements" text={myRoom.equipments} />
            </div> 
        </div>
*/
