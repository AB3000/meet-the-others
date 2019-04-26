import React, { Component } from 'react'
import { StyleSheet, css } from 'aphrodite';
import styled, { keyframes } from 'styled-components';
import ChatHeader from './ChatHeader'
import MessageList from './MessageList'
import MessageForm from './MessageForm'
import App from './App'
import './Chat.css'
import fire from './Fire'
import { auth, db } from './Fire'
import firebase from 'firebase'
import shortid from 'shortid'

class Chat extends Component {

  constructor() {
    super()
    this.state = {
      textBox: '',
      messages: []
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  componentDidMount() {
    var user = auth.currentUser
    if (user) {
      this.setState({ user: user, room: user.photoURL }) // storing room info in photoURL may need to change later
    } else {
      window.alert("Sign in error occured. Please sign in again.")
      window.location = window.location.protocol + "//" + window.location.host
    }

    db.ref('messages').orderByChild('time').on('value', (s) => {
      let newState = [];
      //var messages = s.val()
      s.forEach(symS => {
        let messages = symS.val();
        newState.push({
          room: messages.room,
          date: messages.time,
          user: messages.user,
          text: messages.text
        })
      })
      // let newState = []
      // for (let id in messages) {
      //   newState.push(messages[id])
      // }
      this.setState({messages: newState})
    })
  }

  handleChange(e) {
    this.setState({ textBox: e.target.value })
  }

  handleSubmit(e) {
    e.preventDefault()
    if (this.state.textBox) {
      this.sendMessage()
    }
  }

  sendMessage() {
    db.ref('messages/' + shortid.generate()).set({
      user: this.state.user.email, // users dont have names rn
      time: new Date().toISOString(),
      text: this.state.textBox,
      room: this.state.room
    })
  }

  renderMessages() {
    return this.state.messages.map((m) => (
      <li>{"(I prefer the " + m.room + " life) " + m.user + ": " + m.text + " sent at "}</li>
    ))
  }

  render() {
    return (
      <div style={{backgroundColor: 'black', padding: 
            '20px', color: 'white', overflowY: 'scroll', fontSize: '20px'}}>
        <ul>{this.renderMessages()}</ul>
        <form onSubmit={this.handleSubmit}>
          <input type="text" style = {{color: '#888888', backgroundColor: 'white', height: '40%',
            fontSize: '20px',  width: '50%', border: 'none'}}onChange={this.handleChange}></input>
          <input type="submit"style = {{color: 'black', backgroundColor: 'pink', height: '40%',
            fontSize: '20px',  width: '20%', border: 'none'}} value="send"></input>
        </form>
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
    overflow: 'hidden',
  },
})
/*
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
    //this.syncMessages()

    var user = auth.currentUser
    if (user) {
      this.setState({ room: user.photoURL }) // storing room info in photoURL
    } else {
      window.alert("Sign in error occured. Please sign in again.")
      window.location = window.location.protocol + "//" + window.location.host
    }
    
    var sampleMessage = {
      id: shortid.generate(),
      user: user.email, // users dont have names rn
      time: new Date().toISOString(),
      text: "hello world",
      room: "city"
    }
    db.ref('messages/' + sampleMessage.id).set({
      user: sampleMessage.user,
      time: sampleMessage.time,
      text: sampleMessage.text,
      room: sampleMessage.room
    })
  }

  componentDidUpdate(prevProps, _prevState, _snapshot) {
    if (prevProps.roomName !== this.props.room) {
      this.syncMessages()
    }
  }

  componentWillUnmount() {
    fire.removeBinding(this.messagesRef)
  }

  syncMessages = () => {
    //Stop syncing with the current endpoint
    if (this.messagesRef) {
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

    console.log("message length is " + messages.length + "and messages is" + messages[1]);

    this.setState({ messages })
  }

  render() {
    // {this.ionViewDidLoad()};
    // console.log("room is  " +  this.props)
    return (
      <div className={css(styles.body)}>
        <div className="Chat" className={css(styles.style)}>
          {<ChatHeader
            room={this.props.roomName}
          />}
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
    overflow: 'hidden',
  },
})
*/
export default Chat