import {GET_NOTES} from '../type'
import firebase from '../../Config/fbconfig'

 export const getnotes = () =>{
    return (dispatch) =>{
        dispatch({ type: GET_NOTES });

  

    }

}