import React from "react";
import { AppBar, Toolbar, Typography } from "@material-ui/core";
import CreateDialog from "../Exercises/Dialogs/Create";
export default ({ muscles, onExerciseCreate }) => (
  <AppBar position="static">
    <Toolbar>
      <Typography variant="h6" color="inherit" style={{ flex: 1 }}>
        Exercises
      </Typography>
      <CreateDialog onCreate={onExerciseCreate} muscles={muscles} />
    </Toolbar>
  </AppBar>
);
