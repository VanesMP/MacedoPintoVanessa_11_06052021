import React from "react";
import PropTypes from 'prop-types';
import "../styles/components-style/Dropdown.css"
import arrow from "../assets/arrowDropdown.png"

function Dropdown ({title, text}) {
return (
    <div className="containerValue">
        <div className="dropdown" >
        <h2 className="valueTitle">{title}</h2>
        <div className="arrowIcon" onClick={handleClick}><img data-name={title} src={arrow} alt="fleche de dropdown" /></div>
        </div>
        <ul className="descriptionValue" data-textname={title}>
        {text.map((element, index) => (
                <li className="valueText" key={title + index}>{element}</li>        
            ))}
        </ul>
    </div>
)
}

function handleClick(e){
 const arrow = e.target;
 arrow.classList.toggle('activeArrowIcon');
const textAppear = document.getElementsByClassName('descriptionValue')
 for (let i=0; i<textAppear.length; i++){
  if(arrow.dataset.name === textAppear[i].dataset.textname){
     textAppear[i].classList.toggle('notHidden')}
 }
}

Dropdown.propTypes = {
    title: PropTypes.string,
    text: PropTypes.array,
}

export default Dropdown;