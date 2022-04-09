import React from "react";
import Sub from './Sub';

export default props => {

    function whenClick(generatedValue) {
        console.log("Action!", generatedValue);
    }

    return (
        <div>
            <h3>Random Value</h3>
            <Sub onUserClick={whenClick}></Sub>
        </div>
    );
};