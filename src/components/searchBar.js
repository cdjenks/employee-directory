import React from "react";
import "../styles/index.css";

function SearchForm(props) {
    return (
        <form className="search-box"
            onSubmit={props.handleFormSubmit}>
            <div className="form-group">
                <label htmlFor="search">Search:</label>
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

export default SearchForm;