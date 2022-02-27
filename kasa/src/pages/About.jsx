import React from "react";
import '../styles/pages-style/index-style.css';
import Header from "../Components/Header";
import Banner from "../Components/Banner";
import Dropdown from "../Components/Dropdown";
import Footer from "../Components/Footer";

import "../styles/pages-style/About.css"
import background from "../assets/backgroundPropos.png";

export default function About() {
    return ( 
        <div className='App'>
                  <Header />
                  <div className="bannerAbout">
                  <Banner className="banner">
                  <img className="background backgroundAbout" src={background} alt="kasa-location-appartements" />
                  </Banner> 
                  </div>
                  <div className="conatinerAboutSection">
                  <Dropdown title="Fiabilité" text={[`Les annonces postées sur Kasa garantissent une fiabilité totale. 
                  Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées  
                  par nos équipes.`]}/>
                  <Dropdown title="Respect" text={[`La bienveillance fait partie des valeurs fondatrices de Kasa. 
                  Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de 
                  notre plateforme.`]}/>
                  <Dropdown title="Service" text={[`Nos équipes se tiennent à votre disposition pour vous fournir une 
                  expérience parfaite. N'hésitez pas à nous contacter si vous avez la moindre question.`]}/>
                  <Dropdown title="Sécurité" text={[`La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes 
                  que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. 
                  En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. 
                  Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes.`]}/>    
                  </div>
                  <Footer/>
        </div>
    )
}
