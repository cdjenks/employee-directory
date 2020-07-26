import React from "react";
import "../styles/index.css";

function SortButton(props) {
    return (
        <button onClick={props.alphabetizeNames} className="btn sort-button">
            {props.type}
        </button>
    );
}

export default SortButton;