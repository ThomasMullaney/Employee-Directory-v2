import React from "react";
import "../style/Header.css";

function Header (){
    return (
        <div className="header">
            <h1>Employee Directory</h1>
            <h3>Sort by Clicking headers, or search for Employees by name or DOB</h3>
        </div>
    )
}

export default Header;