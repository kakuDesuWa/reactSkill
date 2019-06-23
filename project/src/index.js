import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';
import './App.css';
import * as serviceWorker from './serviceWorker';

import App from './App';
import { hello, anonymous, clickMe, formDemo, formikDemo, temperatureCaculatorDemo, buttonDemo } from './QuickDemo'
import { CustomerGrid, render,  } from './DevopsTool'

ReactDOM.render(
    <App />,
    document.getElementById('root'),
)

// setTimeout(hello, 2000);
// setTimeout(anonymous, 4000)
// setTimeout(clickMe, 6000)
// setTimeout(formDemo, 1000)
// setTimeout(formikDemo, 1000)
// setTimeout(temperatureCaculatorDemo, 1000)
// setTimeout(buttonDemo, 1000)
// setTimeout(render, 1000)
render()


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
