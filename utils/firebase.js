import firebase from "firebase/app";
import "firebase/auth";  
import "firebase/firestore";  
import "firebase/database";

var config = {
  apiKey: "AIzaSyArFvHIUxQeBO1uswZq9wWcBZxL5LTjsCI",
  firebaseDomain: "segur-db.firebaseapp.com",
  databaseURL: "https://segur-db.firebaseio.com",
  projectId: "segur-db",
  storageBucket: "segur-db.appspot.com",
  messagingSenderId: "869232025034"
};

if (!firebase.apps.length) { 
  firebase.initializeApp(config);
}

const auth = firebase.auth();
const firestore = firebase.firestore();
const database = firebase.database();

module.exports = { auth, firestore, database };
