import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyALY9npbRJgqPgx7hh1KeK7Yq30QFXa900",
    authDomain: "olxclone3.firebaseapp.com",
    databaseURL: "https://olxclone3.firebaseio.com",
    projectId: "olxclone3",
    storageBucket: "olxclone3.appspot.com",
    messagingSenderId: "502325889101",
    appId: "1:502325889101:web:81e9505815d729f74ab404",
    measurementId: "G-CW9BH3MX8V"
});

const auth = firebase.auth();

export {auth}