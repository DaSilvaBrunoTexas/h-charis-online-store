import firebase from "firebase/app";

import "firebase/firestore";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBsm0xWefh4RlscjkP3BVX1uCtQcC6odas",
  authDomain: "h-charis-online-store.firebaseapp.com",
  databaseURL: "https://h-charis-online-store.firebaseio.com",
  projectId: "h-charis-online-store",
  storageBucket: "h-charis-online-store.appspot.com",
  messagingSenderId: "73092717115",
  appId: "1:73092717115:web:716ce06c609af9cd2b5a1e",
  measurementId: "G-6N5YC2X9K1",
};

// Initialize the app
firebase.initializeApp(firebaseConfig);

// Exporting auth and firestore
export const auth = firebase.auth();
export const firestore = firebase.firestore();

// Setting Google signin

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;