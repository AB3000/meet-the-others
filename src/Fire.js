import firebase from 'firebase'
import "firebase/database"
import "firebase/auth"

import Rebase from "re-base";
// this file takes in the given firebase code and adds your api information onto it
// then exporting as an authenticated object that you can just call

var config = {
    apiKey: "AIzaSyAgQHIEDXjJaeiJZKbMuxTchYaFLTehH1g",
    authDomain: "meet-the-others.firebaseapp.com",
    databaseURL: "https://meet-the-others.firebaseio.com",
    projectId: "meet-the-others",
    storageBucket: "meet-the-others.appspot.com",
    messagingSenderId: "313507434165"
    
};
const app = firebase.initializeApp(config)

// require('firebase/auth') //ADDED THIS LINE FEEL FREE TO CHANGE


export const auth = firebase.auth()

export const db = firebase.database(app)
const base = Rebase.createClass(db)

export default base;