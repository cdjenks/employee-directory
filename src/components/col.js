import React from "react";

function Col(props) {
    const size = props.size.split(" ").map(size => "col-" + size).join(" ");

    return (
        <div className={size}>
            <p>{props.children}</p>
        </div>
    );
}

export default Col;