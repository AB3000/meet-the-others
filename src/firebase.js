import firebase from 'firebase'

// this file takes in the given firebase code and adds your api information onto it
// then exporting as an authenticated object that you can just call

var config = {
    apiKey: "AIzaSyAgQHIEDXjJaeiJZKbMuxTchYaFLTehH1g",
    authDomain: "meet-the-others.firebaseapp.com",
    databaseURL: "https://meet-the-others.firebaseio.com",
    projectId: "meet-the-others",
    storageBucket: "meet-the-others.appspot.com",
    messagingSenderId: "313507434165"
}
firebase.initializeApp(config)
export default firebase