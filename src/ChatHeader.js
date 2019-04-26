import React from 'react'

const ChatHeader = ({ room }) => {
  return (
    <header
      className="ChatHeader"
      style={styles.chatHeader}
    >
      <div className="roomInfo">
        <h2 style={styles.h2}>
          #{room.name}
        </h2>
        <p style={styles.p}>
          {room.description}
        </p>
      </div>
    </header>
  )
}

const styles = {
  chatHeader: {
    backgroundColor: '#f3f3f3',
    borderBottom: '1px solid #ccc',
    padding: '0.5rem 1rem',
    display: 'flex',
    alignItems: 'center',
  },

  h2: {
    fontSize: '1.1rem',
    margin: 0,
  },

  p: {
    color: '#999',
    margin: 0,
    fontSize: '0.8rem',
  }
}

export default ChatHeader