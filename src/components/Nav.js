import React from "react";
import SearchName from "../components/SearchName";
import SearchDOB from "../components/SearchDOB";
import "../style/Nav.css";

function Nav(){
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="collapse navbar-collapse row" id="navbarNav">
            <div className="search-area col-4">
                <SearchName />
                <SearchDOB />
            </div>
        </div>
        </nav>
    ); 
}
export default Nav;