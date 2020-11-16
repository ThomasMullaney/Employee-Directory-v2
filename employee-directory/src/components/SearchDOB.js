import React, { useContext } from "react";
import DataAreaContext from "../API.js/DataAreaContext";
// import "../style/SearchDOB.css";

const SearchDOB = () => {
    const context = useContext(DataAreaContext);

    return(
        <div className="searchbox">
            <div className="input-group">
                <div className="input-group-prepend">
                        <span className="input-group-text" id="">
                        DOB
                        </span>
                
                <input type="date" className="form-Control" onChange= {e => context.handleSearchChange(e)} />
                </div>
            </div>
        </div>
    );
};

export default SearchDOB;