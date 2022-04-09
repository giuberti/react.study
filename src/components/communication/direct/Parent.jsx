import React from "react";
import Child from './Child';

export default props => 
    <div>
        <h3>Parent Component</h3>
        <Child lastName={props.lastName}>Phillip</Child>
        <Child {...props}>Cece</Child>
        <Child {...props}>Newcome</Child>
    </div>
