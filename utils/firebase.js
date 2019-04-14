// const admin = require("firebase-admin");

// const keyPath = `${process.env.SEGUR_ACCOUNT_KEY}`;
// const serviceAccount = require(keyPath);

// admin.initializeApp({
//   credential: admin.credential.cert(serviceAccount),
//   databaseURL: `${process.env.SEGUR_DATABASE_URL}`
// });

// const db = admin.firestore();
// const auth = admin.auth();

// module.exports = { db, auth };

import firebase from "firebase/app";
import "firebase/auth";  
import "firebase/firestore";  

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

module.exports = { auth, firestore };