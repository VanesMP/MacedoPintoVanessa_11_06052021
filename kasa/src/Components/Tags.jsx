import React from "react";
import "../styles/components-style/Tags.css"

function Tags({tag}) {
    return (
        <ul className="tagList">
            {tag.map((nameTag, index) => (
                <li className="containerTag" key={index}>
                    <p className="textTag">{nameTag}</p>
                </li>
            ))}
        </ul>

    )
}

export default Tags;