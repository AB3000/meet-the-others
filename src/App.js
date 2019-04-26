import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import {StyleSheet, css} from 'aphrodite';
import styled, { keyframes } from 'styled-components';
import { inherits } from 'util';
import { withRouter, Route, BrowserRouter, NavLink, Switch } from 'react-router-dom';
import Chat from './Chat.js';
import Home from './Home.js';

<BrowserRouter>
<Switch>
  <Route>
        path = "/Chat" component = {Chat}
        path  ="/Home" component = {Home}
  </Route>
</Switch>
</BrowserRouter>

export default withRouter(App)