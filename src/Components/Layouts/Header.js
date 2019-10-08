import React from "react";
import { AppBar, Toolbar, Typography } from "@material-ui/core";
import Dialog from "../Exercises/Dialogs/Create";
export default props => (
  <AppBar position="static">
    <Toolbar>
      <Typography variant="title" color="inherit" style={{ flex: 1 }}>
        Exercises
      </Typography>
      <Dialog />
    </Toolbar>
  </AppBar>
);
