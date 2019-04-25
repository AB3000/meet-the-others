import React, { Component } from 'react'
import { StyleSheet, css } from 'aphrodite';
import styled, { keyframes } from 'styled-components';
import ChatHeader from './ChatHeader'
import MessageList from './MessageList'
import MessageForm from './MessageForm'
import App from './App'
import './Chat.css'
import fire from './Fire'
import {auth} from './Fire'
import firebase from 'firebase'


var userId = "";

class Chat extends Component {
  constructor() {
    super()

    this.state = {
      messages: [],
    }
  }

  // ionViewDidLoad(){
  //   console.log("I'M IN HERE");
  //   // this.userId = fire.auth().currentUser.uid;
  // }
  
  componentDidMount() {
    this.syncMessages()
  }

  componentDidUpdate(prevProps, _prevState, _snapshot){
    if(prevProps.roomName !== this.props.room){
      this.syncMessages()
    }
  }

  componentWillUnmount() {
    fire.removeBinding(this.messagesRef)
  }

  syncMessages = () => {
    //Stop syncing with the current endpoint
    if(this.messagesRef){
      fire.removeBinding(this.messagesRef)
    }
    this.messagesRef = fire.syncState(
      `messages/${this.props.roomName}`,
      {
        context: this,
        state: 'messages',
        asArray: true,
      }
    )
  }

  addMessage = (body) => {

    const messages = [...this.state.messages]
    //const user =  firebase.auth.id;
    const user = auth.currentUser
    console.log("this.props.user is " + user);


    console.log("user is " + user);
    messages.push({
      // id: `${user.uid}-${Date.now()}`,
      user,
      body,
      createdAt: Date.now(),
    })

    console.log ("message length is " + messages.length + "and messages is" + messages[1]);

    this.setState({ messages })
  }

  render() {
    // {this.ionViewDidLoad()};
    // console.log("room is  " +  this.props)
    return (
     
      <div className={css(styles.body)}>
      <div class="blob">
  {/* <!-- This SVG is from https://codepen.io/Ali_Farooq_/pen/gKOJqx --> */}
  <svg viewBox="0 0 310 350">
  <path d="M156.4,339.5c31.8-2.5,59.4-26.8,80.2-48.5c28.3-29.5,40.5-47,56.1-85.1c14-34.3,20.7-75.6,2.3-111  c-18.1-34.8-55.7-58-90.4-72.3c-11.7-4.8-24.1-8.8-36.8-11.5l-0.9-0.9l-0.6,0.6c-27.7-5.8-56.6-6-82.4,3c-38.8,13.6-64,48.8-66.8,90.3c-3,43.9,17.8,88.3,33.7,128.8c5.3,13.5,10.4,27.1,14.9,40.9C77.5,309.9,111,343,156.4,339.5z"/>
  </svg>
</div>
      <div className="Chat" className={css(styles.style)}>
        { <ChatHeader
          room={this.props.roomName}
        /> }
        <MessageList
          messages={this.state.messages}
      
          room={this.props.roomName}
        />
        <MessageForm addMessage={this.addMessage} />
      </div>

      </div>
    )
  }
}

const styles = StyleSheet.create({

  body: {
    backgroundColor: 'black',
    // overflow: 'auto',
    overflow: 'hidden',
  },

  style: {
       flex: 1,
      display: 'flex',
      flexDirection: 'column',
  },
})

export default Chat