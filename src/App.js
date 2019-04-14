import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {StyleSheet, css} from 'aphrodite';
import styled, { keyframes } from 'styled-components';



  
class App extends Component {
  render() {
    return (
      <body className = {css(styles.body)}>
      <p className = {css(styles.FadeAnimations)}> Welcome!</p>
      <div className = {css(styles.FadeAnimations2)}>
             <form action="/action_page.php">
               <label for="fname">Username</label>
               <input type="text" id="fname" name="username" placeholder="Username" className = {css(styles.input)}></input>
           
               <label for="first">First Food Item</label>
               <input type="text" className = {css(styles.input)} id="first" name="lastname" placeholder="Your first time!"></input>
   
               <label for="second">Second Food Item</label>
               <input type="text" className = {css(styles.input)} id="second" name="lastname" placeholder="Your second item!"></input>
   
               <label for="third">Third Food Item</label>
               <input type="text" className = {css(styles.input)} id="third" name="lastname" placeholder="Your third item!"></input>
   
               <label for="fourth">Fourth Food Item</label>
               <input type="text" className = {css(styles.input)} id="fourth" name="lastname" placeholder="Your fourth item!"></input>
   
               <label for="fifth">Fifth Food Item</label>
               <input type="text" className = {css(styles.input)} id="fifth" name="lastname" placeholder="Your fifth item!"></input>
             
               <button type="submit" value="Submit"></button>
           </form>
      </div>
   </body>
    );
  }
}


const styles = StyleSheet.create({
  body: {
    backgroundColor: 'black',
  }, 
  
  FadeAnimations: {
    animationName: 'fadein',
    animationDuration: '3s',
    textAlign: 'center',
    color: 'white', 
    fontSize: '80px', 
    width: '100%', 
    padding: '20px', 
},

FadeAnimations2: {
  animationName: 'fadein',
  animationDuration: '3s',
  textAlign: 'center',
  color: 'white', 
  fontSize: '30px', 
  width: '50%', 
  padding: '20px', 
},

 div: {
  borderRadius: '5px',
  backgroundColor: '#f2f2f2',
  width: '75%',
  height: '75%',

  position: 'absolute',
  top:'0',
  bottom: '0',
  left: '0',
  right: '0',
    
  margin: 'auto',
 },
 
 input : {
  width: '100%',
  padding: '12px 20px',
  margin: '8px 0',
  display: 'inline-block',
  border: '1px solid #ccc',
  borderRadius: '4px',
  boxSizing: 'border-box',
 
 }, 


 button: {
    width: '100%',
    backgroundColor: '#4CAF50',
    color: 'white',
    padding: '14px 20px',
    margin: '8px 0',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',

 },


})

export default App;
