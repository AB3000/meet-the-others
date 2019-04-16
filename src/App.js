import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import {StyleSheet, css} from 'aphrodite';
import styled, { keyframes } from 'styled-components';
import { inherits } from 'util';
import { withRouter } from 'react-router-dom';


var list = new Map([["nature", [ "farms", "parks", "nature trails", "exercising", "beaches", "hikes", "biking", "running", "outdoor games (i.e. hide and seek, tag, etc.)", "outdoor sports (i.e. football, basketball, etc.)", "road trips"]], 
            ["city" , ["shopping", "clubs", "bars", "lounges", "restaurants", "museums", "concerts"]], 
            ["indoors", ["movies/TV shows", "board games", "watching random videos", "forums", "sleeping", "reading", "cooking", "personal projects", "Conversation Games (i.e. Never Have I ever, Truth or Dare)"]]]); 

var IDs = ["first", "second", "third", "fourth", "fifth"]; //five options to fill
// console.log(list.get("nature"));
window.onload = function () {

for(var j  = 0; j < IDs.length; j++){ //outer loop for 5 options
  console.log("THE J IS " + IDs[j]);
  var select = document.getElementById(IDs[j]);
  // console.log("select is " + select);
  var options = (list.get("nature").concat(list.get("city"))).concat(list.get("indoors"));
  console.log(options + " and the length is " + options.length);
  for(var i = 0; i < options.length; i++) {
      var opt = options[i];
      // console.log("options at i is " + options[i]);
      var element = document.createElement("option");
      element.textContent = opt;
      element.value = opt;
      // console.log("el is " + el.value);
      select.appendChild(element);
  }
}
};


  // console.log("jdksaljdlas");
class App extends Component {
  render() {
    return (
      // console.log("djsakdjslakdjlaksjl"),
    <body className = {css(styles.body)}>
      <p className = {css(styles.FadeAnimations)}> Welcome!</p>
      <div className = {css(styles.containBlocks)}>
          <p className = {css(styles.FadeAnimations2)}>New User? Start here!</p>
          <p className = {css(styles.FadeAnimations2)}>Already have an account? Login here!</p>
     </div>

      <div className = {css(styles.containBlocks)}>
      <div className = {css(styles.blocks)}>
             <form action="/Chat.js">
             <p className = {css(styles.label)}> What do you like to do in the weekend?</p>
               <label htmlFor="fname" className = {css(styles.label)}>Choose a username!</label>
               <input type="text" id="uNameNew" name="username" placeholder="Username" className = {css(styles.input)}></input>

               <label htmlFor="password" className = {css(styles.label)}>Create a password!</label>
               <input type="password" className = {css(styles.input)} id="password" name="password" placeholder="password"></input>
   

               <label htmlFor="first" className = {css(styles.label)}>First</label> 
                  <select id="first" className = {css(styles.input)}>
                       <option value="default">parks</option>
                  </select>

              <label htmlFor="second" className = {css(styles.label)}>Second</label> 
                  <select id="second" className = {css(styles.input)}>
                       <option value="default">lounges</option>
                  </select>

              <label htmlFor="third" className = {css(styles.label)}>Third</label> 
                  <select id="third" className = {css(styles.input)}>
                       <option value="default">watching random videos</option>
                  </select>

              <label htmlFor="fourth" className = {css(styles.label)}>Fourth</label> 
                  <select id="fourth" className = {css(styles.input)}>
                       <option value="default">biking</option>
                  </select>

              <label htmlFor="fifth" className = {css(styles.label)}>Fifth</label> 
                  <select id="fifth" className = {css(styles.input)}>
                       <option value="default">biking</option>
                  </select>
             
                 
               {/* <button type="submit" value="Submit"></button> */}
           </form>
      </div>
      <div className = {css(styles.blocks)}>
             <form action="/Chat.js">
               <label htmlFor="name" className = {css(styles.label)}>Username</label>
               <input type="text" id="uNameLogin" name="username" placeholder="username" className = {css(styles.input)}></input>
           
               <label htmlFor="password" className = {css(styles.label)}>Password</label>
               <input type="password" className = {css(styles.input)} id="password" name="password" placeholder="password"></input>
               <button type="submit" value="Submit"></button>
           </form>
        </div>
      </div>  
   </body> 
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
ReactDOM.render(app, document.getElementById('../src/App.js'));
export default App;
