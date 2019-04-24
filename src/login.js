import React, { Component } from 'react';
import './App.css';
import { StyleSheet, css } from 'aphrodite';
import styled, { keyframes } from 'styled-components';
import { inherits } from 'util';
import { withRouter } from 'react-router-dom';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import firebase from './Fire'; // use this when database is implemented
import Chat from "./Chat";
import login from "./App";
import PrivateRoute from "./PrivateRoute";
import { app } from 'firebase';

class SignInContainer extends Component {

}