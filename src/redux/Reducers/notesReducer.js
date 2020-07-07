import {GET_NOTES} from "../type"
import firebase from "../../Config/fbconfig"

let initialstate ={ }

export default function notesReducer(state = initialstate, action){
    switch(action.type){
        case GET_NOTES:
            firebase
            .firestore()
            .collection('notes')
            .onSnapshot(serverUpdate => {
              const notes = serverUpdate.docs.map(_doc => {
                const data = _doc.data();
                data['id'] = _doc.id;
                return data;
              });
              
            })
            return state
        default:
            return state
    }

}