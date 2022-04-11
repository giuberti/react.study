import './Counter.css';
import React from "react";
import Display from './Display';
import ControlPanel from './ControlPanel';
import SetupPanel from './SetupPanel';

export default class Counter extends React.Component {

    constructor(props)
    {
        super(props);
        this.state = { 
            step: this.props.step || 1,
            value: this.props.inicialValue || 0,
        }
    }

    add = () => {
        this.setState({
            value: this.state.value + this.state.step,
        });
    }

    reduce = () => {        
        this.setState({
            value: this.state.value - this.state.step,
        });  
    }

    changeStepValue = (newStep) => {
        this.setState({
            step: +newStep,
        });  
    }

    render() {
        return (
            <div className='counter'>
                <h2>Counter</h2>
                <SetupPanel actualStep={this.state.step} onStepChange={this.changeStepValue}/>
                <Display actualValue={this.state.value}></Display>
                <ControlPanel onAdd={this.add} onReduce={this.reduce}/>
            </div>
        );
    };
};