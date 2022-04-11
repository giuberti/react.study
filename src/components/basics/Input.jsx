import React, { useState } from "react";

export default (props) => {
    
    //let firstName = "Dwight";
    const [firstName, setName] = useState("Dwight");

    return (
    <>
        <h3>{firstName}</h3>
        <input type="text" value={firstName} onChange={e => setName(e.target.value)}/>
    </>
    );
};
