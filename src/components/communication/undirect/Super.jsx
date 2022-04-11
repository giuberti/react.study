import React, { useState } from "react";
import Sub from './Sub';

export default props => {

    const [number, setNumber] = useState(0);    // using state 
    const [text, setText] = useState('awaiting number');

    function whenClick(generatedValue, textValue) {
        console.log("Action!", generatedValue, textValue);
        setNumber(generatedValue);
        setText(textValue);
    }

    return (
        <div>
            <h3>Random Value</h3>
            <Sub onUserClick={whenClick}></Sub>
            <p>{number}</p> <p>{text}</p>
        </div>
    );
};