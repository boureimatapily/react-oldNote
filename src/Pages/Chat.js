import React from "react";
import { withStyles } from "@material-ui/styles";
import { Grid, Container } from "@material-ui/core";
import MessageList from "../Components/Chat/MessageList";
import NewRoomForm from "../Components/Chat/NewRoomForm";
import RoomList from "../Components/Chat/RoomList";
import SendMessageForm from "../Components/Chat/SendMessageForm";
import Paper from "@material-ui/core/Paper";

const styles = {
  rootContainer: {},
  root: {
    marginTop: 10,
    display: "flex",
  },
  paperForm: {},
};

class Chat extends React.Component {
  render() {
    const { classes } = this.props;
    return (
      <Container fixed>
        <Grid container className={classes.rootContainer}>
          <Grid item xs md lg>
            {" "}
          </Grid>
          <Grid item xs={12} md={6} lg={6}>
            <Grid container className={classes.root}>
              <Grid item xs={4} md={4} lg={4}>
                <Paper className={classes.paperForm}><RoomList /></Paper>
              </Grid>
              <Grid item xs={8} md={8} lg={8}>
                <Paper className={classes.paperForm}> <MessageList /></Paper>
              </Grid>
            </Grid>
            <Grid container className={classes.root}>
              <Grid item xs={4} md={4} lg={4}>
                <Paper className={classes.paperForm}> <NewRoomForm /> </Paper>
              </Grid>
              <Grid item xs={8} md={8} lg={8}>
                <Paper className={classes.paperForm}> <SendMessageForm /> </Paper>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs md lg>
            {" "}
          </Grid>
        </Grid>
      </Container>
    );
  }
}
export default withStyles(styles)(Chat);
