import React from "react";
import '../styles/pages-style/index-style.css';
import Header from "../Components/Header";
import Banner from "../Components/Banner";

import Footer from "../Components/Footer";

import background from "../assets/backgroundPropos.png";

function About() {
    return ( 
        <div className='App'>
                  <Header />
                  <Banner>
                  <img className="background" src={background} alt="kasa-location-appartements" />
        <h1 className="slogan">Chez vous, partout et ailleurs</h1> 
                  </Banner> 
                  
                  <Footer/>
        </div>
    )
}

export default About;