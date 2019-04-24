import React, {Component} from 'react'

import Message from './Message'

class MessageList extends Component {
// componentDidUpdate(prevProps){
//   if(prevProps.messages.length<this.props.messages.length)
//    this.scrollToBottom()
// }

scrollToBottom =() =>{
  this.messagesEnd.scrollIntoView({behavior:'smooth'})
}

  render(){
    const {messages} = this.props
    return (
      <div
        className="MessageList"
        style={styles.messageList}
      >
        <div
          className="roomAnnouncement"
          style={styles.roomAnnouncement}
        >
          <h3 style={styles.h3}>
            {/* #{room.name} */}
            Hello Room
          </h3>
          <p>This is the very beginning of the Hello room.</p>
        </div>

        {
          messages.map(msg => (
            <Message
              message={msg}
              key={msg.id}
            />
          ))
        }
    
        <div>
          {/* ref= */}
           {el => this.messgaesEnd = el}
        </div>
      </div>
    )
}
}

const styles = {
  messageList: {
    backgroundColor: 'white',
    flex: 1,
    paddingBottom: '1rem',
    overflowY: 'scroll',
  },

  roomAnnouncement: {
    padding: '2rem 1rem',
  },

  h3: {
    fontSize: '1.5rem',
  },
}

export default MessageList