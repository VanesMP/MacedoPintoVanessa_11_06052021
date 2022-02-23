import React from "react";
import "../styles/components-style/Values.css"
import arrow from "../assets/arrowDropdown.png"

function Dropdown ({title, text}) {
return (
    <div className="containerValue">
        <div className="dropdown" >
        <h2 className="valueTitle">{title}</h2>
        <div className="arrowIcon" onClick={handleClick}><img src={arrow} alt="fleche de dropdown" /></div>
        </div>
        <div className="descriptionValue">
        <p className="valueText">{text}</p>
        </div>
    </div>
)
}

function handleClick(e){
 console.log("hello")
 console.log(e.target)
 const arrow = e.target;
 arrow.classList.toggle('activeArrowIcon')
 const textAppear = document.getElementsByClassName('descriptionValue')
 for (let i=0; i<textAppear.length; i++){
     textAppear[i].classList.toggle('notHidden')
    console.log(textAppear[i]) 

 }
}

export default Dropdown;