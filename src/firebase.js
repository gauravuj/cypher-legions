import firebase from "firebase/compat/app";
import "firebase/compat/auth";

export const auth = firebase
  .initializeApp({
    apiKey: "AIzaSyDdnYAeU-mrkohdz3zkD3pF8EIgLpmWC1Y",
    authDomain: "connect-40379.firebaseapp.com",
    projectId: "connect-40379",
    storageBucket: "connect-40379.appspot.com",
    messagingSenderId: "73280186746",
    appId: "1:73280186746:web:0c36e7aaaf28cce1f48ec3",
    measurementId: "G-GST2NY2D34",
  })
  .auth();
