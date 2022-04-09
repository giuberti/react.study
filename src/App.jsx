import './App.css';

import React from "react";

import FirstFunction from "./components/basics/First";
import UsingParameters from "./components/basics/UsingParameters";
import Parenting from './components/basics/Parenting';
import Repetition from './components/basics/Repetition';
import Conditional from './components/basics/Conditional';
import Parent from './components/communication/direct/Parent';
import Super from './components/communication/undirect/Super';
import Card from './components/layout/Card';

export default (props) => (
    <div className='App'>
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
    </div>
)
