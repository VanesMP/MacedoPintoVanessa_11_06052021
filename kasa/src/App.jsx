import React from "react";
import { BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Home from "../src/pages/Home"
import About from "../src/pages/About"
import FicheLogement from "../src/pages/FicheLogement"
import Error from "../src/pages/Error"


fetch("/data.json")
    .then(response => {
        console.log(response.json());
    })
    

function App() {
    return (
<Router>
<Routes>
    <Route path="/" element={<Home />}/>
    <Route path="/a-propos"  element={<About />}/>
    <Route path="/fiche-logement/:id"  element={<FicheLogement />}/> 
    <Route element={<Error />}/>
</Routes>
</Router>
    );
};

/* L.21: "/fiche-logement/:id" permette de recuperer le parametre dans l'url de la page fiche-logement */

export default App;