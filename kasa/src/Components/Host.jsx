import React from "react";
import "../styles/components-style/Host.css"

function Host({realtor}) {

    return(
<div className="containerHost">
    <div className="containerName">
    <p className="firstName">{realtor.name.split(' ')[0]}</p>
    <p className="lastName">{realtor.name.split(' ')[1]}</p>
    </div>
    <img className="portrait" src={realtor.picture} alt="portrait de l'agent immobilier" />
</div>
    )
}

export default Host;