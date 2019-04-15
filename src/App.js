import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import {StyleSheet, css} from 'aphrodite';
import styled, { keyframes } from 'styled-components';
import { inherits } from 'util';

  
class App extends Component {
  render() {
    return (
    <body className = {css(styles.body)}>
      <p className = {css(styles.FadeAnimations)}> Welcome!</p>
      <div className = {css(styles.containBlocks)}>
          <p className = {css(styles.FadeAnimations2)}>New User? Start here!</p>
          <p className = {css(styles.FadeAnimations2)}>Already have an account? Login here!</p>
     </div>

      <div className = {css(styles.containBlocks)}>
      <div className = {css(styles.blocks)}>
             <form action="/action_page.php">
             <p className = {css(styles.label)}> What do you like to do in the weekend?</p>
               <label for="fname" className = {css(styles.label)}>Username</label>
               <input type="text" id="fname" name="username" placeholder="Username" className = {css(styles.input)}></input>

               <label for="password" className = {css(styles.label)}>Password</label>
               <input type="password" className = {css(styles.input)} id="password" name="password" placeholder="password"></input>
           
               <label for="first" className = {css(styles.label)}>First</label>
               <input type="text" className = {css(styles.input)} id="first" name="lastname" placeholder="Your first time!"></input>
   
               <label for="second" className = {css(styles.label)}>Second</label>
               <input type="text" className = {css(styles.input)} id="second" name="lastname" placeholder="Your second item!"></input>
   
               <label for="third" className = {css(styles.label)}>Third</label>
               <input type="text" className = {css(styles.input)} id="third" name="lastname" placeholder="Your third item!"></input>
   
               <label for="fourth" className = {css(styles.label)}>Fourth</label>
               <input type="text" className = {css(styles.input)} id="fourth" name="lastname" placeholder="Your fourth item!"></input>
   
               <label for="fifth" className = {css(styles.label)}>Fifth</label>
               <input type="text" className = {css(styles.input)} id="fifth" name="lastname" placeholder="Your fifth item!"></input>
             
               <button type="submit" value="Submit"></button>
           </form>
      </div>
      <div className = {css(styles.blocks)}>
             <form action="/action_page.php">
               <label for="name" className = {css(styles.label)}>Username</label>
               <input type="text" id="fname" name="username" placeholder="username" className = {css(styles.input)}></input>
           
               <label for="password" className = {css(styles.label)}>Password</label>
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

export default App;
