import './App.css';

import React from "react";

import FirstFunction from "./components/basics/First";
import UsingParameters from "./components/basics/UsingParameters";
import Parenting from './components/basics/Parenting';
import Repetition from './components/basics/Repetition';
import Conditional from './components/basics/Conditional';
import Parent from './components/communication/direct/Parent';
import Super from './components/communication/undirect/Super';
import Input from './components/basics/Input';
import Counter from './components/counter/Counter';
import LotteryFunction from './components/lotto/LotteryFunction';
import LotteryClass from './components/lotto/LotteryClass';
import Card from './components/layout/Card';

export default (props) => (
    <div className='App'>
        <h1>React Fundamentals</h1>
        <div className="cards">
            <Card title="First Component" color="#FECEAB">
                <FirstFunction />
            </Card>
            <Card title="Using Parameters" color="#FECEAB">
                <UsingParameters title='Parameter title' subtitle='this is a subtitle passing by parameter' />
            </Card>
            <Card title="Using Parenting of DOM" color="#99B898">
            <Parenting>
                <ul>
                    <li>Pamela</li>
                    <li>James</li>
                    <li>Michael</li>
                </ul>
                </Parenting>
            </Card>
            <Card title="Using Repetition" color="#99B898">
            <Repetition />
            </Card>
            <Card title="Using Conditional" color="#99B898">
            <Conditional number="4" />
            </Card>
            <Card title="Direct Commnunication" color="#FF847C">
                <Parent lastName="Halpert"/>
            </Card>
            <Card title="Undirect Commnunication" color="#FF847C">
                <Super />
            </Card>
            <Card title="Controlled Component" color="#FF847C">
                <Input />
            </Card>
            <Card title="Using Class" color="#e84a5f">
                <Counter step={5} inicialValue={100}></Counter>
            </Card>
            <Card title="Lottery using Function" color="#e84a5f">
                <LotteryFunction lowerBall={1} higherBall={59} quantityBalls={6}></LotteryFunction>
            </Card>
            <Card title="Lottery using Class" color="#e84a5f">
                <LotteryClass lowerBall={1} higherBall={59} quantityBalls={6}></LotteryClass>
            </Card>
        </div>
    </div>
)
