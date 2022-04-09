import React from "react";
import If from './If';

export default props => {
    return (
        <div>
            <h2> The number {props.number} is</h2>
            { /*
                // In React, must use inline conditionals
                Or, create a IF component, imported above, to use as follow

                (props.number % 2) === 0 ? 
                    <span>Even</span>
                    : <span>Odds</span>
            */}

            <If test={(props.number % 2) === 0}>
                <span>Even</span>
            </If>
            <If test={(props.number % 2) === 1}>
                <span>Odds</span>
            </If>
        </div>
    );
}