console.log("Initializing via Global Code")

//Connection Stuff
const firebase = require("firebase");
// Initialize Firebase



const firebaseConfig = {
  apiKey: "AIzaSyDA9Dms7YwIRcAfsB9f3LWUEYAJv8ekQvI",
  authDomain: "pack-f51a1.firebaseapp.com",
  databaseURL: "https://pack-f51a1.firebaseio.com",
  storageBucket: "pack-f51a1.appspot.com",
};
const firebaseObject = firebase.initializeApp(firebaseConfig);
console.log("===Firebase Intialized===");





module.exports = {
  firebaseObject,
  STORE_KEY: 'a56z0fzrNpl^2',
  BASE_URL: 'http://someurl.com',
  COLOR: {
    ORANGE: '#C50',
    DARKBLUE: '#0F3274',
    LIGHTBLUE: '#6EA8DA',
    DARKGRAY: '#999',
  },
};