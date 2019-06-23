import React from 'react'
import ReactDOM from "react-dom"

import WelcomeAgain from "./WelcomeAgain"
import { Welcome } from "./WelcomeFunc"

function tick() {
    const element = (
        <div>
            <h1>Hello, world!</h1>
            <h2>It is {new Date().toLocaleTimeString()}.</h2>
        </div>
    );
    let d = new Date().toLocaleTimeString();
    console.log("Been executed! at" + d);
    ReactDOM.render(element, document.getElementById('root'));
}

function hello() {
    const element = <Welcome name="kaku" />
    setTimeout(helloAgain, 2000);
    ReactDOM.render(
        element,
        document.getElementById('root'),
    )
}

function helloAgain() {
    const element = <WelcomeAgain name="kaku" />
    ReactDOM.render(
        element,
        document.getElementById('root'),
    )
}

export { tick, hello, helloAgain }