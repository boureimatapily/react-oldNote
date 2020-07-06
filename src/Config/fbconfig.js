import * as firebase from "firebase/app";
// Add the Firebase services that you want to use
import "firebase/firestore";
import "firebase/auth";
import "firebase/database";
import "firebase/storage";
import "firebase/analytics";

var firebaseConfig = {
  apiKey: "AIzaSyC9fDtf1TkDZ-GPJNcGeMrJTclRiA_6F7Y",
  authDomain: "user-notes-ed731.firebaseapp.com",
  databaseURL: "https://user-notes-ed731.firebaseio.com",
  projectId: "user-notes-ed731",
  storageBucket: "user-notes-ed731.appspot.com",
  messagingSenderId: "260299530022",
  appId: "1:260299530022:web:fdbfadae1d8dd950c2ebe7"
};
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  const storage = firebase.storage();
  const auth = firebase.auth()
  // So we can use local storage for initial UI purposes
const getAuthenticationStatus = () => {
  return localStorage.getItem("isAuthenticated")
}

  export { auth, storage, getAuthenticationStatus, firebase as default };