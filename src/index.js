import React, { Component } from 'react';
import { withRouter } from "react-router-dom"
import app from "firebase";
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA

/* My Code Starts here*/
class SignInContainer extends Component {
    handleSignIn = async event => {
        const { username, password } = event.target.elements;
        try{
            const user = await app
            .auth()
            .signInWithEmailAndPassword(username.value, password.value);
            this.props.history.push("/")
        } catch(error){
            alert(error);
        }
    };
}
/*My code ends here */
//I can't use on submit
ReactDOM.render(<App/>, document.getElementById('root'));
serviceWorker.unregister();
