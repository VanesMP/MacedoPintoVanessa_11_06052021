import React from "react";
import { Link} from "react-router-dom"
import '../styles/pages-style/error-style.css';
import Header from "../Components/Header";

export default function Error() {
    return (
        <div>
             <Header />
            <div className="containerError">
            <div className="titreError">
                <h1 className="error">404</h1>
                <h2 className="oops">Oups! La page que vous demandez n' existe pas.</h2>
            </div>
            <p className="return"><Link to='/'>Retourner sur la page d'accueil</Link></p>
            </div>
                </div>
    ) };
