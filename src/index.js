import React, { Component } from 'react';
import app from "firebase";
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Chat from './Chat';
import {BrowserRouter as Router, Route, Link } from "react-router-dom";
import * as serviceWorker from './serviceWorker';
import {createBrowserHistory} from "history"

const history = createBrowserHistory()

//ReactDOM.render(<Chat />, document.getElementById('root'))
const data = {};

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
function Wrapper(props) {
    return (
        <Router>
            <Route exact path="/" render={(props) =>
                <App history={history} data={data} />  
            }/>
            <Route exact path="/Chat" render={(props) =>
                <Chat history={history} data={data} />   
            }/>
        </Router>
    )
}

ReactDOM.render(Wrapper(), document.getElementById('root'));
serviceWorker.unregister();


//have the class here 
