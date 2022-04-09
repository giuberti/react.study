import React from "react";

export default (props) =>
    <div>
        <h2>I'm the parent</h2>
        <div>
            {props.children}
        </div>
    </div>