import React from "react";
import { BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Home from "../src/pages/Home"
import About from "../src/pages/About"
import FicheLogement from "../src/pages/FicheLogement"
import Error from "../src/pages/Error"



function App() {
    return (
<Router>
<Routes>
    <Route exact path="/" element={<Home />}/>
    <Route exact path="/a-propos"  element={<About />}/>
    <Route exact path="/fiche-logement/:id"  element={<FicheLogement />}/> 
    <Route element={<Error />}/>
</Routes>
</Router>
    );
};

export default App;