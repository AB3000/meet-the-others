import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import { StyleSheet, css } from 'aphrodite';
import styled, { keyframes } from 'styled-components';
import { inherits } from 'util';
import { withRouter } from 'react-router-dom';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import firebase from './firebase'; // use this when database is implemented
import Chat from "./Chat";
import login from "./App";//TODO: You will need to remove this and have it reference the game that you guys are making
import Signup from "./App";//TODO: You will need to remove this and have it reference the game that you guys are making
// experimental db stuff
///* //Start of comments
var db = firebase.database()
var aut = firebase.auth()
var setUsername = "Username";
var password = "Password";

// current structure:
//   username  (string)
//   password  (string)
//   interests (string[5])
var createUser = (username, password, interests) => {
  var lukepassword = db.ref('users/lukecheng/password')
  lukepassword.on('value', (p) => {
    window.alert(p)
  })
}

var lukepassword = firebase.database().ref('users/lukecheng/password')
lukepassword.on('value', (p) => {
  window.alert(p)
  console.log("This works!")
})
/*SIGN IN*/
//We will have to get this from the data base itself, and set vars accordingly and then compare with the input some how

//check if passwords match
aut.signInWithEmailAndPassword(setUsername, password).catch(function (error) {
  var errorCode = error.code;
  var errorMessage = error.message;
  console.log(errorCode);
  console.log(errorMessage);
})
/*SIGN OUT*/
aut.signOut().then(function () {
  //Signout successful
  console.log("Signed out!");

}).catch(function (error) {
  console.log(error);
})
/*CHECK IF USER IS SIGNED IN */
aut.onAuthStateChanged(function (user) {
  if (user) {
    //Return true if user is signed in
    return true;
  } else {
    //Return false
    return false;
  }
})
//*/ //End of the comments

var list = new Map([["nature", ["farms", "parks", "nature trails", "exercising", "beaches", "hikes", "biking", "running", "outdoor games (i.e. hide and seek, tag, etc.)", "outdoor sports (i.e. football, basketball, etc.)", "road trips"]],
["city", ["shopping", "clubs", "bars", "lounges", "restaurants", "museums", "concerts"]],
["indoors", ["movies/TV shows", "board games", "watching random videos", "forums", "sleeping", "reading", "cooking", "personal projects", "Conversation Games (i.e. Never Have I ever, Truth or Dare)"]]]);
var IDs = ["first", "second", "third", "fourth", "fifth"]; //five options to fill
var options = (list.get("nature").concat(list.get("city"))).concat(list.get("indoors"))

class App extends Component {

  renderOptions() {
    return options.map((o) => (
      <option key={o} value={o}>{o}</option>
    ))
  }

  renderSelects() {
    return IDs.map((id) => (
      <div key={id}>
        <label htmlFor={id} className={css(styles.label)}>{id}</label>
        <select id={id} className={css(styles.input)}>
          <option defaultValue disabled>Please select an option: </option>
          {this.renderOptions()}
        </select>
      </div>
    ))
  }

  render() {
    return (
      <div className={css(styles.body)}>
        <p className={css(styles.FadeAnimations)}> Welcome!</p>
        <div className={css(styles.containBlocks)}>
          <p className={css(styles.FadeAnimations2)}>New User? Start here!</p>
          <p className={css(styles.FadeAnimations2)}>Already have an account? Login here!</p>
        </div>

        <div className={css(styles.containBlocks)}>
          <div className={css(styles.blocks)}>
            <form action="/Chat.js">
              <p className={css(styles.label)}> What do you like to do in the weekend?</p>
              <label htmlFor="fname" className={css(styles.label)}>Choose a username!</label>
              <input type="text" id="uNameNew" name="username" placeholder="Username" className={css(styles.input)}></input>

              <label htmlFor="password" className={css(styles.label)}>Create a password!</label>
              <input type="password" className={css(styles.input)} id="password" name="password" placeholder="password"></input>

              {this.renderSelects()}
              <Router>
                <div>

                </div>
              </Router>
              {/* <button type="submit" value="Submit"></button> */}
            </form>
          </div>
          <div className={css(styles.blocks)}>
            <form action="/Chat.js">
              <label htmlFor="name" className={css(styles.label)}>Username</label>
              <input type="text" id="uNameLogin" name="username" type="username" placeholder="username" className={css(styles.input)}></input>

              <label htmlFor="password" className={css(styles.label)}>Password</label>
              <input type="password" className={css(styles.input)} id="password" name="password" type="password" placeholder="password"></input>
              <button type="submit" value="Submit">Login</button>
            </form>
            <Router>
              <div>
                <Router exact path="./Chat" component={Chat} />
              </div>
            </Router>
          </div>
        </div>
      </div>
    );




  }


}




const styles = StyleSheet.create({

  html: {
    backgroundColor: 'black',
    overflow: 'hidden',
  },

  body: {
    backgroundColor: 'black',
    overflow: 'hidden',
  },

  FadeAnimations: {
    animationName: 'fadein',
    animationDuration: '3s',
    textAlign: 'center',
    color: 'white',
    fontSize: '80px',
    width: '100%',
    padding: '10px',
  },

  FadeAnimations2: {
    animationName: 'fadein',
    animationDuration: '5s',
    textAlign: 'center',
    color: '#95eff9',
    fontSize: '30px',
    paddingLeft: '20px',
    paddingRight: '20px',
    width: '40%',
  },

  blocks: {
    animationName: 'fadein',
    animationDuration: '3s',
    display: 'inline-block',
    textAlign: 'center',
    color: 'white',
    fontSize: '30px',
    width: '40%',
    height: '20%',
    overflow: 'auto',
    // float: 'left',
    paddingLeft: '20px',
    paddingRight: '20px',
    borderRadius: '5px',
    // height: '50vh',
    backgroundColor: '#f2f2f2',
  },

  containBlocks: {
    display: 'flex',
    paddingLeft: '30px',
    paddingRight: '30px',
    paddingBottom: '30px',
    justifyContent: 'space-between',
    position: 'relative',
    backgroundColor: 'black',
  },

  div: {
    // width: '75%',
    // height: '75%',

    position: 'absolute',
    top: '0',
    bottom: '0',
    left: '0',
    right: '0',

    margin: 'auto',
    // overflow: 'hidden',
  },

  input: {
    width: '100%',
    padding: '20px',
    margin: '8px 0',
    display: 'inline-block',
    border: '1px solid #ccc',
    borderRadius: '4px',
    boxSizing: 'border-box',
    // overflow: 'hidden',

  },

  button: {
    width: '100%',
    backgroundColor: '#4CAF50',
    color: 'white',
    padding: '10px',
    margin: '8px 0',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
    // overflow: 'hidden',
  },

  label: {
    color: 'black',
    fontSize: '30px',
    padding: '20px',
  },


})
//ReactDOM.render(app, document.getElementById('../src/App.js'));
export default App;
