import React from "react";
import { withStyles } from "@material-ui/styles";
import { Grid, Container } from "@material-ui/core";
import Paper from "@material-ui/core/Paper";

const styles = {
 
};

class Chat extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            
        }  
       
     }


  render() {
    const { classes } = this.props;
    return (
      <Container fixed>
        <Grid container className={classes.rootContainer}>
        
          <Grid item xs={12} md={6} lg={6}>
            
            </Grid>
            
         
        </Grid>
      </Container>
    );
  }
}
export default withStyles(styles)(Chat);
