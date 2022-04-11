import React from "react";

export default class LotteryClass extends React.Component {

    constructor(props)
    {
        super(props);
        this.state = { 
            lowerBall: props.lowerBall || 1,
            higherBall: props.higherBall || 99,
            balls: Array(props.quantityBalls).fill(0)
        }
        this.drawn();
    };

    
    drawBall = (currentBalls) => {
        let newBall = parseInt(Math.random() * this.state.higherBall-1, 10) + this.state.lowerBall;
        return(currentBalls.includes(newBall)? this.drawBall(currentBalls): newBall);
    };

    drawn = () => {
         // inicializing a size props defined array
        let newBalls = Array(this.state.balls.length).fill(0); 

         // using .reduce to assign a generatedNumber to this array. 
         // Instead of .map, I need to use .reduce to use the current array to draw new numbers without repetition
         newBalls = newBalls.reduce((prev, init) => {
            return([...prev, this.drawBall(prev)]);
        }, [])

        // sorting the previous results...
        newBalls = newBalls.sort((a,b) => a - b);
        this.setState({
            balls: newBalls
        });
    };

    render() {
        return (
            <div>
                <h2>Lottery full of Class!</h2>
                <button onClick={this.drawn}>Draw balls!</button>
                <h3>{this.state.balls.join(' - ')}</h3>
            </div>
        );
    };
}

