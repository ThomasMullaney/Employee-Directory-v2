import React, { useContext}  from "react";
import UserBody from "../components/UserBody";
import "../style/UserTable.css";
import DataAreaContext from "../API.js/DataAreaContext";

const UserTable = () => {
const context = useContext(DataAreaContext);

return (
    <div className="datatable mt-5">
        <table 
        id="table"
        className="table table-striped table-hover table-condensed"
        >
            <thead>
                <tr>
                    {context.developerState.headings.map(({ name, width}) => {
                        return (
                            <th
                            className="col"
                            key={name}
                            style={{width}}
                            onClick={() => {
                                context.handleSort(name);
                            }}
                            >
                                {name}
                                <span className="pointer"></span>
                            </th>
                        );
                    })}
                </tr>
            </thead>
            <UserBody />
        </table>
    </div>
);
}

export default UserTable;