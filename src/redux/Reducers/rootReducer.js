import { combineReducers } from "redux";
import  currentUser from "./authReducer";
// import { firebaseReducer } from "react-redux-firebase";
// import { firestoreReducer } from "redux-firestore";

export default combineReducers({
     currentUser,
    
    });