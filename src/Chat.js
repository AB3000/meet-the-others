import React, { Component } from 'react'

import ChatHeader from './ChatHeader'
import MessageList from './MessageList'
import MessageForm from './MessageForm'
import App from './App'
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
    const user = this.props.user


    console.log("user is " + user);
    messages.push({
      id: `${user.uid}-${Date.now()}`,
      user,
      body,
      createdAt: Date.now(),
    })

    this.setState({ messages })
  }

  render() {
    // {this.ionViewDidLoad()};
    console.log("room is " +  this.props)
    return (
      <div className="Chat" style={styles}>
        { <ChatHeader
          room={this.props.roomName}
        /> }
        <MessageList
          messages={this.state.messages}
          room={this.props.roomName}
        />
        <MessageForm addMessage={this.addMessage} />
      </div>
    )
  }
}

const styles = {
  flex: 1,
  display: 'flex',
  flexDirection: 'column',
}

export default Chat