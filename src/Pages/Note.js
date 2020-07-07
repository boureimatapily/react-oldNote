import React from 'react'
import { withStyles } from "@material-ui/styles";
import { Grid, Container } from '@material-ui/core';
import "../util/note.css"
import firebase from "../Config/fbconfig"
import { connect } from 'react-redux';
// import {getnotes} from "../redux/Actions/notesActions"


const styles = {
    root:{
        marginTop:10,
    },
}

class Note extends React.Component{
    constructor(props){
        super(props)
        this.state={
            selectedNoteIndex: null,
            selectedNote: null,
            notes: null
        }
    }

    componentDidMount = () => {
        firebase
          .firestore()
          .collection('notes')
          .onSnapshot(serverUpdate => {
            const notes = serverUpdate.docs.map(_doc => {
              const data = _doc.data();
              data['id'] = _doc.id;
              return data;
            });
            console.log(notes);
            this.setState({ notes: notes });
          });
      }
    
    

 
  render(){
     const { classes } = this.props;
    return(
        <Container fixed> 
            <Grid container className={classes.root}>
                 
             </Grid>
               
        </Container>
    )
  }
}

// const mapStateToProps = (state) =>{
//     allnotes: state.notes
// }
export default  withStyles(styles)(connect(null)(Note))