import React from 'react'
import { NavLink } from 'react-router-dom'
import { StyleSheet, css } from 'aphrodite'
import base from './Fire'

const Room = ({ roomName }) => {
  return (
    <li className={css(styles.item)}>
      <NavLink
        to={`/src/${roomName}`}
        className={css(styles.link)}
      >
        {roomName}
      </NavLink>
    </li>
  )
}

const styles = StyleSheet.create({
  item: {
    marginBottom: '0.5rem',
  },

  link: {
    display: 'block',
    color: 'whitesmoke',
    textDecoration: 'none',

    '::before': {
      content: '"# "',
    },

    ':hover': {
      backgroundColor: 'rgba(255, 255, 255, 0.2)',
    },
  },
})

export default Room