import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import { StyleSheet, css } from 'aphrodite';
import styled, { keyframes } from 'styled-components';
import { inherits } from 'util';
import { withRouter } from 'react-router-dom';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import {auth} from './Fire'
import firebase from './Fire'; // use this when database is implemented
import Chat from "./Chat";
import login from "./App";
import PrivateRoute from "./PrivateRoute";
import { app } from 'firebase';


// experimental db stuff
///* //Start of comments
// var db = firebase.database()
// var aut = firebase.auth()
// var username = "Username";
// var password = "Password";
// current structure:
//   username  (string)
//   password  (string)
//   interests (string[5])
// var createUser = (username, password, interests) => {
//   var lukepassword = db.ref('users/lukecheng/password')
//   lukepassword.on('value', (p) => {
//     window.alert(p)
//   })
// }



// var lukepassword = firebase.database().ref('users/lukecheng/password')
// lukepassword.on('value', (p) => {
//   window.alert(p)
// })
/*SIGN IN*/
//We will have to get this from the data base itself, and set vars accordingly and then compare with the input some how

//check if passwords match
// auth.signInWithEmailAndPassword(username, password).catch(function(error){
//   var errorCode = error.code;
//   var errorMessage = error.message;
//   console.log(errorCode);
//   console.log(errorMessage);
// })
// /*SIGN OUT*/
// aut.signOut().then(function(){
//   //Signout successful
//   console.log("Signed out!");

// }).catch(function(error){
//   console.log(error);
// })
// //*/ //End of the comments

var list = new Map([["nature", [ "farms", "parks", "nature trails", "exercising", "beaches", "hikes", "biking", "running", "outdoor games (i.e. hide and seek, tag, etc.)", "outdoor sports (i.e. football, basketball, etc.)", "road trips"]], 
            ["city" , ["shopping", "clubs", "bars", "lounges", "restaurants", "museums", "concerts"]], 
            ["indoors", ["movies/TV shows", "board games", "watching random videos", "forums", "sleeping", "reading", "cooking", "personal projects", "Conversation Games (i.e. Never Have I ever, Truth or Dare)"]]]); 

  var options = (list.get("nature").concat(list.get("city"))).concat(list.get("indoors"));

var IDs = ["first", "second", "third", "fourth", "fifth"]; //five options to fill
var roomName = "nature";
// console.log(list.get("nature"));

//determines the roomname of the room the user will be redirected to 
function name() {
    var chosenOptions = [document.getElementById("first").value, document.getElementById("second").value
  , document.getElementById("third").value, document.getElementById("fourth").value, 
  document.getElementById("fifth").value]
   var natureCount = 0, cityCount = 0, indoorsCount = 0;
   console.log(list.get("nature"));
   for(var i = 0; i < chosenOptions.length; i++){
       if(list.get("nature").indexOf(chosenOptions[i]) >= 0){
           natureCount++;
       } else if (list.get("city").indexOf(chosenOptions[i]) >= 0){
           cityCount++;
       } else { //indoors
           indoorsCount++;
       }
   }
   
   if(natureCount >= 3){//nature is the most
        roomName = "nature";
   } else if (cityCount >= 3){//city is the most
        roomName = "city";
   } else if (indoorsCount >= 3){//indoors is the most
        roomName = "indoors";
   } else { //all other cases
      var room = Math.floor(Math.random() * 2); //generates a number from 0 (inclusive) to 1 (inclusive)
      if(cityCount == natureCount && cityCount >= indoorsCount){
           if (room == 0){
              roomName = "city";
           } else { 
              roomName = "nature";
           }
      } else if (cityCount == indoorsCount && cityCount >= natureCount){
          if (room == 0){
              roomName = "city";
          } else { 
              roomName = "indoors";
          }
      } else if(natureCount == indoorsCount && natureCount >= cityCount){
          if (room == 0){
              roomName = "nature";
          } else { 
              roomName = "indoors";
          }
      } else { //all three are randomly scattered (not gonna happen)
          var r = Math.floor(Math.random() * 3); //generates a number from 0 (inclusive) to 2 (inclusive)
          if (r == 0){
              roomName = "nature";
          } else  if(r == 1) { 
              roomName = "indoors";
          } else {
              roomName = "city";
          }
      } 
   }
 
} 


const state = {
      password: "",
      username:"",
      roomName:"",
      errorMessage: null,
}

 // console.log("jdksaljdlas");
class App extends Component {

  constructor(props) {
    super(props)
    this.handleChange = this.handleChange.bind(this)
    this.state = {
      ...state
    }
  }

  
  
  handleChange = (event) => {
    const newValue = {}
    newValue[event.target.name] = event.target.value
    this.setState(newValue)
  }

  handleSignIn = (event) => {
    event.preventDefault();
    auth
    .signInWithEmailAndPassword(this.state.username, this.state.password)
    .then(() => {
      //console.log("test")

      this.setState({...state})
    })
    .catch(error =>this.setState({errorMessage:"Invalid signin"}))
  }

  handleSignUp = (event) => {
    event.preventDefault();
    auth
    .createUserWithEmailAndPassword(this.state.username, this.state.password)
    .then(() => {
      //console.log("test")
      //this.setState({...this.state})
      if(this.state.username){
        this.props.updateUser({
          username: this.state.username,
        })
      }
    })
    .catch(error => this.setState({errorMessage:"Invalid Signup"}))
  }

  
    //const {username, password} = event.target.id
    // try {
    //   const user = await login.auth.signInWithEmailAndPassword(username.value, password.value)
    //   this.props.history.push("/");
    // }catch (error){
    //   alert(error)
    // };

  handleSelect = (event) => {
    // console.log(event.target.id + " and the value is " + event.target.value)
    this.setState({[event.target.id]: event.target.value});
  }

  handleSubmit = (event) => {
    event.preventDefault();
    //console.log(this.state)
    name(); //get the roomname user will be assigned to
    console.log("this is the room " + roomName.value);
    this.props.history.push("/Chat");
  }
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



  componentWillMount() {
    auth.onAuthStateChanged(user => {
      if (user) {
        this.setState({
          authenticated: true,
          currentUser: user,
          loading: false
        });
      } else {
        this.setState({
          authenticated: false,
          currentUser: null,
          loading: false
        });
      }
    });
  }

  render() {
    const {first, second, third, fourth, fifth, password, username, errorMessage} = this.state;
    return (
    
    <div className = {css(styles.body)}>
      {/* <p className = {css(styles.FadeAnimations)}> Welcome!</p> */}
      <div className = {css(styles.containBlocks)}>
          <p className = {css(styles.FadeAnimations2)}>New User? Start here!</p>
          <p className = {css(styles.FadeAnimations2)}>Already have an account? Login here!</p>
     </div>

      <div className = {css(styles.containBlocks)}>
      <div className = {css(styles.blocks)}>
             <form action="/Chat">
             <p className = {css(styles.label)}> What do you like to do in the weekend?</p>
               <label htmlFor="fname" className = {css(styles.label)}>Choose a username!</label>
               <input type="text" id="username" name="username" placeholder="Username" className = {css(styles.input)} onChange = {this.handleSelect}></input>

               {/* <label htmlFor="password" className = {css(styles.label)}>Create a password!</label>
               <input type="password" className = {css(styles.input)} onChange = {this.handleSelect} id="password" name="password" placeholder="password"></input> */}
   

               <label htmlFor="first" className = {css(styles.label)}>First</label> 
                  <select id="first" className = {css(styles.input)} defaultValue="concerts" onChange = {this.handleChange} >
                  {
                    options.map((id) => 
                    <option value={id}>{id}</option>)
                  }
                  </select>

              <label htmlFor="second" className = {css(styles.label)}>Second</label> 
                  <select id="second" className = {css(styles.input)} defaultValue="biking" onChange = {this.handleChange}>
                  {
                    options.map((id) => 
                    <option value={id}>{id}</option>)
                  }
                  </select>

              <label htmlFor="third" className = {css(styles.label)}>Third</label> 
                  <select id="third" className = {css(styles.input)} defaultValue="lounges"onChange = {this.handleChange}>
                  {
                    options.map((id) => 
                    <option value={id}>{id}</option>)
                  }
                  </select>

              <label htmlFor="fourth" className = {css(styles.label)}>Fourth</label> 
                  <select id="fourth" className = {css(styles.input)} defaultValue="running" onChange = {this.handleChange}>
                  {
                    options.map((id) => 
                    <option value={id}>{id}</option>)
                  }
                  </select>

              <label htmlFor="fifth" className = {css(styles.label)}>Fifth</label> 
                  <select id="fifth" className = {css(styles.input)} defaultValue="museums"onChange = {this.handleChange}>
                  {
                    options.map((id) => 
                    <option value={id}>{id}</option>)
                  }
                  </select>
             
                 
               <button type="submit" value="Submit" onSubmit = {this.handleSignUp} > Submit</button>
               <Router>
                <div>

                </div>
              </Router>
           </form>
      </div>
      <div className = {css(styles.blocks)}>
             <form action="/Chat">
               <label htmlFor="name" className = {css(styles.label)}>Username</label>
               <input type="text" id="uNameLogin" name="username" placeholder="username" className = {css(styles.input)} onChange={this.handleChange}></input>
           
               {/* <label htmlFor="password" className = {css(styles.label)}>Password</label> */}
               {/* <input type="password" className = {css(styles.input)} id="password" name="password" placeholder="password" onChange={this.handleChange}></input>
               <button type="submit" value="Submit" onSubmit = {this.handleSubmit}> Submit</button> */}
               <Route>
                 <div>
                 </div>
               </Route>
           </form>
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
  justifyContent:'space-between',
  position: 'relative',
  backgroundColor: 'black',
},

 div: {
  // width: '75%',
  // height: '75%',

  position: 'absolute',
  top:'0',
  bottom: '0',
  left: '0',
  right: '0',
    
  margin: 'auto',
  // overflow: 'hidden',
 },
 
 input : {
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
