import Header from "./Components/Header";
import Banner from "./Components/Banner";

import background from "../src/assets/backgroungAccueil.png"

function App() {
    return ( 
        <div className='App'>
                  < Header />
                  <Banner>
                  <img src={background} alt="kasa-location-appartements" />
        <h1 className="slogan">Chez vous, partout et ailleurs</h1> 
                  </Banner> 
                      
        </div>
    );
}

export default App;