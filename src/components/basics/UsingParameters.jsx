import React from "react";

export default (props) =>
// props is readonly!!!
    <>
        <h3>{props.title}</h3>
        <h4>{props.subtitle}</h4>
    </>