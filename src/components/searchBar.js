import React from "react";
import "../styles/index.css";

function SearchBar(props) {
    return (
        <form className="search-box"
            onSubmit={props.handleFormSubmit}>
            <div className="form-group">
                <input
                    onChange={props.handleInputChange}
                    value={props.value}
                    name="search"
                    type="text"
                    className="form-control"
                    placeholder={props.placeholder}
                    id="search"
                />
            </div>
            <br />
        </form>
    );
}

export default SearchBar;