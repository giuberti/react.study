import React from "react";

export default props =>
    <div>
        <button onClick={() => {
            props.onUserClick(Math.random())
        }}>Change</button>
    </div>