import React from "react";
import Note from "./Note";
import { Container, Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import "../Components/Home/Home.css";

const useStyles = makeStyles((theme) => ({
  root: {
   display:"flex",
   flexDirection:"column",
   justifyContent:"space-between",
  
  },
  note:{
    marginTop:50
  }
}));

export default function Home() {
  const classes = useStyles();

  return (
    <Container fixed>
      <Grid container style={{ marginTop: 50 }} className={classes.root}>
        <Grid item xs={12} md={12} lg={12}>
          <div className="hcontainer">
            <h1> Welcome to my note app</h1>
          </div>
        </Grid>
        <Grid item xs={12} md={12} lg={12} className={classes.note}>
          <Note />
        </Grid>
      </Grid>
    </Container>
  );
}
