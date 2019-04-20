import React, { Component } from 'react';
import app from "firebase";
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Chat from './Chat';
import {BrowserRouter as Router, Route, Link } from "react-router-dom";
import * as serviceWorker from './serviceWorker';


//ReactDOM.render(<Chat />, document.getElementById('root'))


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA

function Wrapper(props) {
    return (
        <Router>
            <Route exact path="/" component={App}/>
            <Route exact path="/Chat" component={Chat}/>
        </Router>
    )
}
ReactDOM.render(<Wrapper/>, document.getElementById('root'));
serviceWorker.unregister();