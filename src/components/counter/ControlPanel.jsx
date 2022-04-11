import React from "react";

export default (props) => {
    return(
        <div>
            <button onClick={props.onAdd}>+</button>
            <button onClick={props.onReduce}>-</button>
        </div>
    );
}