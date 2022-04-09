import React from "react";

function FirstFunction() {  // could be an ArroyFunction, but lets do this on the second component
    return (
        // using <React.Fragment> as an alternative way to avoid <div> creation. Also <> and </> works.
        <React.Fragment>  
            <h1>First</h1>
            <h2>Sample of a component.</h2>
        </React.Fragment>
    );
}

export default FirstFunction;

/*
// This is more writeless as possible.

export default () =>
    <>
        <h1>First</h1>
        <h2>Sample of a component.</h2>
    </>

*/
