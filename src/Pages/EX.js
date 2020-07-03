import React, { Component } from "react";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  
}));

export default function EX() {
  const classes = useStyles();
 
  return (
    <div className={classes.root}>
     
    </div>
  );
}


///// class base component



import React from 'react'
import { withStyles } from "@material-ui/styles";
import { Grid, Container } from '@material-ui/core';

const styles = {
    root:{
        marginTop:10,
    },
}

class Chat extends React.Component{
 
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
export default  withStyles(styles)(Chat)
