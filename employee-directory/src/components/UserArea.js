import React, { useState, useEffect} from "react";
import "../style/UserArea.css";
import UserTable from "../components/UserTable";
import Nav from "../components/Nav";
import API from "../API.js/API";
import DataAreaContext from "../API.js/DataAreaContext";


const UserArea = () => {
    const [developerState, setDeveloperState] = useState({
        users: [],
        order: "descend",
        filteredUsers = [],
        headings: [
            {name: "image", width: "10%", order: "descend"}
        ]
        
    })
}