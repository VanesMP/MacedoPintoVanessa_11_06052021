import React from "react";
import { BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Home from "../src/pages/Home"
import About from "../src/pages/About"
import AccomodationSheet from "../src/pages/AccomodationSheet"
import Error from "../src/pages/Error"



function App() {
    return (
<Router>
<Routes>
    <Route path="/" element={<Home />}/>
    <Route path="/about"  element={<About />}/>
    <Route path="/AccomodationSheet/:id"  element={<AccomodationSheet />}/> 
    <Route path="/*" element={<Error />}/>
</Routes>
</Router>
    );
};

export default App;