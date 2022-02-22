import React from "react";
import '../styles/pages-style/index-style.css';
import Header from "../Components/Header";
import Banner from "../Components/Banner";

import Footer from "../Components/Footer";

import background from "../assets/backgroundPropos.png";

export default function About() {
    return ( 
        <div className='App'>
                  <Header />
                  <Banner>
                  <img className="background" src={background} alt="kasa-location-appartements" />
                  </Banner> 
                  
                  <Footer/>
        </div>
    )
}
