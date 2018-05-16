import firebase from 'firebase'
// Initialize Firebase
var config = {
    apiKey: "AIzaSyDHeDwtPkEJOOHdJfDy8JES5jDvpVE7pts",
    authDomain: "simons-sandbox.firebaseapp.com",
    databaseURL: "https://simons-sandbox.firebaseio.com",
    projectId: "simons-sandbox",
    storageBucket: "simons-sandbox.appspot.com",
    messagingSenderId: "917262950906"
  };
  firebase.initializeApp(config);


export const auth = firebase.auth()
export const database = firebase.database()
export const googleProvider = new firebase.auth.GoogleAuthProvider()




