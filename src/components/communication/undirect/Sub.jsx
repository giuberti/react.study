import React from "react";

export default props =>
    <div>
        <button onClick={() => {
            props.onUserClick(Math.random(), "gerado numero" + Math.random().toString())
        }}>Change</button>
    </div>