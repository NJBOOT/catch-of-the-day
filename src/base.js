import Rebase from "re-base";
import firebase from "firebase/app";
import "firebase/database";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyBO2qXRbriuDcqF4e7L-bRvU09Wu5q2Hfg",
  authDomain: "catch-of-the-day-njboot.firebaseapp.com",
  databaseURL: "https://catch-of-the-day-njboot.firebaseio.com",
  projectId: "catch-of-the-day-njboot",
  storageBucket: "catch-of-the-day-njboot.appspot.com",
  messagingSenderId: "934408079306",
  appId: "1:934408079306:web:66ef8ce73eab40883a3133",
  measurementId: "G-JEYH8CKDEW",
});

const base = Rebase.createClass(firebaseApp.database());

// This is a named export
export { firebaseApp };

// This is a default
export default base;
