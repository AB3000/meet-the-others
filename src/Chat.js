import React, { Component } from 'react'
import { StyleSheet, css } from 'aphrodite';
import styled, { keyframes } from 'styled-components';
import ChatHeader from './ChatHeader'
import MessageList from './MessageList'
import MessageForm from './MessageForm'
import App from './App'
import './Chat.css'
import fire from './Fire'
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
    const user =  "65GnB06eh7dDvufZ3rN7R2UHWZC3";
    // console.log("this.props.user is " + this.props.);
    // console.log ("this.props.roomName is " + this.props.roomName);

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