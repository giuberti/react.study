import React, { useState } from "react";

export default (props) => {

    const [balls, setBalls] = useState(Array(props.quantityBalls).fill(0));

    function drawBall(currentBalls) {
        let newBall = parseInt(Math.random() * props.higherBall-1, 10) + props.lowerBall;
        return(currentBalls.includes(newBall)? drawBall(currentBalls): newBall);
    }

    function draw() {
         // inicializing a size props defined array
        let drawedBalls = Array(props.quantityBalls).fill(0); 

         // using .reduce to assign a generatedNumber to this array. 
         // Instead of .map, I need to use .reduce to use the current array to draw new numbers without repetition
         drawedBalls = drawedBalls.reduce((prev, init) => {
            return([...prev, drawBall(prev)]);
        }, [])

        // sorting the previous results...
        drawedBalls = drawedBalls.sort((a,b) => a - b);
        setBalls(drawedBalls);
    };

    return (
        <>
            <h2>Functional Lottery</h2>
            <button onClick={draw}>Draw balls!</button>
            <h3>{balls.join(' - ')}</h3>

        </>
    );
};