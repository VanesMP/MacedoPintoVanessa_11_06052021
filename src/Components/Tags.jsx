import React from "react";
import "../styles/components-style/Tags.css"

function Tags({tag}) {

    return (
        <ul className="tagList">
            {tag.map((nameTag) => (
                <li className="containerTag" key={nameTag}>
                    <p className="textTag">{nameTag}</p>
                </li>
            ))}
        </ul>

    )
}

export default Tags;