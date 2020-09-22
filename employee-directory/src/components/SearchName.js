import React from "react";
import "../style/SearchName.css";
import DataAreaContext from "../API.js/DataAreaContext";

const SearchName = () => {
    const context = useContext(DataAreaContext);

    return (
        <div className="searchBox">
            <div className="input-group">
                <div className="input-group-prepend">
                    <span className="input-group-text" id="">
                        Search
                    </span>
                </div>
                <input className="form-control mr-sm-2"
                type="search"
                placeholder="name"
                aria-label="Search"
                onChange={e => context.handleSearchChange(e)}
                />
            </div>
        </div>
    );
}

export default SearchName;